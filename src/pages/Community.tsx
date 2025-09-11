import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Heart, Star, Github, Twitter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Community = () => {
  const platforms = [
    {
      icon: MessageSquare,
      title: "Discord Server",
      description: "Real-time chat with developers, get instant help, and share your projects",
      members: "15,000+",
      color: "bg-blue-500/10 text-blue-500",
      link: "#"
    },
    {
      icon: Github,
      title: "GitHub Discussions",
      description: "Technical discussions, feature requests, and open source contributions",
      members: "8,500+",
      color: "bg-purple-500/10 text-purple-500",
      link: "#"
    },
    {
      icon: Twitter,
      title: "Twitter Community",
      description: "Follow @pusher for updates, tips, and community highlights",
      members: "25,000+",
      color: "bg-cyan-500/10 text-cyan-500",
      link: "#"
    },
    {
      icon: Users,
      title: "Stack Overflow",
      description: "Ask technical questions and get answers from the community",
      members: "12,000+",
      color: "bg-orange-500/10 text-orange-500",
      link: "#"
    }
  ];

  const discussions = [
    {
      title: "How to implement presence with React hooks?",
      author: "sarah_dev",
      replies: 12,
      likes: 25,
      time: "2 hours ago",
      tags: ["React", "Presence", "Hooks"],
      solved: true
    },
    {
      title: "Best practices for scaling real-time apps",
      author: "mike_architect",
      replies: 28,
      likes: 67,
      time: "4 hours ago", 
      tags: ["Scaling", "Architecture", "Performance"],
      solved: false
    },
    {
      title: "Push notification delivery issues on iOS",
      author: "app_builder",
      replies: 8,
      likes: 15,
      time: "6 hours ago",
      tags: ["iOS", "Beams", "Notifications"],
      solved: false
    },
    {
      title: "WebSocket connection drops in production",
      author: "debug_master",
      replies: 19,
      likes: 42,
      time: "8 hours ago",
      tags: ["WebSocket", "Production", "Debugging"],
      solved: true
    }
  ];

  const events = [
    {
      title: "Real-time Architecture Workshop",
      date: "March 25, 2024",
      type: "Workshop",
      attendees: 150,
      description: "Learn advanced patterns for building scalable real-time applications"
    },
    {
      title: "Community Demo Day",
      date: "April 8, 2024", 
      type: "Demo",
      attendees: 300,
      description: "Show off your real-time projects and get feedback from the community"
    },
    {
      title: "Developer AMA with Pusher Team",
      date: "April 15, 2024",
      type: "AMA",
      attendees: 200,
      description: "Ask anything about real-time development, roadmap, and best practices"
    }
  ];

  const contributors = [
    {
      name: "Alex Chen",
      role: "Community Moderator",
      contributions: "500+ answers",
      avatar: "👨‍💻"
    },
    {
      name: "Sarah Johnson", 
      role: "Developer Advocate",
      contributions: "150+ tutorials",
      avatar: "👩‍🚀"
    },
    {
      name: "Mike Rodriguez",
      role: "Community Expert", 
      contributions: "300+ solutions",
      avatar: "👨‍🔬"
    },
    {
      name: "Emma Wilson",
      role: "Content Creator",
      contributions: "50+ guides",
      avatar: "👩‍🎨"
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
                Join the
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Community</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with thousands of developers building real-time applications. 
                Get help, share knowledge, and showcase your projects.
              </p>
              
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">60K+</div>
                  <div className="text-sm text-muted-foreground">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">2.5K+</div>
                  <div className="text-sm text-muted-foreground">Monthly Discussions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">95%</div>
                  <div className="text-sm text-muted-foreground">Questions Answered</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Join Discord
                </Button>
                <Button variant="outline" size="lg">
                  Browse Discussions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Where to Find Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${platform.color}`}>
                      <platform.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {platform.title}
                    </CardTitle>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="mb-4">
                      {platform.members} members
                    </Badge>
                    <Button variant="outline" size="sm" className="w-full">
                      Join Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Discussions */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Recent Discussions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {discussions.map((discussion, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-accent transition-colors mb-2">
                          {discussion.title}
                          {discussion.solved && (
                            <Badge className="ml-2 bg-green-500/10 text-green-500 text-xs">
                              Solved
                            </Badge>
                          )}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {discussion.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        {discussion.time}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <span>by</span>
                        <span className="font-medium">@{discussion.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{discussion.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{discussion.likes}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline">
                View All Discussions
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{event.type}</Badge>
                      <div className="text-sm text-muted-foreground">{event.date}</div>
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} registered</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Contributors */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Community Heroes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {contributors.map((contributor, index) => (
                <Card key={index} className="text-center border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{contributor.avatar}</div>
                    <h3 className="font-semibold mb-1">{contributor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{contributor.role}</p>
                    <Badge variant="secondary" className="text-xs">
                      {contributor.contributions}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
                    <p className="text-muted-foreground">
                      Help us maintain a welcoming and helpful environment for everyone
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Heart className="h-4 w-4 mr-2 text-accent" />
                        Be Respectful
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Treat everyone with kindness and respect</li>
                        <li>• Use inclusive and welcoming language</li>
                        <li>• Be patient with newcomers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Star className="h-4 w-4 mr-2 text-accent" />
                        Be Helpful
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Share your knowledge and experience</li>
                        <li>• Provide constructive feedback</li>
                        <li>• Help others learn and grow</li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button variant="outline">
                      Read Full Guidelines
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to join the conversation?
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with developers from around the world and take your real-time projects to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Join Discord
                </Button>
                <Button variant="outline" size="lg">
                  Start a Discussion
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

export default Community;