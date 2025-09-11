import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, XCircle, Clock, Bell } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Status = () => {
  const services = [
    {
      name: "Pusher Channels",
      region: "Global",
      status: "operational",
      uptime: "99.98%",
      responseTime: "45ms"
    },
    {
      name: "Pusher Beams",
      region: "Global", 
      status: "operational",
      uptime: "99.95%",
      responseTime: "52ms"
    },
    {
      name: "REST API",
      region: "Global",
      status: "operational",
      uptime: "99.97%",
      responseTime: "38ms"
    },
    {
      name: "Dashboard",
      region: "Global",
      status: "operational", 
      uptime: "99.99%",
      responseTime: "120ms"
    },
    {
      name: "WebSocket Connections",
      region: "US East",
      status: "degraded",
      uptime: "98.45%",
      responseTime: "65ms"
    },
    {
      name: "WebSocket Connections", 
      region: "EU West",
      status: "operational",
      uptime: "99.96%",
      responseTime: "42ms"
    },
    {
      name: "WebSocket Connections",
      region: "Asia Pacific",
      status: "operational",
      uptime: "99.94%",
      responseTime: "48ms"
    }
  ];

  const incidents = [
    {
      title: "Increased latency in US East region",
      status: "investigating",
      time: "2 hours ago",
      description: "We are investigating reports of increased latency in WebSocket connections in the US East region.",
      updates: [
        {
          time: "2 hours ago",
          message: "Initial reports received. Investigation started.",
          status: "investigating"
        },
        {
          time: "1 hour ago", 
          message: "Issue identified with load balancer configuration. Implementing fix.",
          status: "identified"
        }
      ]
    },
    {
      title: "Scheduled maintenance - Database cluster upgrade",
      status: "scheduled",
      time: "Tomorrow at 02:00 UTC",
      description: "Scheduled maintenance to upgrade our primary database cluster. Expected downtime: 30 minutes.",
      updates: []
    }
  ];

  const pastIncidents = [
    {
      title: "Brief service interruption",
      date: "Jan 15, 2024",
      duration: "23 minutes",
      status: "resolved"
    },
    {
      title: "API rate limiting issues",
      date: "Jan 8, 2024", 
      duration: "1 hour 15 minutes",
      status: "resolved"
    },
    {
      title: "WebSocket connection errors",
      date: "Dec 28, 2023",
      duration: "45 minutes", 
      status: "resolved"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'down':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return <Badge className="bg-green-500/10 text-green-500">Operational</Badge>;
      case 'degraded':
        return <Badge className="bg-yellow-500/10 text-yellow-500">Degraded</Badge>;
      case 'down':
        return <Badge className="bg-red-500/10 text-red-500">Down</Badge>;
      case 'investigating':
        return <Badge className="bg-blue-500/10 text-blue-500">Investigating</Badge>;
      case 'scheduled':
        return <Badge className="bg-purple-500/10 text-purple-500">Scheduled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                System
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Status</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Real-time status and performance metrics for all Pusher services
              </p>
              
              <div className="flex items-center justify-center space-x-2 mb-8">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-lg font-medium">All Systems Operational</span>
              </div>

              <Button variant="outline" size="lg">
                <Bell className="h-4 w-4 mr-2" />
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Current Status</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(service.status)}
                        <div>
                          <h3 className="font-semibold">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.region}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-sm font-medium">{service.uptime}</div>
                          <div className="text-xs text-muted-foreground">Uptime (30d)</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium">{service.responseTime}</div>
                          <div className="text-xs text-muted-foreground">Response Time</div>
                        </div>
                        {getStatusBadge(service.status)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Active Incidents */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Active Incidents & Maintenance</h2>
            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <span>{incident.title}</span>
                          {getStatusBadge(incident.status)}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {incident.description}
                        </CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {incident.time}
                      </div>
                    </div>
                  </CardHeader>
                  {incident.updates.length > 0 && (
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Recent Updates:</h4>
                        {incident.updates.map((update, uIndex) => (
                          <div key={uIndex} className="flex space-x-3 text-sm">
                            <div className="text-muted-foreground min-w-0 flex-shrink-0">
                              {update.time}
                            </div>
                            <div className="flex-1">
                              {getStatusBadge(update.status)}
                              <p className="mt-1 text-muted-foreground">{update.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Incidents */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Incident History</h2>
            <div className="space-y-4">
              {pastIncidents.map((incident, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <div>
                          <h3 className="font-semibold">{incident.title}</h3>
                          <p className="text-sm text-muted-foreground">{incident.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{incident.duration}</div>
                          <div className="text-xs text-muted-foreground">Duration</div>
                        </div>
                        <Badge className="bg-green-500/10 text-green-500">Resolved</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">Performance Overview (Last 30 Days)</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">99.97%</div>
                    <div className="text-sm text-muted-foreground">Overall Uptime</div>
                  </CardContent>
                </Card>
                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-500 mb-2">47ms</div>
                    <div className="text-sm text-muted-foreground">Avg Response Time</div>
                  </CardContent>
                </Card>
                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">2.1B</div>
                    <div className="text-sm text-muted-foreground">Messages Delivered</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Get notified about service status changes and scheduled maintenance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Bell className="h-4 w-4 mr-2" />
                  Subscribe to Alerts
                </Button>
                <Button variant="outline" size="lg">
                  RSS Feed
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

export default Status;