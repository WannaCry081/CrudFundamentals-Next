"use client";
import Link from "next/link";
import { useEmployeesQuery } from "@/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import StatusState from "./StatusState";

interface EmployeeListProps {
  filter: string;
}

const EmployeeList = ({ filter }: EmployeeListProps) => {
  const { data, isLoading, isError } = useEmployeesQuery();

  if (isLoading) {
    return <StatusState.LoadingState.EmployeeList />;
  }

  if (isError) {
    return <StatusState.ErrorState />;
  }

  if (!data || data.length === 0) {
    return <StatusState.NoContentState />;
  }

  const filteredEmployees = data.filter(
    (employee) =>
      employee.position.toLocaleLowerCase() === filter || filter === "all"
  );

  if (filteredEmployees.length === 0) {
    return <StatusState.NoContentState />;
  }

  return (
    <ul className="space-y-2">
      {filteredEmployees.map(({ id, userName, email }) => (
        <li
          key={id}
          className="group rounded-lg p-4 bg-white transition-all ease-in hover:bg-indigo-500"
        >
          <Link href={`employees/${id}`} className="w-full">
            <div className="flex items-center space-x-4">
              <Avatar className="inline-flex items-center justify-center rounded-full bg-indigo-500 size-10 group-hover:bg-background">
                <AvatarImage />
                <AvatarFallback className="group-hover:text-indigo-500 text-white">
                  AC
                </AvatarFallback>
              </Avatar>
              <span className="flex-1">
                <h5 className="text-sm font-semibold group-hover:text-background">
                  {userName}
                </h5>
                <p className="text-xs text-neutral-400 group-hover:text-neutral-200">
                  {email}
                </p>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
