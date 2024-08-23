import { EmployeeDetails } from "@/components/employee";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const id = params.id;

  return (
    <div>
      <EmployeeDetails id={id} />
    </div>
  );
}
