import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { 
  Key, 
  Activity, 
  Users, 
  MessageSquare, 
  Copy, 
  Eye, 
  EyeOff,
  Radio,
  LogOut,
  Bell,
  HelpCircle,
  Send,
  Play,
  Pause,
  Trash2,
  ExternalLink,
  Code,
  Webhook,
  AlertCircle,
  Zap,
  BarChart3,
  Settings,
  UserPlus,
  UserCircle,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useDashboardData } from "@/hooks/useDashboardData";
import { supabase } from "@/integrations/supabase/client";
import { DashboardSidebar } from "@/components/DashboardSidebar";

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
  const { user } = useAuth();
  const { profile, refetch } = useDashboardData();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("overview");
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [isDebugRunning, setIsDebugRunning] = useState(true);
  
  // Profile update state
  const [displayName, setDisplayName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  
  // Mock data
  const credentials = {
    app_id: '1234567',
    key_value: 'a1b2c3d4e5f6g7h8',
    secret_value: 'secret_1a2b3c4d5e6f7g8h9i0j',
    cluster_name: 'us2'
  };

  const stats = {
    total_connections: 1247,
    messages_this_month: 45892,
    active_channels: 12,
    uptime: 99.9
  };

  const [debugEvents, setDebugEvents] = useState<DebugEvent[]>([
    {
      id: '1',
      timestamp: new Date().toISOString(),
      channel: 'presence-lobby',
      event: 'pusher:member_added',
      data: '{"user_id": "123", "user_info": {"name": "John Doe"}}',
      type: 'received'
    }
  ]);
  
  const [debugChannel, setDebugChannel] = useState("");
  const [debugEventName, setDebugEventName] = useState("");
  const [debugEventData, setDebugEventData] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    setIsUpdatingProfile(true);
    
    const { error } = await supabase
      .from('profiles')
      .update({
        display_name: displayName,
        email: profileEmail
      })
      .eq('user_id', user.id);
    
    if (error) {
      toast({
        title: "Error updating profile",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Profile updated!",
        description: "Your profile information has been saved.",
      });
      refetch();
    }
    
    setIsUpdatingProfile(false);
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

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Connections</p>
                      <p className="text-3xl font-bold mt-2">{stats.total_connections.toLocaleString()}</p>
                      <p className="text-xs text-green-600 mt-1">+12% from last month</p>
                    </div>
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Messages</p>
                      <p className="text-3xl font-bold mt-2">{stats.messages_this_month.toLocaleString()}</p>
                      <p className="text-xs text-green-600 mt-1">+18% from last month</p>
                    </div>
                    <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Channels</p>
                      <p className="text-3xl font-bold mt-2">{stats.active_channels}</p>
                      <p className="text-xs text-green-600 mt-1">+2 this week</p>
                    </div>
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                      <Radio className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Uptime</p>
                      <p className="text-3xl font-bold mt-2">{stats.uptime}%</p>
                      <p className="text-xs text-green-600 mt-1">Last 30 days</p>
                    </div>
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg">
                      <Activity className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activity Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Activity Overview</CardTitle>
                <CardDescription>Real-time connection and message statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <p className="text-muted-foreground">Activity chart will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "profile":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCircle className="h-5 w-5 text-purple-600" />
                Profile Settings
              </CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-2xl">
                    {(profile?.display_name || user?.email || 'U')[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{profile?.display_name || 'User'}</h3>
                  <p className="text-sm text-muted-foreground">{profile?.email || user?.email}</p>
                  <Badge variant="secondary" className="mt-2">
                    {profile?.plan || 'Free'} Plan
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="display-name">Display Name</Label>
                  <Input
                    id="display-name"
                    value={displayName || profile?.display_name || ''}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="profile-email">Email</Label>
                  <Input
                    id="profile-email"
                    type="email"
                    value={profileEmail || profile?.email || ''}
                    onChange={(e) => setProfileEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    This is the email associated with your account
                  </p>
                </div>

                <div>
                  <Label>User ID</Label>
                  <Input
                    value={user?.id || 'N/A'}
                    readOnly
                    className="mt-2 font-mono text-sm bg-muted"
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleUpdateProfile}
                    disabled={isUpdatingProfile}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {isUpdatingProfile ? (
                      <>
                        <Activity className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case "getting-started":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Getting Started
              </CardTitle>
              <CardDescription>Quick setup guide for Pusher Channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">1. Install the library</h3>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                  <code>npm install pusher-js</code>
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Initialize Pusher</h3>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`const pusher = new Pusher('${credentials.key_value}', {
  cluster: '${credentials.cluster_name}'
});`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Subscribe to a channel</h3>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
{`const channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  console.log(data);
});`}
                </pre>
              </div>
              <Button className="w-full" variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Full Documentation
              </Button>
            </CardContent>
          </Card>
        );

      case "app-keys":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5 text-purple-600" />
                App Keys
              </CardTitle>
              <CardDescription>Your application credentials for Pusher Channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>App ID</Label>
                  <div className="flex mt-2">
                    <Input 
                      value={credentials.app_id} 
                      readOnly 
                      className="font-mono text-sm"
                    />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleCopy(credentials.app_id, "App ID")}
                      className="ml-2"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Label>Key</Label>
                  <div className="flex mt-2">
                    <Input 
                      value={showApiKey ? credentials.key_value : "••••••••••••••••"} 
                      readOnly 
                      className="font-mono text-sm"
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
                      onClick={() => handleCopy(credentials.key_value, "Key")}
                      className="ml-1"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Secret</Label>
                  <div className="flex mt-2">
                    <Input 
                      value={showSecretKey ? credentials.secret_value : "••••••••••••••••••••"} 
                      readOnly 
                      className="font-mono text-sm"
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
                      onClick={() => handleCopy(credentials.secret_value, "Secret")}
                      className="ml-1"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Label>Cluster</Label>
                  <div className="flex mt-2">
                    <Input 
                      value={credentials.cluster_name} 
                      readOnly 
                      className="font-mono text-sm"
                    />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleCopy(credentials.cluster_name, "Cluster")}
                      className="ml-2"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case "functions":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Functions
              </CardTitle>
              <CardDescription>Serverless functions for your Pusher app</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Zap className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">No functions configured yet</p>
                <Button>Create Function</Button>
              </div>
            </CardContent>
          </Card>
        );

      case "stats":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Statistics
              </CardTitle>
              <CardDescription>Detailed analytics and metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="text-muted-foreground">Detailed statistics will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        );

      case "debug-console":
        return (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Debug Console
                  </CardTitle>
                  <CardDescription>Monitor real-time events and test your channels</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={isDebugRunning ? "default" : "outline"}
                    size="sm"
                    onClick={() => setIsDebugRunning(!isDebugRunning)}
                  >
                    {isDebugRunning ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isDebugRunning ? "Pause" : "Resume"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setDebugEvents([])}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Send Event Form */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg space-y-3">
                <h3 className="font-semibold">Send Test Event</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs">Channel</Label>
                    <Input
                      placeholder="my-channel"
                      value={debugChannel}
                      onChange={(e) => setDebugChannel(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Event</Label>
                    <Input
                      placeholder="my-event"
                      value={debugEventName}
                      onChange={(e) => setDebugEventName(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-xs">Data (JSON)</Label>
                  <Textarea
                    placeholder='{"message": "Hello World"}'
                    value={debugEventData}
                    onChange={(e) => setDebugEventData(e.target.value)}
                    className="mt-1 font-mono text-sm"
                    rows={3}
                  />
                </div>
                <Button onClick={handleSendDebugEvent} className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Event
                </Button>
              </div>

              {/* Events Log */}
              <div>
                <h3 className="font-semibold mb-3">Event Log</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {debugEvents.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">No events yet</p>
                  ) : (
                    debugEvents.map((event) => (
                      <div
                        key={event.id}
                        className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border text-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={event.type === 'sent' ? 'default' : 'secondary'}>
                              {event.type}
                            </Badge>
                            <span className="font-mono text-xs text-muted-foreground">
                              {new Date(event.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-1 text-xs">
                          <div>
                            <span className="text-muted-foreground">Channel:</span>{" "}
                            <span className="font-mono">{event.channel}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Event:</span>{" "}
                            <span className="font-mono">{event.event}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Data:</span>{" "}
                            <pre className="mt-1 p-2 bg-slate-900 text-slate-100 rounded overflow-x-auto">
                              {event.data}
                            </pre>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case "error-logs":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Error Logs
              </CardTitle>
              <CardDescription>Application error monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <AlertCircle className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <p className="text-muted-foreground">No errors logged</p>
              </div>
            </CardContent>
          </Card>
        );

      case "webhooks":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Webhook className="h-5 w-5" />
                Webhooks
              </CardTitle>
              <CardDescription>Configure webhooks for channel events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Webhook className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">No webhooks configured</p>
                <Button>Add Webhook</Button>
              </div>
            </CardContent>
          </Card>
        );

      case "collaborators":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Collaborators
              </CardTitle>
              <CardDescription>Manage team access to this app</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <UserPlus className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">No collaborators added yet</p>
                <Button>Invite Collaborator</Button>
              </div>
            </CardContent>
          </Card>
        );

      case "app-settings":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                App Settings
              </CardTitle>
              <CardDescription>Configure your application settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>App Name</Label>
                <Input value="My Pusher App" className="mt-2" />
              </div>
              <div>
                <Label>Cluster</Label>
                <Input value={credentials.cluster_name} readOnly className="mt-2" />
              </div>
              <div className="pt-4 border-t">
                <h3 className="text-sm font-semibold text-red-600 mb-2">Danger Zone</h3>
                <Button variant="destructive" size="sm">Delete App</Button>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="ml-3 text-xl font-bold">Pusher</span>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                App ID: {credentials.app_id}
              </Badge>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs">
                    DU
                  </AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex">
        <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
