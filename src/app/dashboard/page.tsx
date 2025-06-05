import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SignOutButton from "../authentication/components/sign-out";

async function DashboadPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  return (
    <div>
      <h1>{`Olá ${session.user.name}`}</h1>

      <SignOutButton />
    </div>
  );
}

export default DashboadPage;
