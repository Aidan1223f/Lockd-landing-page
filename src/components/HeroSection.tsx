import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, Users, Target, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import logo from "@/assets/lockd_logo_transparent.png";
import feedMockup from "@/assets/feed.png";
import homeMockup from "@/assets/home.png";
import leaderboardMockup from "@/assets/leaderboard.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      // Use requestAnimationFrame for better mobile compatibility
      requestAnimationFrame(() => {
        waitlistSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      });
    }
  };

  const submitEmail = async (email: string) => {
    // Validate email before submission
    if (!email || email.trim() === '') {
      console.error('Email is required and cannot be empty');
      return;
    }
    
    try {
      const { data, error } = await supabase
        .from('waitlist_emails')
        .insert({ email: email.trim().toLowerCase() });
      
      if (error) {
        // Handle duplicate email error
        if (error.code === '23505') {
          toast({
            title: "Already on the list! 🎯",
            description: "You're already signed up for early access.",
            variant: "default",
          });
          return;
        }
        throw error;
      }
      
      console.log('Email submitted successfully');
      toast({
        title: "Welcome to the founding squad! 🏆",
        description: "You're now on the waitlist for day-one access.",
      });
      setEmail("");
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support if the issue persists.",
        variant: "destructive",
      });
    }
  };

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      await submitEmail(email);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
       {/* Logo */}
       <div className="absolute top-2 left-3 md:top-6 md:left-6 z-20">
         <img 
           src={logo} 
           alt="Lockd Logo" 
           className="h-20 w-auto md:h-32"
         />
       </div>


      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-victory rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-16">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground via-primary-glow to-secondary bg-clip-text text-transparent leading-tight">
            LOCK THE F*CK IN
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent"></span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The{" "}
            <span className="text-primary font-semibold">#1</span> self improvement app
          </p>

          {/* Join Waitlist Button */}
          <div className="mb-12">
            <Button 
              onClick={scrollToWaitlist}
              onTouchEnd={scrollToWaitlist}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-purple-600 hover:text-white px-8 py-3"
            >
              Join the Waitlist
            </Button>
          </div>

           {/* App Mockups - Mobile Vertical Stack, Desktop Horizontal Grid */}
           <div className="mb-16 max-w-4xl mx-auto px-4">
             {/* Mobile Layout - Vertical Stack */}
             <div className="md:hidden space-y-8">
               {/* Home Mockup */}
               <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                 <div className="flex flex-col items-center gap-6">
                   <div className="flex-shrink-0">
                     <img 
                       src={homeMockup} 
                       alt="Lockd Home Screen - Daily tasks and progress tracking"
                       className="w-48 mx-auto rounded-xl shadow-2xl"
                     />
                   </div>
                   <div className="text-center flex-1">
                     <h4 className="text-xl font-bold text-white mb-3">Track Your Progress</h4>
                     <p className="text-base text-muted-foreground leading-relaxed">
                       Complete daily tasks and climb the ranks.
                     </p>
                   </div>
                 </div>
               </div>

               {/* Feed Mockup */}
               <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                 <div className="flex flex-col items-center gap-6">
                   <div className="flex-shrink-0">
                     <img 
                       src={feedMockup} 
                       alt="Lockd Feed Screen - Social challenge updates"
                       className="w-48 mx-auto rounded-xl shadow-2xl"
                     />
                   </div>
                   <div className="text-center flex-1">
                     <h4 className="text-xl font-bold text-white mb-3">Stay Connected</h4>
                     <p className="text-base text-muted-foreground leading-relaxed">
                       See what your friends are accomplishing.
                     </p>
                   </div>
                 </div>
               </div>

               {/* Leaderboard Mockup */}
               <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
                 <div className="flex flex-col items-center gap-6">
                   <div className="flex-shrink-0">
                     <img 
                       src={leaderboardMockup} 
                       alt="Lockd Leaderboard Screen - Global rankings"
                       className="w-48 mx-auto rounded-xl shadow-2xl"
                     />
                   </div>
                   <div className="text-center flex-1">
                     <h4 className="text-xl font-bold text-white mb-3">Compete Globally</h4>
                     <p className="text-base text-muted-foreground leading-relaxed">
                       Climb the global leaderboard and prove you're the best.
                     </p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Desktop Layout - Horizontal 3-Column Grid */}
             <div className="hidden md:grid md:grid-cols-3 gap-6">
               <div className="text-center">
                 <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mb-4">
                   <img 
                     src={homeMockup} 
                     alt="Lockd Home Screen - Daily tasks and progress tracking"
                     className="w-full max-w-xs mx-auto rounded-xl shadow-2xl"
                   />
                 </div>
                 <h4 className="font-semibold text-white mb-2">Track Your Progress</h4>
                 <p className="text-sm text-muted-foreground">Complete daily tasks and climb the ranks</p>
               </div>
               
               <div className="text-center">
                 <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mb-4">
                   <img 
                     src={feedMockup} 
                     alt="Lockd Feed Screen - Social challenge updates"
                     className="w-full max-w-xs mx-auto rounded-xl shadow-2xl"
                   />
                 </div>
                 <h4 className="font-semibold text-white mb-2">Stay Connected</h4>
                 <p className="text-sm text-muted-foreground">See what your friends are accomplishing</p>
               </div>
               
               <div className="text-center">
                 <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mb-4">
                   <img 
                     src={leaderboardMockup} 
                     alt="Lockd Leaderboard Screen - Global rankings"
                     className="w-full max-w-xs mx-auto rounded-xl shadow-2xl"
                   />
                 </div>
                 <h4 className="font-semibold text-white mb-2">Compete Globally</h4>
                 <p className="text-sm text-muted-foreground">Climb the global leaderboard</p>
               </div>
             </div>
           </div>

          {/* CTA Section */}
         <div id="waitlist-section" className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-secondary animate-pulse-glow" />
              <h3 className="text-2xl font-bold">Be the first to experience Lockd.</h3>
            </div>
            
            <p className="text-center text-muted-foreground mb-6">
              Join the waitlist
            </p> 
            
           

            <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 border-border/50 backdrop-blur-sm text-lg py-6"
                required
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="py-6 px-8 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join"}
                <Trophy className="w-5 h-5 ml-2" />
              </Button>
            </form>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;