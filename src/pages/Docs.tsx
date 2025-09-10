import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Book, Code, Lightbulb, ArrowRight, ExternalLink } from "lucide-react";

const Docs = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: Lightbulb,
      description: "Quick start guides and basic concepts",
      items: [
        { title: "5-minute quickstart", type: "Guide", time: "5 min" },
        { title: "Your first real-time app", type: "Tutorial", time: "15 min" },
        { title: "Authentication basics", type: "Guide", time: "10 min" },
        { title: "Client libraries overview", type: "Reference", time: "5 min" }
      ]
    },
    {
      title: "API Reference",
      icon: Code,
      description: "Complete API documentation and examples",
      items: [
        { title: "REST API", type: "Reference", time: null },
        { title: "WebSocket API", type: "Reference", time: null },
        { title: "Client Events", type: "Reference", time: null },
        { title: "Server Events", type: "Reference", time: null }
      ]
    },
    {
      title: "Tutorials",
      icon: Book,
      description: "Step-by-step tutorials for common use cases",
      items: [
        { title: "Building a chat app", type: "Tutorial", time: "30 min" },
        { title: "Real-time notifications", type: "Tutorial", time: "20 min" },
        { title: "Live dashboards", type: "Tutorial", time: "25 min" },
        { title: "Collaborative features", type: "Tutorial", time: "40 min" }
      ]
    }
  ];

  const popularDocs = [
    {
      title: "Client Authentication",
      description: "Learn how to authenticate users and secure channels",
      category: "Security",
      readTime: "8 min read"
    },
    {
      title: "Private and Presence Channels",
      description: "Understanding different channel types and their use cases",
      category: "Channels",
      readTime: "12 min read"
    },
    {
      title: "Debugging Connection Issues",
      description: "Common problems and solutions for connection issues",
      category: "Troubleshooting",
      readTime: "6 min read"
    },
    {
      title: "Best Practices for Scaling",
      description: "Tips for building scalable real-time applications",
      category: "Performance",
      readTime: "15 min read"
    }
  ];

  const languages = [
    { name: "JavaScript", docs: 45 },
    { name: "Python", docs: 38 },
    { name: "Ruby", docs: 32 },
    { name: "PHP", docs: 28 },
    { name: "Java", docs: 35 },
    { name: "C#", docs: 30 },
    { name: "Swift", docs: 25 },
    { name: "Kotlin", docs: 22 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Documentation &
              <span className="bg-gradient-hero bg-clip-text text-transparent"> guides</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              Everything you need to build amazing real-time applications, 
              from quickstart guides to advanced tutorials.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-12 h-14 text-lg bg-background border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group/item">
                        <div className="flex-1">
                          <div className="font-medium text-sm group-hover/item:text-accent transition-colors">
                            {item.title}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                            {item.time && (
                              <span className="text-xs text-muted-foreground">{item.time}</span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover/item:text-accent transition-colors" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Popular
              <span className="bg-gradient-hero bg-clip-text text-transparent"> documentation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most viewed guides and references in our documentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {popularDocs.map((doc, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{doc.category}</Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {doc.description}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {doc.readTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Libraries for every
              <span className="bg-gradient-hero bg-clip-text text-transparent"> language</span>
            </h2>
            <p className="text-muted-foreground">
              Official SDKs and community libraries for your favorite programming languages.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                    {language.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language.docs} docs
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to start building?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Follow our quickstart guide and have your first real-time feature running in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                5-Minute Quickstart
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                View All Tutorials
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;