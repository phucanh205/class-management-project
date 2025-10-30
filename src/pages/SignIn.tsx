import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic will be added later
    console.log("Sign in:", { email, password });
  };

  const handleGoogleSignIn = () => {
    // Google sign in logic will be added later
    console.log("Google sign in");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-muted relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-20 w-32 h-32 rounded-full bg-[hsl(var(--blue-accent))] opacity-80 animate-float" />
        <div className="absolute top-0 right-20 w-32 h-32 rounded-full bg-[hsl(var(--red-accent))] opacity-80 animate-float-delayed" />
        
        {/* Main content circle */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[hsl(var(--mint-green))] flex items-center justify-center animate-pulse-slow">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Manage</h2>
            <h2 className="text-4xl font-bold">Classes</h2>
          </div>
        </div>

        {/* Illustration placeholder */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center px-8">
          <div className="w-64 h-64 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--mint-green))] to-white rounded-3xl opacity-20" />
            <div className="absolute inset-8 flex items-center justify-center">
              <div className="w-full h-full bg-white/40 backdrop-blur-sm rounded-2xl" />
            </div>
          </div>
          <p className="text-lg font-medium text-foreground">
            Tạo, chỉnh sửa và theo dõi tiến trình học tập của từng lớp<br />chỉ với vài thao tác
          </p>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--mint-green))]" />
          <div className="w-3 h-3 rounded-full bg-border" />
          <div className="w-3 h-3 rounded-full bg-border" />
        </div>

        {/* Connecting dots pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-12 flex flex-col justify-center gap-8">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--blue-accent))]" />
              <div className="w-8 h-0.5 bg-muted-foreground/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-2">Sign in your Account</h1>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="User123@edu.vn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="User123@edu.vn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12"
              />
              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-muted-foreground hover:text-foreground">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90" size="lg">
              Sign in
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">Or sign in with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            className="w-full h-12 gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Don't have account ?{" "}
            <Link to="/signup" className="text-[hsl(var(--red-accent))] hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
