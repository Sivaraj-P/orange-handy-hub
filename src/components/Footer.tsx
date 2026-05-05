import { Button } from "@/components/ui/button";
import { Play, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <img
              src="/lovable-uploads/logo1.png"
              alt="Man Power Logo"
              className="h-10 w-auto rounded-lg"
            />
            <p className="text-secondary-foreground/80 leading-relaxed">
              Connecting skilled workers with customers directly, without any intermediaries.
            </p>

            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <Play className="mr-2 h-4 w-4" />
              Available now on Play Store
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              {/* <li>
                <a href="#testimonials" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li> */}
              <li>
                <a href="/terms" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">manpowerindiasky2024@gmail.com</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">Kallakuruchi, TamilNadu, India</span>
              </div>
            </div>
          </div>

          {/* <div className="space-y-6">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-secondary-foreground/60">
                Get started today and join thousands of satisfied users!
              </p>
            </div>
          </div> */}
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2026 ManPower. All rights reserved. Empowering workers, connecting communities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;