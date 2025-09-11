import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, GitBranch, Code } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Libraries = () => {
  const libraries = [
    {
      name: "pusher-js",
      description: "The official Pusher JavaScript library for web browsers",
      language: "JavaScript",
      downloads: "2.5M/week",
      stars: "2.1k",
      version: "8.4.0",
      category: "Web"
    },
    {
      name: "pusher-swift",
      description: "Native iOS library for integrating Pusher into Swift applications",
      language: "Swift", 
      downloads: "50k/month",
      stars: "1.6k",
      version: "10.1.5",
      category: "iOS"
    },
    {
      name: "pusher-java",
      description: "Server-side Java library for triggering Pusher events",
      language: "Java",
      downloads: "200k/month", 
      stars: "800",
      version: "2.2.3",
      category: "Server"
    },
    {
      name: "pusher-http-python",
      description: "Python library for the Pusher HTTP API",
      language: "Python",
      downloads: "300k/month",
      stars: "450",
      version: "3.3.2",
      category: "Server"
    },
    {
      name: "pusher-http-node",
      description: "Node.js library for triggering events via the Pusher HTTP API",
      language: "Node.js",
      downloads: "400k/week",
      stars: "950",
      version: "5.0.3",
      category: "Server"
    },
    {
      name: "pusher-websocket-android",
      description: "Android library for real-time messaging with Pusher",
      language: "Java/Kotlin",
      downloads: "75k/month",
      stars: "700",
      version: "2.4.1",
      category: "Android"
    },
    {
      name: "pusher-http-php",
      description: "PHP library for the Pusher HTTP API",
      language: "PHP",
      downloads: "180k/month",
      stars: "600",
      version: "7.2.4",
      category: "Server"
    },
    {
      name: "pusher-websocket-ruby",
      description: "Ruby library for triggering Pusher events",
      language: "Ruby",
      downloads: "120k/month",
      stars: "380",
      version: "2.0.3",
      category: "Server"
    },
    {
      name: "pusher-http-go",
      description: "Go library for the Pusher HTTP API",
      language: "Go",
      downloads: "45k/month",
      stars: "200",
      version: "5.0.2",
      category: "Server"
    }
  ];

  const categories = [
    { name: "All", count: libraries.length, active: true },
    { name: "Web", count: 1, active: false },
    { name: "iOS", count: 1, active: false },
    { name: "Android", count: 1, active: false },
    { name: "Server", count: 6, active: false }
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
                Pusher
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Libraries</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Official SDKs and libraries for every platform and programming language
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Browse on GitHub
                </Button>
                <Button variant="outline" size="lg">
                  Quick Start Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "hero" : "outline"}
                  className="relative"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Libraries Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {libraries.map((library, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Code className="h-5 w-5 text-accent" />
                        <Badge variant="outline" className="text-xs">
                          {library.category}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3" />
                        <span>{library.stars}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {library.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {library.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 rounded-full bg-gradient-hero"></div>
                          <span className="text-muted-foreground">{library.language}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Download className="h-3 w-3" />
                          <span>{library.downloads}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        v{library.version}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Quick Integration</h2>
                <p className="text-muted-foreground">
                  Get started with just a few lines of code
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Code className="h-5 w-5 mr-2" />
                      JavaScript (Web)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
{`npm install pusher-js

import Pusher from 'pusher-js';

const pusher = new Pusher('key', {
  cluster: 'cluster'
});

const channel = pusher.subscribe('my-channel');
channel.bind('my-event', (data) => {
  console.log(data);
});`}
                    </pre>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Code className="h-5 w-5 mr-2" />
                      Python (Server)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
{`pip install pusher

import pusher

pusher_client = pusher.Pusher(
  app_id='app_id',
  key='key',
  secret='secret',
  cluster='cluster'
)

pusher_client.trigger('my-channel', 
  'my-event', {'message': 'hello'})`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Start building with our libraries
              </h2>
              <p className="text-muted-foreground mb-8">
                Choose your platform and get started in minutes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  View on GitHub
                </Button>
                <Button variant="outline" size="lg">
                  Read Documentation
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

export default Libraries;