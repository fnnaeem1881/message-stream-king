import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const CodeExamples = () => {
  const { toast } = useToast();

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "Code has been copied to your clipboard.",
    });
  };

  const handleRunDemo = (title: string) => {
    toast({
      title: "Demo started!",
      description: `Running ${title} demo in console.`,
    });
    console.log(`Demo: ${title} is running...`);
  };

  const examples = [
    {
      title: "Real-time Chat",
      language: "JavaScript",
      code: `// Subscribe to messages
const pusher = new Pusher('your-key');
const channel = pusher.subscribe('chat');

channel.bind('new-message', (data) => {
  displayMessage(data.message);
});

// Send a message
fetch('/api/messages', {
  method: 'POST',
  body: JSON.stringify({ message: 'Hello!' })
});`
    },
    {
      title: "Live Notifications",
      language: "React",
      code: `function NotificationComponent() {
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    const channel = pusher.subscribe('notifications');
    
    channel.bind('new-notification', (data) => {
      setNotifications(prev => [...prev, data]);
    });
    
    return () => pusher.unsubscribe('notifications');
  }, []);
  
  return <NotificationList items={notifications} />;
}`
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start building in
            <span className="bg-gradient-hero bg-clip-text text-transparent"> minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple APIs that work with any programming language or framework. 
            Get up and running with just a few lines of code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {examples.map((example, index) => (
            <Card key={index} className="bg-gradient-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-lg font-semibold">{example.title}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{example.language}</Badge>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleCopy(example.code)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleRunDemo(example.title)}
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-foreground">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/docs">View Full Documentation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;