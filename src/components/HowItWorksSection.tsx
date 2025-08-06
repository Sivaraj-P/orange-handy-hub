import { Card, CardContent } from "@/components/ui/card";
import { Search, UserPlus, MessageCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Browse or Register",
    description: "Search for skilled workers by category or register yourself as a service provider on our platform."
  },
  {
    step: "02", 
    icon: UserPlus,
    title: "Choose Based on Reviews",
    description: "Select workers based on their portfolio, ratings, reviews, and availability that matches your needs."
  },
  {
    step: "03",
    icon: MessageCircle,
    title: "Book Directly & Chat",
    description: "Book the worker directly and start chatting to discuss your project details and requirements."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How <span className="text-primary">Man Power</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in just three simple steps and connect with skilled workers instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary-light/50 transform translate-x-8 z-0" />
                )}
                
                <Card className="relative z-10 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full shadow-lg">
                        <Icon className="h-10 w-10 text-primary-foreground" />
                      </div>
                      
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;