"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn("github", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Sign in error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-3">
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Use your GitHub account to sign in
      </p>

      <Button
        onClick={handleSignIn}
        disabled={isLoading}
        className="w-full gap-2 cursor-pointer"
        size="lg"
        variant="default"
      >
        {isLoading ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Signing in...
          </>
        ) : (
          <>
            <Github className="h-5 w-5" />
            Sign in
          </>
        )}
      </Button>
    </div>
  );
}
