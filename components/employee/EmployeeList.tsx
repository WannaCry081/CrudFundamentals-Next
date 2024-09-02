"use client";
import Link from "next/link";
import { useEmployeesQuery } from "@/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import StatusState from "./StatusState";

interface EmployeeListProps {
  selectedPosition: string;
}

const EmployeeList = ({ selectedPosition }: EmployeeListProps) => {
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
      employee.position.toLocaleLowerCase() === selectedPosition ||
      selectedPosition === "all"
  );

  if (filteredEmployees.length === 0) {
    return <StatusState.NoContentState />;
  }

  return (
    <ul className="space-y-2">
      {filteredEmployees.map(({ id, userName, email }) => (
        <li
          key={id}
          className="group rounded-lg p-4 bg-white transition-all ease-in hover:bg-indigo-600"
        >
          <Link href={`employees/${id}`} className="w-full">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Profile" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <span className="flex-1">
                <h2 className="text-sm font-semibold group-hover:text-background">
                  {userName}
                </h2>
                <p className="text-xs text-neutral-500  group-hover:text-gray-50">
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
