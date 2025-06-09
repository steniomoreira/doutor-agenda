import { Plus } from "lucide-react";

import {
  PageAction,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/page-container";
import { Button } from "@/components/ui/button";

const DoctorsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>Gerencie os médicos de sua clínia</PageDescription>
        </PageHeaderContent>

        <PageAction>
          <Button>
            <Plus />
            Adicionar médico
          </Button>
        </PageAction>
      </PageHeader>
      <PageContent>medicos</PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
