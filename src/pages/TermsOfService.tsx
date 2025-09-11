import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By accessing and using the Pusher service, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not 
                  use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pusher provides real-time messaging infrastructure and APIs that enable developers to build 
                  real-time features into web and mobile applications. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Pusher Channels - Real-time messaging API</li>
                  <li>Pusher Beams - Push notification service</li>
                  <li>Associated SDKs, libraries, and documentation</li>
                  <li>Dashboard and analytics tools</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring your use complies with applicable laws and regulations</li>
                  <li>Not using the service for any unlawful or prohibited activities</li>
                  <li>Not attempting to gain unauthorized access to our systems</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may not use our service to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Transmit any unlawful, harassing, defamatory, or inappropriate content</li>
                  <li>Send spam, unsolicited messages, or violate anti-spam laws</li>
                  <li>Distribute malware, viruses, or other harmful code</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Violate any applicable local, state, national, or international law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While we strive to provide continuous service availability, we do not guarantee that the 
                  service will be available at all times. We may experience downtime due to maintenance, 
                  upgrades, or unforeseen technical issues.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Billing and Payment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For paid services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Fees are charged monthly in advance</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>We reserve the right to change pricing with 30 days notice</li>
                  <li>Failure to pay may result in service suspension</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Data and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                  use of the service, to understand our practices regarding the collection and use of your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pusher shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible 
                  losses resulting from your use of the service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any 
                  reason whatsoever, including without limitation if you breach the Terms of Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Questions about the Terms of Service should be sent to us at:
                </p>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Pusher Ltd</p>
                  <p className="text-muted-foreground">Email: legal@pusher.com</p>
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

export default TermsOfService;