import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-border/30 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Lockd. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <a 
              href="mailto:support@getlockd.app" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

