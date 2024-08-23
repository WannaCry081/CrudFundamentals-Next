"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EmployeeSchema, type Employee } from "@/schemas";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { When } from "react-if";

interface EmployeeFormProps {
  isPending: boolean;
  initialData?: Employee;
  onSubmit: (values: Employee) => void;
  onDelete?: () => void;
}

const EmployeeForm = ({
  isPending,
  initialData,
  onSubmit,
  onDelete,
}: EmployeeFormProps) => {
  const form = useForm<Employee>({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: initialData! || {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <When condition={!!initialData}>
          <Button variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </When>

        <Button type="submit" disabled={isPending}>
          {initialData ? "Update" : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default EmployeeForm;
