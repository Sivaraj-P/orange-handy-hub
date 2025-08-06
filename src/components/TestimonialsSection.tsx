import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Found an amazing electrician through Man Power. Direct contact made everything so much easier and no extra fees!"
  },
  {
    name: "Mike Thompson", 
    role: "Plumber",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a worker, I love that I can set my own rates and connect directly with customers. No more agency cuts!"
  },
  {
    name: "Emily Davis",
    role: "Business Owner", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The portfolio and rating system helped me find the perfect carpenter for my office renovation. Highly recommended!"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Man Power is transforming the way people connect with skilled workers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="h-12 w-12" />
              </div>
              
              <CardContent className="p-8 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;