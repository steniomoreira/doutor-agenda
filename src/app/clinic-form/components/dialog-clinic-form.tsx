"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Hospital, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { createClinic } from "@/actions/create-clinic";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const clinicSchema = z.object({
  name: z.string().trim().min(1, { message: "O nome é obrigatório" }),
});

export function DialogClinicForm() {
  const route = useRouter();

  const form = useForm<z.infer<typeof clinicSchema>>({
    resolver: zodResolver(clinicSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(data: z.infer<typeof clinicSchema>) {
    try {
      await createClinic(data.name);

      toast.success("Clínica criada com sucesso!");
      route.push("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar a clínica");
    }
  }

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Adicionar clínica</DialogTitle>
              <DialogDescription>
                Adicione uma clínica para continuar
              </DialogDescription>
            </DialogHeader>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome da clínica" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <Loader2 className="mr-1 h-2 w-2 animate-spin" />
                ) : (
                  <Hospital className="mr-1 h-2 w-2" />
                )}
                Criar clínica
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
