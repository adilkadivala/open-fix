"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginButton() {
  const { data: session } = useSession();

  if (!session)
    return <Button onClick={() => signIn("github")}>Login with GitHub</Button>;

  return (
    <div className="flex items-center gap-3">
      <p className="text-sm">Hi {session.user?.name}</p>
      <Button variant="destructive" onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  );
}
