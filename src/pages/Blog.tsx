import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "Building Real-time Collaborative Features: A Complete Guide",
    excerpt: "Learn how to implement collaborative features like live cursors, presence indicators, and real-time document editing in your applications.",
    author: "Sarah Chen",
    authorRole: "Developer Advocate",
    publishDate: "March 15, 2024",
    readTime: "12 min read",
    category: "Tutorial",
    image: "/api/placeholder/800/400",
    trending: true
  };

  const recentPosts = [
    {
      title: "WebSocket vs Server-Sent Events: When to Use What",
      excerpt: "A deep dive into real-time communication protocols and when to choose each approach for your application.",
      author: "Mike Rodriguez",
      publishDate: "March 10, 2024",
      readTime: "8 min read",
      category: "Technical",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Scaling Real-time Applications to Millions of Users",
      excerpt: "Best practices and architecture patterns for building real-time applications that can handle massive scale.",
      author: "Emily Watson",
      publishDate: "March 8, 2024",
      readTime: "15 min read",
      category: "Architecture",
      image: "/api/placeholder/400/300"
    },
    {
      title: "The Future of Real-time Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of real-time web development.",
      author: "David Kim",
      publishDate: "March 5, 2024",
      readTime: "10 min read",
      category: "Industry",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Building a Real-time Chat Application with React",
      excerpt: "Step-by-step guide to building a production-ready chat application using React and WebSocket APIs.",
      author: "Lisa Thompson",
      publishDate: "March 1, 2024",
      readTime: "20 min read",
      category: "Tutorial",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Security Best Practices for Real-time Applications",
      excerpt: "Essential security considerations when building real-time applications, from authentication to data validation.",
      author: "James Wilson",
      publishDate: "February 28, 2024",
      readTime: "12 min read",
      category: "Security",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Optimizing Performance in Real-time Applications",
      excerpt: "Techniques and strategies for optimizing the performance of your real-time applications and reducing latency.",
      author: "Anna Martinez",
      publishDate: "February 25, 2024",
      readTime: "14 min read",
      category: "Performance",
      image: "/api/placeholder/400/300"
    }
  ];

  const categories = [
    { name: "All Posts", count: 124, active: true },
    { name: "Tutorials", count: 45 },
    { name: "Technical", count: 32 },
    { name: "Industry", count: 28 },
    { name: "Case Studies", count: 19 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              The Pusher
              <span className="bg-gradient-hero bg-clip-text text-transparent"> blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              Insights, tutorials, and updates from the world of real-time web development.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "hero" : "ghost"}
                className="group"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 group-hover:bg-accent/20">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {featuredPost.trending && (
                    <Badge className="absolute top-4 left-4 bg-gradient-hero text-primary-foreground">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src="/api/placeholder/40/40" alt={featuredPost.author} />
                        <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm">{featuredPost.author}</div>
                        <div className="text-xs text-muted-foreground">{featuredPost.authorRole}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    {featuredPost.publishDate}
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    {featuredPost.readTime}
                  </div>
                  
                  <Button variant="hero" className="w-fit group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Recent
              <span className="bg-gradient-hero bg-clip-text text-transparent"> articles</span>
            </h2>
            <p className="text-muted-foreground">
              Stay up to date with the latest insights and tutorials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {recentPosts.map((post, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="secondary" className="absolute top-4 left-4">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center mb-4">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src="/api/placeholder/32/32" alt={post.author} />
                      <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <div className="font-medium">{post.author}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Never miss an update
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter and get the latest articles, tutorials, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              />
              <Button variant="hero" size="lg" className="sm:px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;