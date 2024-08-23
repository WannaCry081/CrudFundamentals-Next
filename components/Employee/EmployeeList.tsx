"use client";
import { useEmployeesQuery } from "@/hooks";
import Link from "next/link";

const EmployeeList = () => {
  const { data, error, isLoading } = useEmployeesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data && data!.length === 0) {
    return <div>No resource found</div>;
  }

  return (
    <div>
      <ul>
        {data?.map(({ id, firstName, lastName }) => (
          <li key={id}>
            <Link href={`employees/${id}`}>
              {firstName} {lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
