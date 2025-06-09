import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  PageAction,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/page-container";
import { auth } from "@/lib/auth";

import AddDoctorButton from "./_components/add-doctor-button";

const DoctorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/authentication");

  if (!session.user.clinic) redirect("/clinic-form");

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>Gerencie os médicos de sua clínia</PageDescription>
        </PageHeaderContent>

        <PageAction>
          <AddDoctorButton />
        </PageAction>
      </PageHeader>
      <PageContent>medicos</PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
