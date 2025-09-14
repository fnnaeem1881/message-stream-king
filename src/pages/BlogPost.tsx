import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowLeft, Share, Bookmark, Heart } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in real app this would come from API
  const post = {
    title: "Building Real-time Collaborative Features: A Complete Guide",
    content: `
      <p>Real-time collaboration has become an essential feature in modern web applications. From Google Docs to Figma, users expect to see changes happening in real-time as their colleagues work alongside them.</p>
      
      <h2>Getting Started with Real-time Features</h2>
      <p>Before diving into the implementation, it's important to understand the core concepts that make real-time collaboration possible:</p>
      
      <ul>
        <li><strong>WebSocket Connections:</strong> Persistent connections that allow bidirectional communication</li>
        <li><strong>Event Broadcasting:</strong> Distributing changes to all connected clients</li>
        <li><strong>Conflict Resolution:</strong> Handling simultaneous edits gracefully</li>
        <li><strong>Presence Awareness:</strong> Showing who's currently active in the document</li>
      </ul>
      
      <h2>Implementation with Pusher</h2>
      <p>Pusher makes it incredibly simple to add real-time features to your application. Here's a basic example:</p>
      
      <pre><code>// Initialize Pusher
const pusher = new Pusher('your-app-key', {
  cluster: 'your-cluster'
});

// Subscribe to a channel
const channel = pusher.subscribe('document-123');

// Listen for events
channel.bind('text-updated', (data) => {
  updateDocument(data.content, data.position);
});

// Trigger events when user makes changes
function handleTextChange(content, position) {
  fetch('/api/update-document', {
    method: 'POST',
    body: JSON.stringify({ content, position })
  });
}</code></pre>
      
      <h2>Adding Presence Indicators</h2>
      <p>One of the most engaging features of real-time collaboration is seeing who else is working on the document. Here's how to implement presence indicators:</p>
      
      <pre><code>// Subscribe to presence channel
const presenceChannel = pusher.subscribe('presence-document-123');

// Handle user joining
presenceChannel.bind('pusher:member_added', (member) => {
  showUserCursor(member.info);
});

// Handle user leaving
presenceChannel.bind('pusher:member_removed', (member) => {
  hideUserCursor(member.id);
});</code></pre>
      
      <h2>Best Practices</h2>
      <p>When building real-time collaborative features, keep these best practices in mind:</p>
      
      <ol>
        <li><strong>Debounce Updates:</strong> Don't send every keystroke - batch changes to reduce network traffic</li>
        <li><strong>Handle Offline States:</strong> Gracefully handle when users lose connection</li>
        <li><strong>Implement Proper Authentication:</strong> Ensure only authorized users can access documents</li>
        <li><strong>Add Rate Limiting:</strong> Prevent abuse and ensure system stability</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Real-time collaboration doesn't have to be complex. With the right tools and approach, you can create engaging collaborative experiences that users love. Start with simple features like live cursors and presence indicators, then gradually add more sophisticated functionality like operational transforms for conflict resolution.</p>
    `,
    author: "Sarah Chen",
    authorRole: "Developer Advocate",
    authorBio: "Sarah is a Developer Advocate at Pusher with over 8 years of experience building real-time applications. She loves helping developers create amazing user experiences.",
    publishDate: "March 15, 2024",
    readTime: "12 min read",
    category: "Tutorial",
    tags: ["Real-time", "WebSockets", "JavaScript", "Collaboration"],
    image: "/api/placeholder/1200/600",
    likes: 234,
    bookmarks: 89
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Back Navigation */}
        <div className="container mx-auto px-6 py-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-6 max-w-4xl">
          <header className="mb-12">
            <Badge variant="secondary" className="mb-6">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="/api/placeholder/48/48" alt={post.author} />
                  <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {post.publishDate}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <div className="flex items-center justify-between border-y border-border py-4">
              <div className="flex gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">{tag}</Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  {post.bookmarks}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12 prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="bg-gradient-card border border-border rounded-lg p-8 mb-12">
            <div className="flex items-start gap-6">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/api/placeholder/64/64" alt={post.author} />
                <AvatarFallback className="bg-gradient-hero text-primary-foreground text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
                <p className="text-muted-foreground mb-4">{post.authorBio}</p>
                <Button variant="outline" size="sm">
                  Follow on Twitter
                </Button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gradient-card border border-border rounded-lg p-6 hover:shadow-card transition-shadow">
                  <Badge variant="secondary" className="mb-3">Tutorial</Badge>
                  <h3 className="font-semibold mb-2 hover:text-accent transition-colors cursor-pointer">
                    {i === 1 ? "WebSocket vs Server-Sent Events" : "Scaling Real-time Applications"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {i === 1 
                      ? "A deep dive into real-time communication protocols and when to choose each approach."
                      : "Best practices and architecture patterns for building applications that scale."
                    }
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {i === 1 ? "8 min read" : "15 min read"}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;