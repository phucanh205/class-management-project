import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="mb-4 text-4xl font-bold">Class Management System</h1>
        <p className="text-xl text-muted-foreground">Welcome to the class management platform</p>
        <div className="flex gap-4 justify-center">
          <Link to="/signin">
            <Button size="lg">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button size="lg" variant="outline">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
