"use client";
import { EmployeeForm } from "@/components/employee";
import { useCreateEmployeeQuery } from "@/hooks";
import { Employee } from "@/schemas";

export default function Page() {
  const { isPending, createEmployee } = useCreateEmployeeQuery();
  const onSubmit = (values: Employee) => createEmployee(values);

  return (
    <section>
      <h1>Create Employees</h1>

      <EmployeeForm isPending={isPending} onSubmit={onSubmit} />
    </section>
  );
}
