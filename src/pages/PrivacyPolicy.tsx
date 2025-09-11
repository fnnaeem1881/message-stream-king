import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pusher Ltd ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our website 
                  and use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Identity Data: first name, maiden name, last name, username</li>
                  <li>Contact Data: billing address, delivery address, email address, telephone numbers</li>
                  <li>Financial Data: bank account and payment card details</li>
                  <li>Transaction Data: details about payments and services used</li>
                  <li>Technical Data: IP address, browser type, time zone setting</li>
                  <li>Profile Data: username, password, purchases, preferences</li>
                  <li>Usage Data: information about how you use our website and services</li>
                  <li>Marketing Data: your preferences in receiving marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use 
                  your personal data in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>To provide and maintain our services</li>
                  <li>To process your transactions and manage payments</li>
                  <li>To communicate with you about our services</li>
                  <li>To improve our services and develop new features</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We have put in place appropriate security measures to prevent your personal data from being 
                  accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We use 
                  industry-standard encryption and security protocols to protect your data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We will only retain your personal data for as long as necessary to fulfil the purposes we 
                  collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website uses cookies to distinguish you from other users of our website. This helps us to 
                  provide you with a good experience when you browse our website and also allows us to improve our site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;