import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/66577fed-6f64-4492-9b22-e4e378b03ffc.png" 
            alt="Man Power Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
        </nav>

        <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary shadow-lg">
          Download App
        </Button>
      </div>
    </header>
  );
};

export default Header;