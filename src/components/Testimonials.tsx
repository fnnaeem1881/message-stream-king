import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Pusher has been instrumental in scaling our real-time features. The reliability and ease of integration saved us months of development time.",
      author: "Sarah Chen",
      role: "Lead Developer",
      company: "GitHub",
      avatar: "/api/placeholder/40/40",
      rating: 5
    },
    {
      content: "The global infrastructure ensures our users get instant updates regardless of their location. Outstanding performance and support.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "Shopify",
      avatar: "/api/placeholder/40/40",
      rating: 5
    },
    {
      content: "We replaced our custom WebSocket implementation with Pusher and saw immediate improvements in stability and developer productivity.",
      author: "Emily Watson",
      role: "Engineering Manager",
      company: "The New York Times",
      avatar: "/api/placeholder/40/40",
      rating: 5
    },
    {
      content: "The documentation is excellent and the SDKs are well-designed. Getting real-time features up and running was surprisingly simple.",
      author: "David Kim",
      role: "Senior Developer",
      company: "Mailchimp",
      avatar: "/api/placeholder/40/40",
      rating: 5
    },
    {
      content: "Pusher's analytics helped us optimize our real-time features and understand user behavior patterns we couldn't see before.",
      author: "Lisa Thompson",
      role: "Product Manager",
      company: "Stripe",
      avatar: "/api/placeholder/40/40",
      rating: 5
    },
    {
      content: "The enterprise support is fantastic. When we had questions during our migration, the team was incredibly responsive and helpful.",
      author: "James Wilson",
      role: "DevOps Lead",
      company: "Uber",
      avatar: "/api/placeholder/40/40",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by developers
            <span className="bg-gradient-hero bg-clip-text text-transparent"> worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of teams who trust Pusher to power their real-time experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
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

export default Testimonials;