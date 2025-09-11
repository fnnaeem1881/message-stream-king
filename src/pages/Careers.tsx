import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  const jobs = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      remote: true,
      description: "Build the next generation of real-time infrastructure that powers millions of applications worldwide."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time", 
      remote: false,
      description: "Drive product strategy and roadmap for our core messaging platform and developer experience."
    },
    {
      title: "Developer Relations Engineer",
      department: "Developer Experience",
      location: "Remote",
      type: "Full-time",
      remote: true,
      description: "Be the bridge between our developer community and product teams, creating content and building relationships."
    },
    {
      title: "Site Reliability Engineer",
      department: "Infrastructure",
      location: "London, UK",
      type: "Full-time",
      remote: true,
      description: "Ensure our global infrastructure runs reliably at scale, serving billions of messages daily."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA", 
      type: "Full-time",
      remote: false,
      description: "Lead growth marketing initiatives to reach developers and enterprises building real-time applications."
    },
    {
      title: "Customer Success Engineer",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      remote: true,
      description: "Help enterprise customers succeed with Pusher and drive expansion opportunities."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness stipends"
    },
    {
      icon: Clock,
      title: "Flexible Working",
      description: "Remote-first culture with flexible hours and unlimited PTO policy"
    },
    {
      icon: Users,
      title: "Learning & Development", 
      description: "Annual learning budget, conference attendance, and internal mentorship programs"
    }
  ];

  const departments = [
    { name: "Engineering", count: 12, color: "bg-blue-500/10 text-blue-500" },
    { name: "Product", count: 4, color: "bg-purple-500/10 text-purple-500" },
    { name: "Marketing", count: 3, color: "bg-green-500/10 text-green-500" },
    { name: "Sales", count: 6, color: "bg-orange-500/10 text-orange-500" },
    { name: "Customer Success", count: 5, color: "bg-cyan-500/10 text-cyan-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join the
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Pusher</span>
                {" "}Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Help us build the future of real-time communication. Work with cutting-edge technology 
                while solving challenges at massive scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  View Open Positions
                </Button>
                <Button variant="outline" size="lg">
                  Life at Pusher
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">200+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">8</div>
                <div className="text-muted-foreground">Offices Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-muted-foreground">Years of Innovation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Teams Hiring</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {departments.map((dept, index) => (
                <Card key={index} className="text-center border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <Badge className={`mb-2 ${dept.color}`}>
                      {dept.count} open
                    </Badge>
                    <h3 className="font-semibold text-sm">{dept.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {jobs.map((job, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {job.department}
                      </Badge>
                      <div className="flex items-center gap-2">
                        {job.remote && (
                          <Badge className="text-xs bg-green-500/10 text-green-500">Remote OK</Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">{job.type}</Badge>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {job.title}
                    </CardTitle>
                    <CardDescription>{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Join Pusher?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in creating an environment where everyone can do their best work
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-border bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
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
                Ready to make an impact?
              </h2>
              <p className="text-muted-foreground mb-8">
                Don't see a role that fits? We're always looking for exceptional people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Send Us Your Resume
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

export default Careers;