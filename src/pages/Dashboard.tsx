import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Radio,
  LogOut,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useDashboardData } from "@/hooks/useDashboardData";

const Dashboard = () => {
  const { toast } = useToast();
  const { user, signOut, loading: authLoading } = useAuth();
  const { profile, credentials, channels, stats, loading, createChannel, deleteChannel } = useDashboardData();
  const navigate = useNavigate();
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");
  const [newChannelType, setNewChannelType] = useState("public");
  const [isCreatingChannel, setIsCreatingChannel] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleCreateChannel = async () => {
    if (!newChannelName.trim()) return;

    setIsCreatingChannel(true);
    const { error } = await createChannel(newChannelName, newChannelType);

    if (error) {
      toast({
        title: "Error creating channel",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Channel created!",
        description: `Channel "${newChannelName}" has been created successfully.`,
      });
      setNewChannelName("");
      setNewChannelType("public");
    }

    setIsCreatingChannel(false);
  };

  const handleDeleteChannel = async (channelId: string, channelName: string) => {
    const { error } = await deleteChannel(channelId);

    if (error) {
      toast({
        title: "Error deleting channel",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Channel deleted",
        description: `Channel "${channelName}" has been deleted.`,
      });
    }
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
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="ml-3 text-xl font-bold">Pusher</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <button className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground">
              <BarChart3 className="h-4 w-4 mr-3" />
              Dashboard
            </button>
            <button className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              <Radio className="h-4 w-4 mr-3" />
              Channels
            </button>
            <button className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              <Activity className="h-4 w-4 mr-3" />
              Insights
            </button>
            <button className="w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </button>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src={profile.avatar_url || ''} alt={profile.display_name || 'User'} />
              <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xs">
                {(profile.display_name || 'U').split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">{profile.display_name || 'User'}</p>
              <p className="text-xs text-muted-foreground">{profile.plan} Plan</p>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Monitor your application's real-time activity</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-gradient-hero text-primary-foreground">
              App ID: {credentials?.app_id}
            </Badge>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Connections</p>
                    <p className="text-2xl font-bold mt-1">{stats?.total_connections?.toLocaleString() || '0'}</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Messages</p>
                    <p className="text-2xl font-bold mt-1">{stats?.messages_this_month?.toLocaleString() || '0'}</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Channels</p>
                    <p className="text-2xl font-bold mt-1">{stats?.active_channels || 0}</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Radio className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Uptime</p>
                    <p className="text-2xl font-bold mt-1">{stats?.uptime || 99.9}%</p>
                  </div>
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                    <Activity className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & App Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* App Keys */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">App Keys</CardTitle>
                <CardDescription>Your application credentials for Pusher Channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide">App ID</Label>
                    <div className="flex mt-1">
                      <Input value={credentials?.app_id || ''} readOnly className="text-sm" />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(credentials?.app_id || '', "App ID")}
                        className="ml-1"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide">Key</Label>
                    <div className="flex mt-1">
                      <Input 
                        value={showApiKey ? (credentials?.key_value || '') : "••••••••••••••••"} 
                        readOnly 
                        className="text-sm"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="ml-1"
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide">Secret</Label>
                    <div className="flex mt-1">
                      <Input 
                        value={showSecretKey ? (credentials?.secret_value || '') : "••••••••••••••••"} 
                        readOnly 
                        className="text-sm"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowSecretKey(!showSecretKey)}
                        className="ml-1"
                      >
                        {showSecretKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide">Cluster</Label>
                    <div className="flex mt-1">
                      <Input value={credentials?.cluster_name || ''} readOnly className="text-sm" />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(credentials?.cluster_name || '', "Cluster")}
                        className="ml-1"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Getting Started */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Getting Started</CardTitle>
                <CardDescription>Quick setup guide for Pusher Channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <p className="text-sm font-medium">Install the library</p>
                      <code className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">npm install pusher-js</code>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <p className="text-sm font-medium">Initialize Pusher</p>
                      <code className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        const pusher = new Pusher('{credentials?.key_value?.slice(0, 8) || 'your-key'}...')
                      </code>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <p className="text-sm font-medium">Subscribe to channels</p>
                      <code className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">pusher.subscribe('my-channel')</code>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Tabs defaultValue="activity" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="channels">Active Channels</TabsTrigger>
              <TabsTrigger value="debug">Debug Console</TabsTrigger>
            </TabsList>

            <TabsContent value="activity">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                  <CardDescription>Live feed of events and connections</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New connection established</p>
                        <p className="text-xs text-muted-foreground">Channel: lobby • 2 seconds ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Message sent</p>
                        <p className="text-xs text-muted-foreground">Channel: chat-room-1 • 15 seconds ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Connection closed</p>
                        <p className="text-xs text-muted-foreground">Channel: lobby • 1 minute ago</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">View All Activity</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="channels">
              <Card className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Active Channels</CardTitle>
                    <CardDescription>Manage your real-time channels</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        New Channel
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create New Channel</DialogTitle>
                        <DialogDescription>Create a new real-time channel</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label>Channel Name</Label>
                          <Input
                            placeholder="e.g., chat-room-1"
                            value={newChannelName}
                            onChange={(e) => setNewChannelName(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Channel Type</Label>
                          <Select value={newChannelType} onValueChange={setNewChannelType}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Public</SelectItem>
                              <SelectItem value="private">Private</SelectItem>
                              <SelectItem value="presence">Presence</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleCreateChannel} disabled={isCreatingChannel}>
                          {isCreatingChannel && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Create Channel
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {channels.length === 0 ? (
                      <div className="text-center py-8">
                        <Radio className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                        <p className="text-muted-foreground">No channels created yet</p>
                        <p className="text-sm text-muted-foreground">Create your first channel to get started</p>
                      </div>
                    ) : (
                      channels.map((channel) => (
                        <div key={channel.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            {getChannelIcon(channel.type)}
                            <div>
                              <p className="text-sm font-medium">{channel.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {channel.connections} connections • {channel.messages} messages
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={channel.is_active ? "default" : "secondary"}>
                              {channel.is_active ? "Active" : "Inactive"}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteChannel(channel.id, channel.name)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="debug">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Debug Console</CardTitle>
                  <CardDescription>Monitor events and debug your real-time application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Activity className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Debug Console</h3>
                    <p className="text-muted-foreground mb-4">
                      Monitor real-time events, connections, and debug your application
                    </p>
                    <Button variant="outline">
                      Start Debug Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;