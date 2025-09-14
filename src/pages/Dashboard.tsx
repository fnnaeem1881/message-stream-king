import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Key, 
  Activity, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  Copy, 
  Eye, 
  EyeOff,
  Plus,
  Trash2,
  Globe,
  Lock,
  Radio
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    plan: "Pro",
    avatar: "/api/placeholder/64/64"
  };

  // Mock API credentials
  const credentials = {
    appId: "1234567",
    key: "abc123def456ghi789",
    secret: "secret_key_xyz789abc123",
    cluster: "us-east-1"
  };

  // Mock stats
  const stats = {
    totalConnections: 15234,
    messagesThisMonth: 428567,
    activeChannels: 127,
    uptime: "99.9%"
  };

  // Mock channels
  const channels = [
    { name: "chat-room-1", type: "public", connections: 45, messages: 1234 },
    { name: "notifications", type: "private", connections: 89, messages: 567 },
    { name: "presence-dashboard", type: "presence", connections: 23, messages: 890 }
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const getChannelIcon = (type: string) => {
    switch (type) {
      case "public": return <Globe className="h-4 w-4" />;
      case "private": return <Lock className="h-4 w-4" />;
      case "presence": return <Radio className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Manage your Pusher applications and monitor real-time activity</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-gradient-hero text-primary-foreground">
                {user.plan} Plan
              </Badge>
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Connections</p>
                    <p className="text-2xl font-bold">{stats.totalConnections.toLocaleString()}</p>
                  </div>
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Messages This Month</p>
                    <p className="text-2xl font-bold">{stats.messagesThisMonth.toLocaleString()}</p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Channels</p>
                    <p className="text-2xl font-bold">{stats.activeChannels}</p>
                  </div>
                  <Radio className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Uptime</p>
                    <p className="text-2xl font-bold">{stats.uptime}</p>
                  </div>
                  <Activity className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="credentials">API Keys</TabsTrigger>
              <TabsTrigger value="channels">Channels</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quick Start */}
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Key className="h-5 w-5" />
                      Quick Start
                    </CardTitle>
                    <CardDescription>
                      Get started with your Pusher application in minutes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">1. Install the library</h4>
                      <code className="text-sm text-muted-foreground">npm install pusher-js</code>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">2. Initialize Pusher</h4>
                      <code className="text-sm text-muted-foreground">
                        const pusher = new Pusher('{credentials.key}')
                      </code>
                    </div>
                    <Button variant="hero" className="w-full">
                      View Documentation
                    </Button>
                  </CardContent>
                </Card>

                {/* Account Info */}
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Account Information
                    </CardTitle>
                    <CardDescription>
                      Your account details and plan information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input value={user.name} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input value={user.email} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label>Plan</Label>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{user.plan}</Badge>
                        <Button variant="outline" size="sm">Upgrade</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* API Keys Tab */}
            <TabsContent value="credentials" className="space-y-6">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    API Credentials
                  </CardTitle>
                  <CardDescription>
                    Use these credentials to connect your application to Pusher
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>App ID</Label>
                      <div className="flex">
                        <Input value={credentials.appId} readOnly className="rounded-r-none" />
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-l-none border-l-0"
                          onClick={() => handleCopy(credentials.appId, "App ID")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Cluster</Label>
                      <div className="flex">
                        <Input value={credentials.cluster} readOnly className="rounded-r-none" />
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-l-none border-l-0"
                          onClick={() => handleCopy(credentials.cluster, "Cluster")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Key</Label>
                      <div className="flex">
                        <Input 
                          value={showApiKey ? credentials.key : "•".repeat(credentials.key.length)} 
                          readOnly 
                          className="rounded-r-none" 
                        />
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-none border-l-0 border-r-0"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-l-none border-l-0"
                          onClick={() => handleCopy(credentials.key, "API Key")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Secret</Label>
                      <div className="flex">
                        <Input 
                          value={showSecretKey ? credentials.secret : "•".repeat(credentials.secret.length)} 
                          readOnly 
                          className="rounded-r-none" 
                        />
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-none border-l-0 border-r-0"
                          onClick={() => setShowSecretKey(!showSecretKey)}
                        >
                          {showSecretKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-l-none border-l-0"
                          onClick={() => handleCopy(credentials.secret, "Secret Key")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Example Usage</h4>
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
{`const pusher = new Pusher('${credentials.key}', {
  cluster: '${credentials.cluster}'
});

const channel = pusher.subscribe('my-channel');
channel.bind('my-event', (data) => {
  console.log('Received:', data);
});`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Channels Tab */}
            <TabsContent value="channels" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Active Channels</h2>
                  <p className="text-muted-foreground">Monitor your real-time channels and their activity</p>
                </div>
                <Button variant="hero">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Channel
                </Button>
              </div>

              <div className="grid gap-4">
                {channels.map((channel, index) => (
                  <Card key={index} className="bg-gradient-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-gradient-hero rounded-lg">
                            {getChannelIcon(channel.type)}
                          </div>
                          <div>
                            <h3 className="font-semibold">{channel.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Badge variant="outline" className="capitalize">{channel.type}</Badge>
                              <span>•</span>
                              <span>{channel.connections} connections</span>
                              <span>•</span>
                              <span>{channel.messages} messages</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Analytics
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Live Event Tracking
                  </CardTitle>
                  <CardDescription>
                    Real-time monitoring of your application's activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Activity className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Live Analytics Dashboard</h3>
                    <p className="text-muted-foreground mb-4">
                      Monitor real-time connections, messages, and events as they happen
                    </p>
                    <Button variant="hero">
                      Enable Real-time Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;