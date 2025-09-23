import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, Users, Target, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the founding squad! 🏆",
        description: "You're now on the waitlist for day-one access.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-victory rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground via-primary-glow to-secondary bg-clip-text text-transparent leading-tight">
            Ready to Win at
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Real Life?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Lockd isn't just another habit app—it's your{" "}
            <span className="text-primary font-semibold">social arena</span> for healthy competition, 
            real accountability, and next-level self-improvement.
          </p>

          {/* CTA Section */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-secondary animate-pulse-glow" />
              <h3 className="text-2xl font-bold">Be the first to experience Lockd.</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Jump on the waitlist for day-one access and exclusive rewards as part of the founding squad.
            </p>

            <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Drop your email—only the bold need apply"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 border-border/50 backdrop-blur-sm text-lg py-6"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="py-6 px-8 text-lg">
                Join the Squad
                <Trophy className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              🏆 <strong>Founding Squad Perks:</strong> Early access, exclusive badges, and premium features
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-border/30">
              <Target className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold mb-2">Challenge Friends</h4>
              <p className="text-sm text-muted-foreground text-center">Create rivalries that fuel your progress</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-border/30">
              <Trophy className="w-8 h-8 text-secondary mb-3" />
              <h4 className="font-semibold mb-2">Climb the Ranks</h4>
              <p className="text-sm text-muted-foreground text-center">Compete on leaderboards and earn your status</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-border/30">
              <Users className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-semibold mb-2">Real Accountability</h4>
              <p className="text-sm text-muted-foreground text-center">Your community keeps you on track</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;