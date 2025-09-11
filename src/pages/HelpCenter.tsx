import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, MessageCircle, FileText, Video, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "New to Pusher? Start here for setup guides and tutorials",
      articles: 15,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Channels",
      description: "Real-time messaging, events, and channel management",
      articles: 28,
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      icon: FileText,
      title: "Beams",
      description: "Push notifications setup, targeting, and analytics",
      articles: 22,
      color: "bg-green-500/10 text-green-500"
    },
    {
      icon: Video,
      title: "Troubleshooting",
      description: "Common issues, debugging guides, and solutions",
      articles: 35,
      color: "bg-red-500/10 text-red-500"
    }
  ];

  const popularArticles = [
    {
      title: "How to set up Pusher Channels",
      category: "Getting Started",
      readTime: "5 min",
      views: "12.5k"
    },
    {
      title: "Debugging connection issues",
      category: "Troubleshooting", 
      readTime: "8 min",
      views: "9.2k"
    },
    {
      title: "Setting up push notifications",
      category: "Beams",
      readTime: "10 min",
      views: "8.7k"
    },
    {
      title: "Understanding webhooks",
      category: "Channels",
      readTime: "6 min",
      views: "7.1k"
    },
    {
      title: "Rate limiting and best practices",
      category: "API",
      readTime: "7 min", 
      views: "6.8k"
    },
    {
      title: "Implementing presence channels",
      category: "Channels",
      readTime: "12 min",
      views: "5.9k"
    }
  ];

  const quickLinks = [
    { title: "API Reference", href: "/api-reference" },
    { title: "SDKs & Libraries", href: "/libraries" },
    { title: "System Status", href: "/status" },
    { title: "Community Forum", href: "/community" },
    { title: "Contact Support", href: "/contact" },
    { title: "Report Bug", href: "/contact" }
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
                How can we
                <span className="bg-gradient-hero bg-clip-text text-transparent"> help you?</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find answers, get support, and learn how to make the most of Pusher's real-time platform
              </p>
              
              {/* Search */}
              <div className="max-w-2xl mx-auto relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for help articles, guides, and tutorials..."
                  className="pl-12 py-4 text-lg bg-background border-border"
                />
                <Button variant="hero" className="absolute right-2 top-2">
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {quickLinks.slice(0, 3).map((link, index) => (
                  <Button key={index} variant="outline">
                    {link.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Topic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${category.color}`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary">
                      {category.articles} articles
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {popularArticles.map((article, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{article.readTime} read</span>
                        <span>•</span>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors mb-2">
                      {article.title}
                    </h3>
                    <Button variant="ghost" size="sm" className="p-0 h-auto group-hover:text-accent">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Read article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {quickLinks.map((link, index) => (
                  <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium group-hover:text-accent transition-colors">
                        {link.title}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
                      <p className="text-muted-foreground mb-6">
                        Can't find what you're looking for? Our support team is here to help you succeed.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MessageCircle className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h3 className="font-semibold">Live Chat</h3>
                            <p className="text-sm text-muted-foreground">Available 24/7 for urgent issues</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <FileText className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h3 className="font-semibold">Submit a Ticket</h3>
                            <p className="text-sm text-muted-foreground">Detailed support for complex issues</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <BookOpen className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <h3 className="font-semibold">Community Forum</h3>
                            <p className="text-sm text-muted-foreground">Get help from other developers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-4">Choose your support option</h3>
                      <div className="space-y-3">
                        <Button variant="hero" className="w-full">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Start Live Chat
                        </Button>
                        <Button variant="outline" className="w-full">
                          <FileText className="h-4 w-4 mr-2" />
                          Submit Support Ticket
                        </Button>
                        <Button variant="outline" className="w-full">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Join Community
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;