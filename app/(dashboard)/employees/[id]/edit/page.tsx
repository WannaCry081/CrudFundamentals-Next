"use client";
import EmployeeForm from "@/components/Employee/EmployeeForm";
import {
  useUpdateEmployeeQuery,
  useEmployeeQuery,
  useDeleteEmployeeQuery,
} from "@/hooks";
import { Employee } from "@/schemas";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const id = params.id;

  const { data, error, isLoading } = useEmployeeQuery(id);
  const { isUpdatePending, updateEmployee } = useUpdateEmployeeQuery(id);
  const { isDestroyPending, destroyEmployee } = useDeleteEmployeeQuery(id);

  const onUpdateSubmit = (values: Employee) => updateEmployee(values);
  const onDeleteSubmit = () => destroyEmployee(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Not Found</div>;
  }

  return (
    <section>
      <h1>Edit Employees</h1>

      <EmployeeForm
        isPending={isUpdatePending || isDestroyPending}
        initialData={data}
        onSubmit={onUpdateSubmit}
        onDelete={onDeleteSubmit}
      />
    </section>
  );
}
