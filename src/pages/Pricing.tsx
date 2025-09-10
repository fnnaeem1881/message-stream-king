import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Sandbox",
      description: "Perfect for development and testing",
      price: { monthly: 0, annual: 0 },
      features: [
        "100 concurrent connections",
        "10,000 messages/day",
        "Community support",
        "Basic analytics",
        "7-day message history"
      ],
      cta: "Start Free",
      popular: false,
      variant: "secondary" as const
    },
    {
      name: "Pro",
      description: "For production applications",
      price: { monthly: 49, annual: 39 },
      features: [
        "10,000 concurrent connections",
        "10M messages/month",
        "Priority support",
        "Advanced analytics",
        "30-day message history",
        "Custom integrations",
        "99.95% uptime SLA"
      ],
      cta: "Start Pro Trial",
      popular: true,
      variant: "hero" as const
    },
    {
      name: "Business",
      description: "For high-traffic applications",
      price: { monthly: 199, annual: 159 },
      features: [
        "100,000 concurrent connections",
        "100M messages/month",
        "24/7 phone support",
        "Real-time analytics",
        "90-day message history",
        "Dedicated account manager",
        "99.99% uptime SLA",
        "Custom contracts"
      ],
      cta: "Start Business Trial",
      popular: false,
      variant: "secondary" as const
    }
  ];

  const enterpriseFeatures = [
    "Unlimited concurrent connections",
    "Custom message limits",
    "Dedicated infrastructure",
    "On-premise deployment",
    "Custom SLA up to 99.999%",
    "White-glove onboarding",
    "Training and workshops",
    "Premium support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Simple, transparent
              <span className="bg-gradient-hero bg-clip-text text-transparent"> pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-gradient-hero"
              />
              <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual
              </span>
              <Badge variant="secondary" className="ml-2">Save 20%</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`bg-gradient-card border-border hover:shadow-card transition-all duration-300 group relative ${plan.popular ? 'ring-2 ring-primary/20' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-hero text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    <div className="text-4xl font-bold">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                      <span className="text-lg font-normal text-muted-foreground">
                        {plan.price.monthly > 0 ? '/month' : ''}
                      </span>
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <div className="text-sm text-muted-foreground mt-1">
                        ${plan.price.monthly}/month billed annually
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.variant} className="w-full group-hover:shadow-glow">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise
                <span className="bg-gradient-hero bg-clip-text text-transparent"> solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Custom solutions for large-scale applications with dedicated support and infrastructure.
              </p>
            </div>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Custom Enterprise Plans</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Get a tailored solution that meets your specific requirements with dedicated infrastructure, custom SLAs, and premium support.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {enterpriseFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="text-3xl font-bold mb-4">Custom Pricing</div>
                    <p className="text-muted-foreground mb-6">
                      Volume discounts available
                    </p>
                    <div className="space-y-3">
                      <Button variant="hero" size="lg" className="w-full lg:w-auto">
                        Contact Sales
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <div className="text-sm text-muted-foreground">
                        Response within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <Button variant="hero" size="lg">
              View All FAQs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;