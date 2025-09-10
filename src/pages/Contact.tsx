import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Building, Headphones } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Sales Inquiries",
      description: "Questions about pricing, plans, or enterprise solutions",
      contact: "sales@pusher.com",
      availability: "Response within 4 hours"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Help with implementation, debugging, or technical issues",
      contact: "support@pusher.com",
      availability: "24/7 for Pro+ plans"
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Interested in partnering or integrating with Pusher",
      contact: "partnerships@pusher.com",
      availability: "Response within 2 business days"
    },
    {
      icon: Building,
      title: "Press & Media",
      description: "Media inquiries, press releases, and company information",
      contact: "press@pusher.com",
      availability: "Response within 1 business day"
    }
  ];

  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      address: "28 Old Burlington Street\nLondon W1S 3AR",
      phone: "+44 20 7193 4600",
      email: "london@pusher.com",
      timezone: "GMT+0",
      isHQ: true
    },
    {
      city: "San Francisco",
      country: "United States", 
      address: "548 Market St\nSan Francisco, CA 94104",
      phone: "+1 415 555 0123",
      email: "sf@pusher.com",
      timezone: "PST-8",
      isHQ: false
    }
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Sales & Pricing",
    "Technical Support",
    "Partnership",
    "Press & Media",
    "Billing Issue",
    "Feature Request",
    "Bug Report"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Get in
              <span className="bg-gradient-hero bg-clip-text text-transparent"> touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Choose how to
              <span className="bg-gradient-hero bg-clip-text text-transparent"> reach us</span>
            </h2>
            <p className="text-muted-foreground">
              Different ways to get in touch based on your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mr-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                      <method.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">{method.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {method.availability}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground mb-4">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="hero" className="w-full group">
                    <Mail className="h-4 w-4 mr-2" />
                    {method.contact}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Send us a message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input placeholder="John" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input placeholder="Doe" className="bg-background border-border" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="john@company.com" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input placeholder="Your Company" className="bg-background border-border" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Inquiry Type *</label>
                      <Select>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-background border-border" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input placeholder="How can we help you?" className="bg-background border-border" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      I'd like to receive updates about Pusher products and services
                    </label>
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Visit our
              <span className="bg-gradient-hero bg-clip-text text-transparent"> offices</span>
            </h2>
            <p className="text-muted-foreground">
              We have offices around the world. Come say hello!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group relative">
                {office.isHQ && (
                  <Badge className="absolute -top-3 left-6 bg-gradient-hero text-primary-foreground">
                    Headquarters
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <MapPin className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{office.city}</h3>
                      <p className="text-muted-foreground">{office.country}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building className="h-5 w-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {office.address}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                      <a 
                        href={`tel:${office.phone}`}
                        className="text-sm text-accent hover:underline"
                      >
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                      <a 
                        href={`mailto:${office.email}`}
                        className="text-sm text-accent hover:underline"
                      >
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {office.timezone}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;