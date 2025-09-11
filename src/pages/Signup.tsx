import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Chrome, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Signup = () => {
  const features = [
    "100,000 messages/month on free plan",
    "Unlimited channels",
    "SSL encryption",
    "24/7 support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Features */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl font-bold mb-4">
                Start building with
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Pusher</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                Join thousands of developers building real-time applications with our reliable infrastructure.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Signup Form */}
            <div className="order-1 lg:order-2">
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
                  <CardDescription>
                    Get started with Pusher for free
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Social Signup */}
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                      <Github className="h-4 w-4 mr-2" />
                      Continue with GitHub
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Chrome className="h-4 w-4 mr-2" />
                      Continue with Google
                    </Button>
                  </div>

                  <div className="relative">
                    <Separator />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                      OR
                    </div>
                  </div>

                  {/* Email Signup */}
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstname">First name</Label>
                        <Input
                          id="firstname"
                          placeholder="John"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastname">Last name</Label>
                        <Input
                          id="lastname"
                          placeholder="Doe"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        className="bg-background"
                      />
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="terms" className="rounded mt-1" />
                      <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                        I agree to the{" "}
                        <a href="/terms-of-service" className="text-accent hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="text-accent hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>
                    <Button type="submit" variant="hero" className="w-full">
                      Create account
                    </Button>
                  </form>

                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <a href="/login" className="text-accent hover:underline font-medium">
                      Sign in
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;