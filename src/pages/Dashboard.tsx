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
import { Textarea } from "@/components/ui/textarea";
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
  Loader2,
  Send,
  Terminal,
  Play,
  Pause,
  Download,
  RefreshCw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useDashboardData } from "@/hooks/useDashboardData";

interface DebugEvent {
  id: string;
  timestamp: string;
  channel: string;
  event: string;
  data: string;
  type: 'sent' | 'received';
}

const Dashboard = () => {
  const { toast } = useToast();
  const { user, signOut, loading: authLoading } = useAuth();
  const { profile, credentials, channels, stats, loading, createChannel, deleteChannel } = useDashboardData();
  const navigate = useNavigate();
  
  // State management
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");
  const [newChannelType, setNewChannelType] = useState("public");
  const [isCreatingChannel, setIsCreatingChannel] = useState(false);
  
  // Debug console state
  const [debugEvents, setDebugEvents] = useState<DebugEvent[]>([
    {
      id: '1',
      timestamp: new Date().toISOString(),
      channel: 'presence-lobby',
      event: 'pusher:member_added',
      data: '{"user_id": "123", "user_info": {"name": "John Doe"}}',
      type: 'received'
    },
    {
      id: '2', 
      timestamp: new Date(Date.now() - 30000).toISOString(),
      channel: 'private-chat-room',
      event: 'message',
      data: '{"text": "Hello World!", "user": "user123"}',
      type: 'received'
    }
  ]);
  const [debugChannel, setDebugChannel] = useState("");
  const [debugEventName, setDebugEventName] = useState("");
  const [debugEventData, setDebugEventData] = useState("");
  const [isDebugRunning, setIsDebugRunning] = useState(false);

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
    if (!text) return;
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

  const handleSendDebugEvent = () => {
    if (!debugChannel || !debugEventName) {
      toast({
        title: "Missing fields",
        description: "Please fill in channel and event name",
        variant: "destructive",
      });
      return;
    }

    const newEvent: DebugEvent = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      channel: debugChannel,
      event: debugEventName,
      data: debugEventData || '{}',
      type: 'sent'
    };

    setDebugEvents(prev => [newEvent, ...prev]);
    setDebugChannel("");
    setDebugEventName("");
    setDebugEventData("");

    toast({
      title: "Event sent",
      description: `Event "${debugEventName}" sent to channel "${debugChannel}"`,
    });
  };

  const toggleDebugMode = () => {
    setIsDebugRunning(!isDebugRunning);
    toast({
      title: isDebugRunning ? "Debug mode stopped" : "Debug mode started",
      description: isDebugRunning ? "Event monitoring paused" : "Now monitoring real-time events",
    });
  };

  const clearDebugEvents = () => {
    setDebugEvents([]);
    toast({
      title: "Debug console cleared",
      description: "All events have been removed from the console",
    });
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
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
              <AvatarImage src={profile?.avatar_url || ''} alt={profile?.display_name || 'User'} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xs">
                {(profile?.display_name || 'U').split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">{profile?.display_name || 'User'}</p>
              <p className="text-xs text-muted-foreground">{profile?.plan || 'Free'} Plan</p>
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
            <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/20">
              App ID: {credentials?.app_id || 'N/A'}
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
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/50 rounded-full flex items-center justify-center">
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
                  <div className="w-10 h-10 bg-green-50 dark:bg-green-950/50 rounded-full flex items-center justify-center">
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
                  <div className="w-10 h-10 bg-purple-50 dark:bg-purple-950/50 rounded-full flex items-center justify-center">
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
                  <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/50 rounded-full flex items-center justify-center">
                    <Activity className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* App Keys & Getting Started */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* App Keys */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  App Keys
                </CardTitle>
                <CardDescription>Your application credentials for Pusher Channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide">App ID</Label>
                    <div className="flex mt-1">
                      <Input value={credentials?.app_id || ''} readOnly className="text-sm font-mono" />
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
                        className="text-sm font-mono"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="ml-1"
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(credentials?.key_value || '', "Key")}
                        className="ml-1"
                      >
                        <Copy className="h-4 w-4" />
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
                        className="text-sm font-mono"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowSecretKey(!showSecretKey)}
                        className="ml-1"
                      >
                        {showSecretKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(credentials?.secret_value || '', "Secret")}
                        className="ml-1"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide">Cluster</Label>
                    <div className="flex mt-1">
                      <Input value={credentials?.cluster_name || 'us2'} readOnly className="text-sm font-mono" />
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
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">Install the library</p>
                      <div className="bg-secondary/50 rounded px-3 py-2">
                        <code className="text-xs text-muted-foreground">npm install pusher-js</code>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">Initialize Pusher</p>
                      <div className="bg-secondary/50 rounded px-3 py-2">
                        <code className="text-xs text-muted-foreground">
                          const pusher = new Pusher('{credentials?.key_value?.substring(0, 8) || 'your-key'}...', {'{'}
                          <br />
                          &nbsp;&nbsp;cluster: '{credentials?.cluster_name || 'us2'}'
                          <br />
                          {'})'}
                        </code>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">Subscribe to channels</p>
                      <div className="bg-secondary/50 rounded px-3 py-2">
                         <code className="text-xs text-muted-foreground">
                           const channel = pusher.subscribe('my-channel');<br />
                           channel.bind('my-event', (data) =&gt; {'{'} console.log(data); {'}'});
                         </code>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="activity" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="channels">Channels ({channels?.length || 0})</TabsTrigger>
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
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New connection established</p>
                        <p className="text-xs text-muted-foreground">Channel: presence-lobby • {formatTimestamp(new Date().toISOString())}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Message sent</p>
                        <p className="text-xs text-muted-foreground">Channel: private-chat-room • {formatTimestamp(new Date(Date.now() - 30000).toISOString())}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Connection closed</p>
                        <p className="text-xs text-muted-foreground">Channel: presence-lobby • {formatTimestamp(new Date(Date.now() - 60000).toISOString())}</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh Activity
                  </Button>
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
                        <DialogDescription>Create a new real-time channel for your application</DialogDescription>
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
                              <SelectItem value="public">
                                <div className="flex items-center gap-2">
                                  <Globe className="h-4 w-4" />
                                  Public - Anyone can subscribe
                                </div>
                              </SelectItem>
                              <SelectItem value="private">
                                <div className="flex items-center gap-2">
                                  <Lock className="h-4 w-4" />
                                  Private - Requires authentication
                                </div>
                              </SelectItem>
                              <SelectItem value="presence">
                                <div className="flex items-center gap-2">
                                  <Radio className="h-4 w-4" />
                                  Presence - Track online users
                                </div>
                              </SelectItem>
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
                    {channels?.length === 0 ? (
                      <div className="text-center py-12">
                        <Radio className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No channels yet</h3>
                        <p className="text-muted-foreground mb-4">Create your first channel to start sending real-time messages</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>
                              <Plus className="h-4 w-4 mr-2" />
                              Create Channel
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Create New Channel</DialogTitle>
                              <DialogDescription>Create a new real-time channel for your application</DialogDescription>
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
                                    <SelectItem value="public">
                                      <div className="flex items-center gap-2">
                                        <Globe className="h-4 w-4" />
                                        Public
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="private">
                                      <div className="flex items-center gap-2">
                                        <Lock className="h-4 w-4" />
                                        Private
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="presence">
                                      <div className="flex items-center gap-2">
                                        <Radio className="h-4 w-4" />
                                        Presence
                                      </div>
                                    </SelectItem>
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
                      </div>
                    ) : (
                      channels?.map((channel) => (
                        <div key={channel.id} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border">
                          <div className="flex items-center gap-3">
                            {getChannelIcon(channel.type)}
                            <div>
                              <p className="text-sm font-medium">{channel.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {channel.connections || 0} connections • {channel.messages || 0} messages
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
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Terminal className="h-5 w-5" />
                      Debug Console
                    </CardTitle>
                    <CardDescription>Monitor events and debug your real-time application</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={isDebugRunning ? "destructive" : "default"}
                      size="sm"
                      onClick={toggleDebugMode}
                    >
                      {isDebugRunning ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                      {isDebugRunning ? "Stop" : "Start"}
                    </Button>
                    <Button variant="outline" size="sm" onClick={clearDebugEvents}>
                      Clear Console
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Event Creator */}
                  <div className="border rounded-lg p-4 bg-secondary/20">
                    <h4 className="text-sm font-medium mb-3">Send Test Event</h4>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <Label className="text-xs">Channel</Label>
                        <Input
                          placeholder="e.g., my-channel"
                          value={debugChannel}
                          onChange={(e) => setDebugChannel(e.target.value)}
                          className="text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Event</Label>
                        <Input
                          placeholder="e.g., my-event"  
                          value={debugEventName}
                          onChange={(e) => setDebugEventName(e.target.value)}
                          className="text-sm"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <Label className="text-xs">Data (JSON)</Label>
                      <Textarea
                        placeholder='{"message": "Hello World!"}'
                        value={debugEventData}
                        onChange={(e) => setDebugEventData(e.target.value)}
                        className="text-sm font-mono"
                        rows={3}
                      />
                    </div>
                    <Button onClick={handleSendDebugEvent} size="sm" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Event
                    </Button>
                  </div>

                  {/* Event Stream */}
                  <div className="border rounded-lg">
                    <div className="p-3 border-b bg-secondary/50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Event Stream</span>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${isDebugRunning ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                          <span className="text-xs text-muted-foreground">
                            {isDebugRunning ? 'Live' : 'Paused'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {debugEvents.length === 0 ? (
                        <div className="p-8 text-center">
                          <Terminal className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                          <p className="text-muted-foreground">No events yet</p>
                          <p className="text-xs text-muted-foreground">Send a test event or start debug mode to see activity</p>
                        </div>
                      ) : (
                        <div className="p-2 space-y-2">
                          {debugEvents.map((event) => (
                            <div key={event.id} className="p-3 rounded border-l-4 border-l-primary/20 bg-secondary/30">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Badge variant={event.type === 'sent' ? 'default' : 'secondary'} className="text-xs">
                                    {event.type.toUpperCase()}
                                  </Badge>
                                  <span className="text-sm font-mono">{event.channel}</span>
                                  <span className="text-sm text-muted-foreground">•</span>
                                  <span className="text-sm font-medium">{event.event}</span>
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  {formatTimestamp(event.timestamp)}
                                </span>
                              </div>
                              <div className="bg-background/50 rounded p-2">
                                <pre className="text-xs font-mono overflow-x-auto">
                                  {JSON.stringify(JSON.parse(event.data || '{}'), null, 2)}
                                </pre>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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