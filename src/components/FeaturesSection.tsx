import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Star, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Direct Booking, No Intermediary",
    description: "Connect directly with skilled workers without any middlemen or agency fees."
  },
  {
    icon: Star,
    title: "View Worker Portfolio & Ratings",
    description: "Browse detailed portfolios, ratings, and reviews to make informed decisions."
  },
  {
    icon: Users,
    title: "Become a Worker – Earn on Your Own Terms",
    description: "Register as a worker and offer your services with complete control over your rates."
  },
  {
    icon: Headphones,
    title: "24/7 Support System",
    description: "Get help whenever you need it with our round-the-clock customer support."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Choose <span className="text-primary">Man Power</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of worker booking with our innovative features designed for both customers and workers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-lg">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;