import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, ExternalLink, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Press = () => {
  const newsItems = [
    {
      title: "Pusher Announces $50M Series C Funding Round",
      date: "March 15, 2024",
      publication: "TechCrunch",
      excerpt: "Real-time messaging platform Pusher raises Series C to expand global infrastructure and accelerate product development.",
      category: "Funding",
      link: "#"
    },
    {
      title: "The Future of Real-Time Communication",
      date: "February 28, 2024", 
      publication: "VentureBeat",
      excerpt: "How Pusher is shaping the next generation of interactive applications with cutting-edge real-time technology.",
      category: "Industry",
      link: "#"
    },
    {
      title: "Pusher Beams Processes 1 Billion Push Notifications",
      date: "January 20, 2024",
      publication: "Forbes",
      excerpt: "Pusher's notification service reaches major milestone, highlighting growth in mobile engagement platforms.",
      category: "Milestone",
      link: "#"
    },
    {
      title: "Developer Survey: Real-Time Features Now Essential",
      date: "December 10, 2023",
      publication: "The Next Web",
      excerpt: "New research from Pusher reveals 89% of developers plan to add real-time features to their applications in 2024.",
      category: "Research",
      link: "#"
    }
  ];

  const resources = [
    {
      title: "Pusher Brand Guidelines",
      description: "Official logos, colors, and brand guidelines for media use",
      type: "PDF",
      size: "2.5 MB"
    },
    {
      title: "High-Resolution Logos",
      description: "Logo files in various formats and resolutions",
      type: "ZIP",
      size: "5.1 MB"
    },
    {
      title: "Executive Photos",
      description: "Professional headshots of leadership team",
      type: "ZIP", 
      size: "12.3 MB"
    },
    {
      title: "Company Fact Sheet",
      description: "Key statistics and company information",
      type: "PDF",
      size: "1.2 MB"
    }
  ];

  const awards = [
    {
      title: "Best Developer Tools Company 2024",
      organization: "DevAwards",
      year: "2024"
    },
    {
      title: "Innovation in Real-Time Technology",
      organization: "Tech Innovation Awards", 
      year: "2023"
    },
    {
      title: "Fastest Growing B2B SaaS",
      organization: "SaaS Awards",
      year: "2023"
    },
    {
      title: "Best API Platform",
      organization: "API World Awards",
      year: "2022"
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
                Press &
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Media</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Latest news, media resources, and press releases from Pusher. 
                Get the latest updates on our company and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Media Enquiries
                </Button>
                <Button variant="outline" size="lg">
                  Download Press Kit
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Media Contact</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Sarah Johnson</strong></p>
                        <p>Head of Communications</p>
                        <p>press@pusher.com</p>
                        <p>+44 20 7123 4567</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Business Enquiries</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Michael Chen</strong></p>
                        <p>VP of Marketing</p>
                        <p>media@pusher.com</p>
                        <p>+1 415 555 0123</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Latest News & Coverage</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-accent">
                      {item.publication}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Media Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {resources.map((resource, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <FileText className="h-4 w-4 text-accent" />
                          <h3 className="font-semibold group-hover:text-accent transition-colors">
                            {resource.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <Badge variant="secondary">{resource.type}</Badge>
                            <span>{resource.size}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Awards & Recognition</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're honored to be recognized by industry leaders and organizations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {awards.map((award, index) => (
                <Card key={index} className="text-center border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold text-lg">🏆</span>
                    </div>
                    <h3 className="font-semibold mb-2">{award.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                    <Badge variant="secondary" className="text-xs">{award.year}</Badge>
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
                Need more information?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our press team is here to help with interviews, additional resources, and story development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Contact Press Team
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Interview
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

export default Press;