import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, User, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Tutorials = () => {
  const categories = [
    { name: "Getting Started", count: 12, color: "bg-blue-500/10 text-blue-500" },
    { name: "Channels", count: 8, color: "bg-purple-500/10 text-purple-500" },
    { name: "Beams", count: 6, color: "bg-green-500/10 text-green-500" },
    { name: "Mobile", count: 10, color: "bg-orange-500/10 text-orange-500" },
    { name: "Web", count: 15, color: "bg-cyan-500/10 text-cyan-500" },
    { name: "Advanced", count: 7, color: "bg-red-500/10 text-red-500" }
  ];

  const tutorials = [
    {
      title: "Build a Real-time Chat App",
      description: "Learn to build a complete chat application with presence and typing indicators",
      duration: "45 min",
      difficulty: "Beginner",
      category: "Getting Started"
    },
    {
      title: "Push Notifications Setup",
      description: "Configure push notifications for iOS, Android, and web applications",
      duration: "30 min", 
      difficulty: "Intermediate",
      category: "Beams"
    },
    {
      title: "Real-time Dashboard",
      description: "Create a live analytics dashboard with charts and real-time updates",
      duration: "60 min",
      difficulty: "Advanced",
      category: "Channels"
    },
    {
      title: "Flutter Integration",
      description: "Integrate Pusher into your Flutter mobile application",
      duration: "40 min",
      difficulty: "Intermediate",
      category: "Mobile"
    },
    {
      title: "React Native Chat",
      description: "Build a cross-platform chat app with React Native and Pusher",
      duration: "50 min",
      difficulty: "Intermediate",
      category: "Mobile"
    },
    {
      title: "Authentication with Pusher",
      description: "Implement secure user authentication for private channels",
      duration: "35 min",
      difficulty: "Advanced",
      category: "Advanced"
    }
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
                Learn with
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Tutorials</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Step-by-step guides to help you build amazing real-time applications
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search tutorials..."
                  className="pl-10 bg-background border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <Card key={index} className="text-center border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <Badge className={`mb-2 ${category.color}`}>
                      {category.count}
                    </Badge>
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {tutorial.category}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          tutorial.difficulty === 'Beginner' ? 'text-green-500' :
                          tutorial.difficulty === 'Intermediate' ? 'text-orange-500' : 'text-red-500'
                        }`}
                      >
                        {tutorial.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                    <CardDescription>{tutorial.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>Tutorial</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to start building?
              </h2>
              <p className="text-muted-foreground mb-8">
                Follow our tutorials and get your real-time app up and running
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Learning
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
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

export default Tutorials;