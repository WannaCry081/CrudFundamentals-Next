"use client";
import { EmployeeForm } from "@/components/employee";
import { BackButton } from "@/components/shared";
import { useCreateEmployeeQuery } from "@/hooks";

export default function Page() {
  const { isPending, createEmployee } = useCreateEmployeeQuery();

  return (
    <article>
      <section className="my-4">
        <BackButton />
      </section>

      <section className="mb-4">
        <h1 className="text-2xl font-bold text-indigo-500">Add new Employee</h1>
      </section>

      <EmployeeForm isPending={isPending} onSubmit={createEmployee} />
    </article>
  );
}
