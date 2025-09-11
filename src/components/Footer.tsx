import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Channels", href: "/channels" },
        { name: "Beams", href: "/beams" },
        { name: "ChatKit", href: "/chatkit" },
        { name: "Pusher Channels", href: "/channels" }
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "API Reference", href: "/api-reference" },
        { name: "Libraries", href: "/libraries" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help-center" },
        { name: "Status", href: "/status" },
        { name: "Contact", href: "/contact" },
        { name: "Community", href: "/community" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay updated with the latest from
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Pusher</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest news, tutorials, and updates about real-time technologies 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-background border-border"
              />
              <Button variant="hero" className="sm:px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">P</span>
                </div>
                <span className="ml-3 text-xl font-bold">Pusher</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The leading platform for building real-time applications that scale.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-secondary/50 hover:text-accent transition-colors"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Pusher Ltd. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-muted-foreground hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;