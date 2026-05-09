import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-accent/50" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Man Power</span>
                <br />
                <span className="text-primary">Hassle-Free</span>
                <br />
                <span className="text-foreground">Worker Booking</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Book skilled workers instantly or become one – no middlemen, direct contact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.manpower.manpower2024" target="blank" >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary shadow-xl text-lg px-8 py-6 h-auto"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Download on Play Store
                </Button>
              </a>
              <a href="#how-it-works">
                <Button

                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 h-auto"
                >
                  Learn More
                </Button>
              </a>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>No Agency Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>Direct Contact</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-3xl blur-3xl" />
            <div className="relative">
              <img
                src={appMockup}
                alt="Man Power App Interface"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;