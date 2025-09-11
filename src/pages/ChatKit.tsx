import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Image, Lock, Smartphone, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ChatKit = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Rich messaging",
      description: "Support for text, images, files, emoji, and custom message types"
    },
    {
      icon: Users,
      title: "Group chat",
      description: "Create public and private rooms with role-based permissions"
    },
    {
      icon: Image,
      title: "File sharing",
      description: "Built-in file upload with image previews and secure storage"
    },
    {
      icon: Lock,
      title: "Moderation tools",
      description: "Advanced moderation with user management and content filtering"
    },
    {
      icon: Smartphone,
      title: "Mobile ready",
      description: "Responsive components that work perfectly on mobile devices"
    },
    {
      icon: Zap,
      title: "Real-time sync",
      description: "Messages appear instantly across all connected devices"
    }
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
              <Badge className="mb-4 bg-orange-500/10 text-orange-500 border-orange-500/20">
                Deprecated
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Pusher
                <span className="bg-gradient-hero bg-clip-text text-transparent"> ChatKit</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                ChatKit has been deprecated. We recommend using Pusher Channels to build 
                custom chat experiences with full control over your implementation.
              </p>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                <p className="text-orange-500 font-medium mb-2">⚠️ Service Notice</p>
                <p className="text-sm text-muted-foreground">
                  ChatKit is no longer accepting new customers. Existing users can continue 
                  using the service, but we encourage migration to Pusher Channels for new projects.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Explore Pusher Channels
                </Button>
                <Button variant="outline" size="lg">
                  Migration Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">ChatKit Features (Legacy)</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These features are available in ChatKit for existing users
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm opacity-75">
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

        {/* Alternative Solutions */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Build better chat with Pusher Channels
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get more flexibility and control by building your chat application 
                with Pusher Channels instead of ChatKit.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">More Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Build custom chat UI and logic tailored to your specific needs
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Better Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Optimize for your use case with direct real-time messaging
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Future-Proof</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Build on our actively developed and supported platform
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start with Channels
                </Button>
                <Button variant="outline" size="lg">
                  Chat Tutorial
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

export default ChatKit;