import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Calendar, Users, Globe, Award, Heart, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { value: "2010", label: "Founded", description: "Started in London" },
    { value: "200B+", label: "Messages/month", description: "Delivered globally" },
    { value: "300K+", label: "Developers", description: "Trust our platform" },
    { value: "6", label: "Global regions", description: "Low-latency delivery" }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Pusher was founded in London with a vision to simplify real-time web development."
    },
    {
      year: "2012",
      title: "Series A Funding",
      description: "Raised Series A to expand the team and improve infrastructure globally."
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Launched data centers across multiple continents for worldwide coverage."
    },
    {
      year: "2018",
      title: "Beams Launch",
      description: "Introduced push notifications service to complement our real-time messaging."
    },
    {
      year: "2020",
      title: "ChatKit Release",
      description: "Launched complete chat infrastructure solution for developers."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Integrated AI-powered features to enhance developer experience."
    }
  ];

  const team = [
    {
      name: "Max Williams",
      role: "CEO & Co-founder",
      bio: "Passionate about building developer tools that make complex things simple.",
      avatar: "/api/placeholder/120/120",
      location: "London, UK"
    },
    {
      name: "Damien Tanner",
      role: "CTO & Co-founder",
      bio: "Technical visionary focused on scalable infrastructure and developer experience.",
      avatar: "/api/placeholder/120/120",
      location: "London, UK"
    },
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      bio: "Leading our engineering teams to build reliable, scalable real-time solutions.",
      avatar: "/api/placeholder/120/120",
      location: "San Francisco, US"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      bio: "Driving product strategy to help developers build amazing real-time experiences.",
      avatar: "/api/placeholder/120/120",
      location: "London, UK"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Developer-First",
      description: "We build for developers, by developers. Every decision is made with developer experience in mind."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Our platform is designed to work anywhere in the world with consistent performance."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer support."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of community and open collaboration in technology."
    }
  ];

  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      description: "Our headquarters and main engineering hub",
      address: "28 Old Burlington Street, London W1S 3AR"
    },
    {
      city: "San Francisco",
      country: "United States",
      description: "West coast operations and business development",
      address: "548 Market St, San Francisco, CA 94104"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Building the future of
              <span className="bg-gradient-hero bg-clip-text text-transparent"> real-time web</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
              Since 2010, we've been on a mission to make real-time functionality 
              accessible to every developer, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our
              <span className="bg-gradient-hero bg-clip-text text-transparent"> mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We believe that real-time functionality should be a fundamental building block 
              of modern applications, not a complex engineering challenge. Our mission is to 
              provide developers with the tools and infrastructure they need to build 
              engaging, interactive experiences that bring people together.
            </p>
            <Button variant="hero" size="lg">
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our
              <span className="bg-gradient-hero bg-clip-text text-transparent"> journey</span>
            </h2>
            <p className="text-muted-foreground">
              Key milestones in our mission to democratize real-time technology.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-20 text-right mr-8">
                    <Badge variant="secondary" className="font-bold">
                      {item.year}
                    </Badge>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-hero rounded-full mt-2 mr-8 group-hover:shadow-glow group-hover:scale-125 transition-all duration-300" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our
              <span className="bg-gradient-hero bg-clip-text text-transparent"> values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meet our
              <span className="bg-gradient-hero bg-clip-text text-transparent"> team</span>
            </h2>
            <p className="text-muted-foreground">
              The people behind the platform that powers millions of real-time experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-gradient-hero text-primary-foreground text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {member.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our
              <span className="bg-gradient-hero bg-clip-text text-transparent"> offices</span>
            </h2>
            <p className="text-muted-foreground">
              We're a global team with local presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-accent mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold">{office.city}</h3>
                      <p className="text-muted-foreground">{office.country}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {office.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {office.address}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Want to join our mission?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented people who share our passion 
              for building great developer tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;