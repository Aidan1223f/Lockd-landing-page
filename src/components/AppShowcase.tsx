import appMockup from "@/assets/app-mockup.jpg";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Crown, Medal, Star, Flame, Target, Users2, Trophy } from "lucide-react";

const AppShowcase = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-victory rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/30">
            <Crown className="w-4 h-4 mr-2" />
            The Competition Begins
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where Habits Meet
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Competition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your daily routines into thrilling competitions with friends, family, and rivals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* App Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 scale-110"></div>
            <div className="relative bg-gradient-to-b from-card to-card/50 p-8 rounded-3xl border border-border/50 backdrop-blur-sm">
              <img 
                src={appMockup} 
                alt="Lockd app interface showing competitive leaderboards and habit tracking"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating UI elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-victory p-3 rounded-xl shadow-lg animate-float">
                <Trophy className="w-6 h-6 text-background" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-accent p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Flame className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary p-3 rounded-lg group-hover:shadow-glow-primary transition-all duration-300">
                  <Medal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Leaderboards & Rankings</h3>
                  <p className="text-muted-foreground">
                    See where you stand against friends and climb the global rankings. Every habit completion counts toward your score.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-victory p-3 rounded-lg group-hover:shadow-glow-victory transition-all duration-300">
                  <Target className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Challenge System</h3>
                  <p className="text-muted-foreground">
                    Create custom challenges, set stakes, and compete head-to-head. Make every goal a battle worth winning.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-accent p-3 rounded-lg transition-all duration-300">
                  <Users2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Squad Accountability</h3>
                  <p className="text-muted-foreground">
                    Join or create squads with shared goals. Your team's success depends on everyone showing up.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg group-hover:shadow-glow-primary transition-all duration-300">
                  <Star className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Achievement System</h3>
                  <p className="text-muted-foreground">
                    Unlock badges, earn titles, and show off your dedication. Every milestone deserves recognition.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;