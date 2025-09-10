import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bell, Users, Activity, Gamepad2, ShoppingCart } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: MessageCircle,
      title: "Chat & Messaging",
      description: "Build instant messaging, customer support chats, and team collaboration tools with real-time message delivery.",
      features: ["Typing indicators", "Message history", "File sharing", "Emoji reactions"]
    },
    {
      icon: Bell,
      title: "Live Notifications",
      description: "Keep users engaged with instant notifications for updates, alerts, and important events across all devices.",
      features: ["Push notifications", "In-app alerts", "Email integration", "Custom triggers"]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Enable real-time collaboration with live cursors, presence indicators, and synchronized document editing.",
      features: ["Live cursors", "User presence", "Document sync", "Version control"]
    },
    {
      icon: Activity,
      title: "Live Dashboards",
      description: "Create dynamic dashboards with real-time data updates, charts, and monitoring systems.",
      features: ["Real-time charts", "Live metrics", "Auto-refresh", "Data streaming"]
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Build multiplayer games with real-time player interactions, leaderboards, and game state synchronization.",
      features: ["Player matching", "Live scores", "Game sync", "Tournament mode"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Enhance shopping experiences with live inventory updates, flash sales, and real-time order tracking.",
      features: ["Inventory sync", "Flash sales", "Order tracking", "Cart abandonment"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for every
            <span className="bg-gradient-hero bg-clip-text text-transparent"> use case</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple notifications to complex multiplayer experiences, 
            our platform adapts to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <useCase.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{useCase.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-6 flex-1">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group-hover:bg-secondary/50 transition-colors w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;