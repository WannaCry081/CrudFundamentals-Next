"use client";
import { useEmployeeQuery } from "@/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import StatusState from "./StatusState";

interface EmployeeDetailsProps {
  id: string;
}

const EmployeeDetails = ({ id }: EmployeeDetailsProps) => {
  const { data, isLoading, isError } = useEmployeeQuery(id);

  if (isLoading) {
    return <StatusState.LoadingState.EmployeeDetail />;
  }

  if (isError) {
    return <StatusState.ErrorState />;
  }

  if (!data) {
    return <StatusState.NoContentState />;
  }

  return (
    <>
      <Avatar className="size-20 shadow-md">
        <AvatarImage alt="Profile" />
        <AvatarFallback className="text-indigo-600 text-2xl font-semibold">
          AC
        </AvatarFallback>
      </Avatar>

      <span className="py-2 text-center">
        <h1 className="text-xl font-semibold">
          {data.firstName} {data.lastName}
        </h1>
        <h2 className="text-sm text-neutral-600 font-medium">
          {data.position}
        </h2>
      </span>

      <div className="bg-background p-4 rounded-lg w-full mt-8">
        <h3 className="text-indigo-600 text-lg font-semibold mb-2">
          Employee Details
        </h3>
        <span className="flex space-x-4 text-sm sm:justify-between">
          <div className="w-28 font-medium space-y-1.5 sm:w-1/2">
            <p>Username: </p>
            <p>Full Name: </p>
            <p>Email Address: </p>
            <p>Position: </p>
            <p>Phone Number: </p>
          </div>
          <div className="flex-1 space-y-1.5 truncates">
            <p>{data.userName}</p>
            <p>
              {data.firstName} {data.lastName}
            </p>
            <p>{data.email}</p>
            <p>{data.position}</p>
            <p>{data.phoneNumber}</p>
          </div>
        </span>
      </div>
    </>
  );
};

export default EmployeeDetails;
