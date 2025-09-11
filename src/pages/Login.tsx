import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Chrome } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-md mx-auto">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                <CardDescription>
                  Sign in to your Pusher account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Social Login */}
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

                {/* Email Login */}
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="bg-background"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="remember" className="rounded" />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                    <a href="#" className="text-sm text-accent hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Sign in
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-accent hover:underline font-medium">
                    Sign up
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;