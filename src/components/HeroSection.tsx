import logo from "@/assets/lockd_logo_transparent.png";
import feedMockup from "@/assets/feed.png";
import homeMockup from "@/assets/home.png";
import leaderboardMockup from "@/assets/leaderboard.png";

const HeroSection = () => {
  const TESTFLIGHT_LINK = "https://testflight.apple.com/join/mzJqUGPY";
  const INSTAGRAM_LINK = "https://www.instagram.com/get.lockd/";
  const TIKTOK_LINK = "https://www.tiktok.com/@get.lockd";

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Logo */}
      <div className="absolute top-1 left-3 md:left-16 z-20">
        <img 
          src={logo} 
          alt="Lockd Logo" 
          className="h-24 w-auto md:h-32"
        />
      </div>

      {/* Social Icons */}
      <div className="absolute top-6 right-3 md:right-16 z-20 flex gap-4">
        <a 
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition-colors duration-200"
          aria-label="Follow us on Instagram"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a 
          href={TIKTOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black transition-colors duration-200"
          aria-label="Follow us on TikTok"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        </a>
      </div>


      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-victory rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-accent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-28">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground via-primary-glow to-secondary bg-clip-text text-transparent leading-tight">
            LOCK THE F*CK IN
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent"></span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The{" "}
            <span className="text-primary font-semibold">#1</span> self improvement app
          </p>

           {/* App Store Button */}
           <div className="mb-12">
             <a 
               href={TESTFLIGHT_LINK}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-xl transition-all duration-200 font-semibold text-base shadow-lg hover:shadow-xl"
             >
               <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
               </svg>
               <div className="flex flex-col items-start">
                 <span className="text-xs leading-none">Download on the</span>
                 <span className="text-lg leading-none font-semibold">App Store</span>
               </div>
             </a>
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;