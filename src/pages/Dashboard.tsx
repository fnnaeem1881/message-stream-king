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
import { Separator } from "@/components/ui/separator";
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
  RefreshCw,
  Home,
  Database,
  Bell,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Zap
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
  const { user, signOut } = useAuth();
  const { 
    profile, 
    credentials, 
    channels, 
    stats, 
    loading: dataLoading, 
    createChannel, 
    deleteChannel 
  } = useDashboardData();
  const navigate = useNavigate();
  
  // State management
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");
  const [newChannelType, setNewChannelType] = useState("public");
  const [isCreatingChannel, setIsCreatingChannel] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  
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
  const [isDebugRunning, setIsDebugRunning] = useState(true);

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  // Default data for when API is loading or fails
  const defaultProfile = {
    id: user?.id || 'default',
    user_id: user?.id || 'default',
    display_name: user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'User',
    email: user?.email || 'user@example.com',
    plan: 'Free',
    avatar_url: null
  };

  const defaultCredentials = {
    id: 'default',
    app_id: '1234567',
    key_value: 'key_a1b2c3d4e5f6g7h8',
    secret_value: 'secret_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
    cluster_name: 'us2'
  };

  const defaultStats = {
    total_connections: 1247,
    messages_this_month: 45892,
    active_channels: channels?.length || 3,
    uptime: 99.9
  };

  const currentProfile = profile || defaultProfile;
  const currentCredentials = credentials || defaultCredentials;
  const currentStats = stats || defaultStats;
  const currentChannels = channels || [
    {
      id: '1',
      name: 'presence-lobby',
      type: 'presence',
      connections: 23,
      messages: 156,
      is_active: true,
      created_at: new Date().toISOString(),
      user_id: user?.id || 'default'
    },
    {
      id: '2',
      name: 'private-chat-room',
      type: 'private',
      connections: 8,
      messages: 42,
      is_active: true,
      created_at: new Date().toISOString(),
      user_id: user?.id || 'default'
    }
  ];

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
    
    if (createChannel) {
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
    } else {
      // Fallback for demo
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
    if (deleteChannel) {
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="ml-3 text-xl font-bold text-slate-900 dark:text-white">Pusher</span>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                App ID: {currentCredentials.app_id}
              </Badge>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={currentProfile.avatar_url || ''} alt={currentProfile.display_name} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs">
                    {currentProfile.display_name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Monitor your application's real-time activity and manage channels
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Connections</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    {currentStats.total_connections.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+12% from last month</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Messages</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    {currentStats.messages_this_month.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+18% from last month</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Active Channels</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    {currentStats.active_channels}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+2 this week</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Radio className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Uptime</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    {currentStats.uptime}%
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">Last 30 days</p>
                </div>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <Activity className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - App Keys & Getting Started */}
          <div className="lg:col-span-2 space-y-6">
            {/* App Keys */}
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <Key className="h-5 w-5 text-purple-600" />
                  App Keys
                </CardTitle>
                <CardDescription>Your application credentials for Pusher Channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">App ID</Label>
                    <div className="flex mt-2">
                      <Input 
                        value={currentCredentials.app_id} 
                        readOnly 
                        className="font-mono text-sm bg-slate-50 dark:bg-slate-900"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(currentCredentials.app_id, "App ID")}
                        className="ml-2"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Key</Label>
                    <div className="flex mt-2">
                      <Input 
                        value={showApiKey ? currentCredentials.key_value : "••••••••••••••••"} 
                        readOnly 
                        className="font-mono text-sm bg-slate-50 dark:bg-slate-900"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="ml-2"
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(currentCredentials.key_value, "Key")}
                        className="ml-1"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Secret</Label>
                    <div className="flex mt-2">
                      <Input 
                        value={showSecretKey ? currentCredentials.secret_value : "••••••••••••••••••••••••••••••••"} 
                        readOnly 
                        className="font-mono text-sm bg-slate-50 dark:bg-slate-900"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setShowSecretKey(!showSecretKey)}
                        className="ml-2"
                      >
                        {showSecretKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(currentCredentials.secret_value, "Secret")}
                        className="ml-1"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Cluster</Label>
                    <div className="flex mt-2">
                      <Input 
                        value={currentCredentials.cluster_name} 
                        readOnly 
                        className="font-mono text-sm bg-slate-50 dark:bg-slate-900"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopy(currentCredentials.cluster_name, "Cluster")}
                        className="ml-2"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-slate-100 dark:bg-slate-800">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="channels">Channels</TabsTrigger>
                <TabsTrigger value="debug">Debug Console</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                    <CardDescription>Live feed of events and connections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900 dark:text-white">New connection established</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Channel: presence-lobby • {formatTimestamp(new Date().toISOString())}</p>
                        </div>
                        <Badge variant="secondary">Live</Badge>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900 dark:text-white">Message sent</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Channel: private-chat-room • {formatTimestamp(new Date(Date.now() - 30000).toISOString())}</p>
                        </div>
                        <Badge variant="outline">Event</Badge>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900 dark:text-white">Connection closed</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Channel: presence-lobby • {formatTimestamp(new Date(Date.now() - 60000).toISOString())}</p>
                        </div>
                        <Badge variant="secondary">Closed</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-6">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh Activity
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="channels" className="mt-6">
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Active Channels</CardTitle>
                      <CardDescription>Manage your real-time channels</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          New Channel
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
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
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label>Channel Type</Label>
                            <Select value={newChannelType} onValueChange={setNewChannelType}>
                              <SelectTrigger className="mt-2">
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
                    <div className="space-y-3">
                      {currentChannels.length === 0 ? (
                        <div className="text-center py-12">
                          <Radio className="h-16 w-16 mx-auto text-slate-400 mb-4" />
                          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">No channels yet</h3>
                          <p className="text-slate-600 dark:text-slate-400 mb-4">Create your first channel to start sending real-time messages</p>
                        </div>
                      ) : (
                        currentChannels.map((channel) => (
                          <div key={channel.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-4">
                              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                {getChannelIcon(channel.type)}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">{channel.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
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

              <TabsContent value="debug" className="mt-6">
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Terminal className="h-5 w-5 text-purple-600" />
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
                        {isDebugRunning ? "Pause" : "Start"}
                      </Button>
                      <Button variant="outline" size="sm" onClick={clearDebugEvents}>
                        Clear
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Event Creator */}
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                      <h4 className="text-sm font-semibold mb-4 text-slate-900 dark:text-white">Send Test Event</h4>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label className="text-xs text-slate-600 dark:text-slate-400">Channel</Label>
                          <Input
                            placeholder="e.g., my-channel"
                            value={debugChannel}
                            onChange={(e) => setDebugChannel(e.target.value)}
                            className="text-sm mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-slate-600 dark:text-slate-400">Event</Label>
                          <Input
                            placeholder="e.g., my-event"  
                            value={debugEventName}
                            onChange={(e) => setDebugEventName(e.target.value)}
                            className="text-sm mt-1"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <Label className="text-xs text-slate-600 dark:text-slate-400">Data (JSON)</Label>
                        <Textarea
                          placeholder='{"message": "Hello World!"}'
                          value={debugEventData}
                          onChange={(e) => setDebugEventData(e.target.value)}
                          className="text-sm font-mono mt-1"
                          rows={3}
                        />
                      </div>
                      <Button onClick={handleSendDebugEvent} className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        Send Event
                      </Button>
                    </div>

                    {/* Event Stream */}
                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                      <div className="p-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">Event Stream</span>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isDebugRunning ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`}></div>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {isDebugRunning ? 'Live' : 'Paused'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {debugEvents.length === 0 ? (
                          <div className="p-8 text-center">
                            <Terminal className="h-12 w-12 mx-auto text-slate-400 mb-3" />
                            <p className="text-slate-600 dark:text-slate-400">No events yet</p>
                            <p className="text-xs text-slate-500 dark:text-slate-500">Send a test event or start debug mode to see activity</p>
                          </div>
                        ) : (
                          <div className="p-4 space-y-3">
                            {debugEvents.map((event) => (
                              <div key={event.id} className="p-3 rounded-lg border-l-4 border-l-purple-500 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <Badge variant={event.type === 'sent' ? 'default' : 'secondary'} className="text-xs">
                                      {event.type.toUpperCase()}
                                    </Badge>
                                    <span className="text-sm font-mono text-slate-700 dark:text-slate-300">{event.channel}</span>
                                    <span className="text-sm text-slate-400">•</span>
                                    <span className="text-sm font-medium text-slate-900 dark:text-white">{event.event}</span>
                                  </div>
                                  <span className="text-xs text-slate-500 dark:text-slate-400">
                                    {formatTimestamp(event.timestamp)}
                                  </span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 rounded p-3 border border-slate-200 dark:border-slate-700">
                                  <pre className="text-xs font-mono text-slate-700 dark:text-slate-300 overflow-x-auto">
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
          </div>

          {/* Right Column - Getting Started */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg">Getting Started</CardTitle>
                <CardDescription>Quick setup guide for Pusher Channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-2 text-slate-900 dark:text-white">Install the library</p>
                      <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-3">
                        <code className="text-sm text-slate-700 dark:text-slate-300">npm install pusher-js</code>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-2 text-slate-900 dark:text-white">Initialize Pusher</p>
                      <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-3">
                        <code className="text-sm text-slate-700 dark:text-slate-300 block">
                          const pusher = new Pusher('{currentCredentials.key_value.substring(0, 8)}...', {'{'}
                          <br />
                          &nbsp;&nbsp;cluster: '{currentCredentials.cluster_name}'
                          <br />
                          {'}'});
                        </code>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-2 text-slate-900 dark:text-white">Subscribe to channels</p>
                      <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-3">
                        <code className="text-sm text-slate-700 dark:text-slate-300 block">
                          const channel = pusher.subscribe('my-channel');
                          <br />
                          channel.bind('my-event', (data) =&gt; {'{'}
                          <br />
                          &nbsp;&nbsp;console.log(data);
                          <br />
                          {'}'});
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Documentation
                </Button>
              </CardContent>
            </Card>

            {/* Plan Info */}
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg">Your Plan</CardTitle>
                <CardDescription>Current subscription details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2 mb-3">
                    {currentProfile.plan}
                  </Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Perfect for getting started with real-time features
                  </p>
                  <Button className="w-full" variant="outline">
                    <Zap className="h-4 w-4 mr-2" />
                    Upgrade Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;