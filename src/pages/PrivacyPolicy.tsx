import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/30 shadow-xl">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Privacy Policy - Lockd
          </h1>
          <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
              <p>
                Lockd ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our Service.
              </p>
              <p className="font-semibold mt-4">By using Lockd, you agree to this Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Information You Provide</h3>
              <p className="font-semibold">Account Information:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Password (encrypted)</li>
              </ul>

              <p className="font-semibold mt-4">Payment Information:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Credit/debit card details (processed by Stripe - we never store full card numbers)</li>
                <li>Billing address</li>
              </ul>

              <p className="font-semibold mt-4">Identity Verification (for recipients):</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Social Security Number (last 4 digits only)</li>
                <li>Date of birth</li>
                <li>Home address</li>
                <li>Debit card or bank account (for payouts)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Information Collected Automatically</h3>
              <p className="font-semibold">Usage Data:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>IP address</li>
                <li>Device type and operating system</li>
                <li>Browser type</li>
                <li>Pages visited and features used</li>
                <li>Time and date of visits</li>
                <li>Referring website</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Information from Third Parties</h3>
              <p className="font-semibold">Stripe:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Payment verification status</li>
                <li>Transaction details</li>
                <li>Payout status</li>
                <li>Fraud detection signals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2.1 To Provide the Service</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Create and manage your account</li>
                <li>Process payments and payouts</li>
                <li>Send transaction notifications</li>
                <li>Facilitate challenges between users</li>
                <li>Provide customer support</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.2 For Legal Compliance</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Verify your identity (required by federal law)</li>
                <li>Prevent fraud and money laundering</li>
                <li>File 1099-K tax forms (if you earn $600+/year)</li>
                <li>Respond to legal requests</li>
                <li>Enforce our Terms of Service</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.3 To Improve Our Service</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Analyze usage patterns</li>
                <li>Fix bugs and technical issues</li>
                <li>Develop new features</li>
                <li>Personalize your experience</li>
                <li>Conduct research and analytics</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.4 For Marketing (with your consent)</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Send promotional emails</li>
                <li>Notify you about new features</li>
                <li>Share updates and announcements</li>
                <li><strong>You can opt out anytime</strong></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Share Your Information</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Service Providers</h3>
              <p>We share data with trusted partners who help us operate:</p>
              
              <p className="font-semibold mt-4">Stripe (Payment Processor):</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Payment card information</li>
                <li>Identity verification data</li>
                <li>Transaction details</li>
                <li>Purpose: Process payments and payouts</li>
                <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe's Privacy Policy</a></li>
              </ul>

              <p className="font-semibold mt-4">Supabase (Database & Backend):</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Account information</li>
                <li>Challenge data</li>
                <li>Usage logs</li>
                <li>Purpose: Host and manage data</li>
                <li><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Supabase Privacy Policy</a></li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.2 With Other Users</h3>
              <p className="font-semibold">Publicly Shared:</p>
              <p>Nothing! Your challenges are private by default</p>

              <p className="font-semibold mt-4">With Accountability Partners:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Your name</li>
                <li>Challenge details you share</li>
                <li>Payment notifications (amounts only)</li>
              </ul>

              <p className="font-semibold mt-4">We do NOT share:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Your full payment card details</li>
                <li>Your SSN or DOB</li>
                <li>Your address</li>
                <li>Your phone number</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. How We Protect Your Information</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Security Measures</h3>
              <p className="font-semibold">Encryption:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>All data is encrypted in transit (TLS/SSL)</li>
                <li>Sensitive data is encrypted at rest</li>
                <li>Passwords are hashed with bcrypt</li>
              </ul>

              <p className="font-semibold mt-4">Payment Security:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>We use Stripe (PCI DSS Level 1 certified)</li>
                <li>We never store full credit card numbers</li>
                <li>We never store CVV codes</li>
                <li>Card data goes directly to Stripe's secure servers</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Data Retention</h3>
              <p className="font-semibold">Account Data:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Kept as long as your account is active</li>
                <li>Deleted within 90 days of account closure</li>
              </ul>

              <p className="font-semibold mt-4">Transaction Data:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Kept for 7 years (required for tax purposes)</li>
                <li>Personal identifiers removed after 90 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Privacy Rights</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Access & Control</h3>
              <p className="font-semibold">You have the right to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access your personal data</li>
                <li>Download your data (data portability)</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Opt out of marketing emails</li>
              </ul>

              <p className="mt-4">To exercise these rights, email: <a href="mailto:privacy@getlockd.app" className="text-primary hover:underline">privacy@getlockd.app</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
              <p>For privacy questions or requests:</p>
              <p><strong>Email:</strong> <a href="mailto:privacy@getlockd.app" className="text-primary hover:underline">privacy@getlockd.app</a></p>
              <p><strong>Website:</strong> <a href="https://getlockd.app/privacy" className="text-primary hover:underline">https://getlockd.app/privacy</a></p>
              <p className="mt-4">Response time: Within 30 days</p>
            </section>

            <section className="mt-12 p-6 bg-card/50 rounded-lg border border-border/30">
              <h2 className="text-2xl font-semibold mb-4">Summary (Plain English)</h2>
              
              <p className="font-semibold mt-4">What We Collect:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Name, email, phone</li>
                <li>Payment info (via Stripe)</li>
                <li>SSN last 4, DOB, address (for recipients only)</li>
                <li>Challenge data</li>
                <li>Usage data</li>
              </ul>

              <p className="font-semibold mt-4">Your Rights:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access your data</li>
                <li>Download your data</li>
                <li>Correct errors</li>
                <li>Delete your account</li>
                <li>Opt out of marketing</li>
              </ul>

              <p className="font-semibold mt-4">Security:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Bank-level encryption</li>
                <li>PCI DSS compliant (via Stripe)</li>
                <li>We never store full card numbers or SSNs</li>
                <li>Regular security audits</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

