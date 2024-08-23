"use client";
import { useEmployeeQuery } from "@/hooks";

interface EmployeeDetailsProps {
  id: string;
}

const EmployeeDetails = ({ id }: EmployeeDetailsProps) => {
  const { data, error, isLoading } = useEmployeeQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Resource not found...</div>;
  }

  return (
    <div>
      <p>
        {data.firstName} {data.lastName}
      </p>
    </div>
  );
};

export default EmployeeDetails;
