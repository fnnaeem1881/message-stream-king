import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Code, BookOpen, Zap, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ApiReference = () => {
  const endpoints = [
    {
      method: "POST",
      endpoint: "/apps/{app_id}/events",
      description: "Trigger an event on one or more channels",
      category: "Events"
    },
    {
      method: "GET", 
      endpoint: "/apps/{app_id}/channels",
      description: "Get a list of all channels in an application",
      category: "Channels"
    },
    {
      method: "GET",
      endpoint: "/apps/{app_id}/channels/{channel_name}",
      description: "Get information about a specific channel",
      category: "Channels"
    },
    {
      method: "GET",
      endpoint: "/apps/{app_id}/channels/{channel_name}/users",
      description: "Get a list of users in a presence channel",
      category: "Presence"
    }
  ];

  const categories = [
    { name: "Authentication", icon: Shield, count: 3 },
    { name: "Events", icon: Zap, count: 4 },
    { name: "Channels", icon: BookOpen, count: 6 },
    { name: "Presence", icon: Code, count: 3 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                API
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Reference</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete reference for the Pusher REST API with examples and interactive documentation
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search API endpoints..."
                  className="pl-10 bg-background border-border"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Try Interactive API
                </Button>
                <Button variant="outline" size="lg">
                  Download OpenAPI Spec
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">API Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription>
                      {category.count} endpoints available
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Endpoints</h2>
              
              <Tabs defaultValue="events" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="channels">Channels</TabsTrigger>
                  <TabsTrigger value="presence">Presence</TabsTrigger>
                  <TabsTrigger value="auth">Authentication</TabsTrigger>
                </TabsList>
                
                <TabsContent value="events" className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <Badge className="mr-3 bg-green-500">POST</Badge>
                          /apps/{"{app_id}"}/events
                        </CardTitle>
                      </div>
                      <CardDescription>
                        Trigger an event on one or more channels
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Request Body</h4>
                          <pre className="text-sm bg-secondary/50 p-4 rounded-lg overflow-x-auto">
{`{
  "name": "my-event",
  "channels": ["my-channel"],
  "data": {
    "message": "hello world"
  }
}`}
                          </pre>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Response</h4>
                          <pre className="text-sm bg-secondary/50 p-4 rounded-lg overflow-x-auto">
{`{
  "event_id": "event_123"
}`}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="channels" className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <Badge className="mr-3 bg-blue-500">GET</Badge>
                          /apps/{"{app_id}"}/channels
                        </CardTitle>
                      </div>
                      <CardDescription>
                        Get information about your application's channels
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Query Parameters</h4>
                          <pre className="text-sm bg-secondary/50 p-4 rounded-lg overflow-x-auto">
{`filter_by_prefix=presence-
info=user_count,subscription_count`}
                          </pre>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Response</h4>
                          <pre className="text-sm bg-secondary/50 p-4 rounded-lg overflow-x-auto">
{`{
  "channels": {
    "my-channel": {},
    "presence-channel": {
      "user_count": 5
    }
  }
}`}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="presence" className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <Badge className="mr-3 bg-blue-500">GET</Badge>
                          /apps/{"{app_id}"}/channels/{"{channel_name}"}/users
                        </CardTitle>
                      </div>
                      <CardDescription>
                        Get list of users in a presence channel
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Parameters</h4>
                          <pre className="text-sm bg-secondary/50 p-4 rounded-lg overflow-x-auto">
{`Path: channel_name (required)
Type: presence channel`}
                          </pre>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Response</h4>
                          <pre className="text-sm bg-secondary/50 p-4 rounded-lg overflow-x-auto">
{`{
  "users": [
    {
      "id": "user1",
      "user_info": {
        "name": "John"
      }
    }
  ]
}`}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="auth" className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle>Authentication</CardTitle>
                      <CardDescription>
                        All API requests must be authenticated using your app credentials
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="text-sm bg-secondary/50 p-4 rounded-lg overflow-x-auto">
{`Authorization: Bearer <access_token>
Content-Type: application/json

X-Pusher-Key: <app_key>
X-Pusher-Signature: <signature>
X-Pusher-Timestamp: <timestamp>`}
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* SDKs Integration */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Use our official SDKs
              </h2>
              <p className="text-muted-foreground mb-8">
                Don't want to call the API directly? Use our libraries instead
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Browse Libraries
                </Button>
                <Button variant="outline" size="lg">
                  Quick Start Guide
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

export default ApiReference;