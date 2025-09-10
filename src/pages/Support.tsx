import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Book, Phone, Mail, Search, HelpCircle, Clock, CheckCircle } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 for Pro+ plans",
      cta: "Start Chat",
      variant: "hero" as const
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "Response within 24h",
      cta: "Send Email",
      variant: "secondary" as const
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical team",
      availability: "Business+ plans only",
      cta: "Schedule Call",
      variant: "secondary" as const
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      availability: "Always available",
      cta: "Browse Docs",
      variant: "secondary" as const
    }
  ];

  const faqItems = [
    {
      question: "How do I get started with Pusher?",
      answer: "You can get started by signing up for a free account and following our 5-minute quickstart guide."
    },
    {
      question: "What are the rate limits for different plans?",
      answer: "Rate limits vary by plan: Sandbox (100 req/s), Pro (1000 req/s), Business (10000 req/s). Enterprise plans have custom limits."
    },
    {
      question: "How do I debug connection issues?",
      answer: "Use our debug console in the dashboard, check your authentication, and ensure your firewall allows WebSocket connections."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. Changes take effect immediately and billing is prorated."
    },
    {
      question: "What regions do you support?",
      answer: "We have data centers in US East, US West, EU West, Asia Pacific, and can provide custom regions for Enterprise customers."
    },
    {
      question: "How do you handle data privacy and security?",
      answer: "We're SOC 2 compliant, GDPR compliant, and offer end-to-end encryption. All data is encrypted in transit and at rest."
    }
  ];

  const statusItems = [
    { service: "Pusher Channels", status: "Operational", uptime: "99.99%" },
    { service: "Pusher Beams", status: "Operational", uptime: "99.98%" },
    { service: "REST API", status: "Operational", uptime: "99.99%" },
    { service: "Dashboard", status: "Operational", uptime: "99.97%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              How can we
              <span className="bg-gradient-hero bg-clip-text text-transparent"> help you?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              Get the support you need to build amazing real-time applications.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles..." 
                className="pl-12 h-14 text-lg bg-background border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Choose your
              <span className="bg-gradient-hero bg-clip-text text-transparent"> support option</span>
            </h2>
            <p className="text-muted-foreground">
              Multiple ways to get the help you need, when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {supportOptions.map((option, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    <option.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-4">
                    {option.availability}
                  </Badge>
                  <Button variant={option.variant} className="w-full">
                    {option.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Service
              <span className="bg-gradient-hero bg-clip-text text-transparent"> status</span>
            </h2>
            <p className="text-muted-foreground">
              Real-time status of all Pusher services and infrastructure.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {statusItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="font-medium">{item.service}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                          {item.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {item.uptime} uptime
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button variant="ghost">
                    View Detailed Status Page
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently asked
              <span className="bg-gradient-hero bg-clip-text text-transparent"> questions</span>
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our platform.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                        {item.question}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                    <HelpCircle className="h-5 w-5 text-muted-foreground ml-4 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Still need help?
              </h2>
              <p className="text-muted-foreground">
                Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What's this about?" className="bg-background border-border" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Describe your issue or question in detail..."
                      rows={6}
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;