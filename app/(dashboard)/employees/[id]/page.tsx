import EmployeeDetails from "@/components/Employee/EmployeeDetails";

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
