"use client";
import Link from "next/link";
import { Edit2Icon } from "lucide-react";
import { useEmployeesQuery } from "@/hooks";

const EmployeeList = () => {
  const { data, error, isLoading } = useEmployeesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data || data!.length === 0) {
    return <div>No employee found...</div>;
  }

  return (
    <div>
      <ul>
        {data?.map(({ id, firstName, lastName }) => (
          <li key={id} className="flex items-center">
            <Link href={`employees/${id}`}>
              {firstName} {lastName}
            </Link>
            <Link href={`employees/${id}/edit`}>
              <Edit2Icon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
