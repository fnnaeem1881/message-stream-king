import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that are stored on your computer or mobile device when you visit 
                  a website. They are widely used to make websites work more efficiently and to provide information 
                  to site owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pusher uses cookies for several purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>To keep you signed in to your account</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how you use our website and services</li>
                  <li>To improve our website performance and user experience</li>
                  <li>To prevent fraud and enhance security</li>
                  <li>To deliver relevant content and advertisements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies are necessary for the website to function properly. They enable core functionality 
                      such as security, network management, and accessibility.
                    </p>
                  </div>

                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Performance Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies collect information about how you use our website, such as which pages you visit 
                      most often. This helps us improve our website performance.
                    </p>
                  </div>

                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies allow the website to remember choices you make and provide enhanced features 
                      and personal content.
                    </p>
                  </div>

                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Targeting/Advertising Cookies</h3>
                    <p className="text-muted-foreground text-sm">
                      These cookies are used to deliver content more relevant to you and your interests. They may 
                      be set by us or by third-party providers.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use third-party services that set cookies on our behalf. These include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Intercom:</strong> For customer support and communication</li>
                  <li><strong>Mixpanel:</strong> For product analytics and user behavior tracking</li>
                  <li><strong>Stripe:</strong> For payment processing and fraud prevention</li>
                  <li><strong>Cloudflare:</strong> For security and performance optimization</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Through your browser settings (most browsers allow you to refuse cookies)</li>
                  <li>Using our cookie preference center (when available)</li>
                  <li>Opting out of third-party advertising cookies through industry tools</li>
                  <li>Disabling cookies for specific services through their settings</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Browser-Specific Cookie Management</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can manage cookies through your browser settings:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Chrome:</strong> Settings {'>'} Privacy and security {'>'} Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings {'>'} Privacy & Security {'>'} Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences {'>'} Privacy {'>'} Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings {'>'} Cookies and site permissions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Cookie Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Different types of cookies are stored for different periods:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain until they expire or are deleted</li>
                  <li><strong>Authentication cookies:</strong> Typically expire after 30 days of inactivity</li>
                  <li><strong>Analytics cookies:</strong> Usually retained for 1-2 years</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or 
                  applicable laws. We will notify you of any significant changes by posting the new policy 
                  on our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Cookie Policy, please contact us:
                </p>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Pusher Ltd</p>
                  <p className="text-muted-foreground">Email: privacy@pusher.com</p>
                  <p className="text-muted-foreground">Address: 28 Great Pulteney Street, London W1F 9NB, United Kingdom</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;