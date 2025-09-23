import { supabase } from './supabase'

export interface WaitlistStats {
  total: number
  today: number
  thisWeek: number
}

export const waitlistService = {
  // Add email to waitlist
  async addEmail(email: string, source: string = 'landing_page') {
    const { data, error } = await supabase
      .from('waitlist_emails')
      .insert([
        { 
          email: email.toLowerCase().trim(),
          source,
          metadata: {
            user_agent: navigator.userAgent,
            timestamp: new Date().toISOString(),
            referrer: document.referrer || 'direct'
          }
        }
      ])
      .select()

    if (error) throw error
    return data
  },

  // Get waitlist statistics (for admin dashboard)
  async getStats(): Promise<WaitlistStats> {
    const today = new Date()
    const startOfToday = new Date(today.setHours(0, 0, 0, 0))
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()))

    const [totalResult, todayResult, weekResult] = await Promise.all([
      supabase.from('waitlist_emails').select('id', { count: 'exact', head: true }),
      supabase.from('waitlist_emails').select('id', { count: 'exact', head: true }).gte('created_at', startOfToday.toISOString()),
      supabase.from('waitlist_emails').select('id', { count: 'exact', head: true }).gte('created_at', startOfWeek.toISOString())
    ])

    if (totalResult.error) throw totalResult.error
    if (todayResult.error) throw todayResult.error
    if (weekResult.error) throw weekResult.error

    return {
      total: totalResult.count || 0,
      today: todayResult.count || 0,
      thisWeek: weekResult.count || 0
    }
  },

  // Get all waitlist emails (for admin export)
  async getAllEmails() {
    const { data, error } = await supabase
      .from('waitlist_emails')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }
}
