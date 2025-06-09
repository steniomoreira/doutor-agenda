import { headers } from "next/headers";
import { redirect } from "next/navigation";

import SignOutButton from "@/app/authentication/_components/sign-out";
import { auth } from "@/lib/auth";

async function DashboadPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/authentication");

  if (!session.user.clinic) redirect("/clinic-form");

  return (
    <div>
      <h1>{`Olá ${session.user.name}`}</h1>

      <SignOutButton />
    </div>
  );
}

export default DashboadPage;
