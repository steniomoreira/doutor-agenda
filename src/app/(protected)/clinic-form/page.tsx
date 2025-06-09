import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { DialogClinicForm } from "./_components/dialog-clinic-form";

async function ClinicForm() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.clinic) redirect("/dashboard");
  return <DialogClinicForm />;
}

export default ClinicForm;
