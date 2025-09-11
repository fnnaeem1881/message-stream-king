import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Smartphone, Target, BarChart3, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Beams = () => {
  const features = [
    {
      icon: Bell,
      title: "Push notifications",
      description: "Send notifications to iOS, Android, and web browsers with a unified API"
    },
    {
      icon: Target,
      title: "Precise targeting",
      description: "Target users by interests, location, device type, or custom attributes"
    },
    {
      icon: BarChart3,
      title: "Delivery analytics", 
      description: "Track delivery rates, open rates, and user engagement in real-time"
    },
    {
      icon: Shield,
      title: "Reliable delivery",
      description: "99.9% uptime SLA with automatic failover and message queuing"
    },
    {
      icon: Smartphone,
      title: "Multi-platform",
      description: "Native SDKs for iOS, Android, React Native, Flutter, and web"
    },
    {
      icon: Zap,
      title: "Instant delivery",
      description: "Messages delivered in milliseconds with global infrastructure"
    }
  ];

  const platforms = [
    { name: "iOS", supported: true },
    { name: "Android", supported: true },
    { name: "Web", supported: true },
    { name: "React Native", supported: true },
    { name: "Flutter", supported: true },
    { name: "Unity", supported: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-secondary/50">Push Notifications</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Pusher
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Beams</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                The most reliable push notification service. Deliver messages that matter 
                to the right users at the right time across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Get Started Free
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Support */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Universal platform support</h2>
              <p className="text-muted-foreground">
                One API to reach users everywhere
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {platforms.map((platform, index) => (
                <Card key={index} className="text-center border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold">{platform.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful notification features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to engage your users effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Simple integration</h2>
                <p className="text-muted-foreground">
                  Send your first notification in minutes
                </p>
              </div>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Send a notification</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
{`// Server-side: Send notification
await beamsClient.publishToInterests(['global'], {
  web: {
    notification: {
      title: 'New Message',
      body: 'You have a new message!',
      icon: '/icon.png'
    }
  },
  apns: {
    aps: {
      alert: {
        title: 'New Message',
        body: 'You have a new message!'
      }
    }
  },
  fcm: {
    notification: {
      title: 'New Message',
      body: 'You have a new message!'
    }
  }
});`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Start engaging your users today
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of apps using Pusher Beams for notifications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Beams;