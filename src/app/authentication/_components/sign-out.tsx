"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

function SignOutButton() {
  const route = useRouter();

  const signOut = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          route.push("/authentication");
        },
      },
    });
  };

  return <Button onClick={signOut}>Sair</Button>;
}

export default SignOutButton;
