import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const StatusState = {
  LoadingState: {
    EmployeeForm: () => {
      return (
        <div className="p-4 sm:p-6 md:p-6 w-full min-h-svh flex items-center justify-center">
          <span className="border-2 border-indigo-500 border-t-transparent animate-spin size-10 rounded-full"></span>
        </div>
      );
    },

    EmployeeDetail: () => {
      return (
        <>
          <div className="rounded-full size-20 shadow-sm bg-white">
            <Skeleton className="size-20 rounded-full" />
          </div>

          <span className="py-2 space-y-2 flex flex-col items-center ">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-6 w-36" />
          </span>

          <div className="bg-background p-4 rounded-lg w-full mt-4 space-y-2">
            <Skeleton className="h-8" />
            <Skeleton className="h-48 w-full" />
          </div>
        </>
      );
    },

    EmployeeList: () => {
      return (
        <ul className="space-y-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="p-4 bg-white shadow-sm rounded-lg">
              <div className="flex items-center space-x-4 w-full">
                <Skeleton className="size-10 rounded-full" />
                <span className="space-y-2 flex-1">
                  <Skeleton className="min-w-max w-full max-w-64 h-4" />
                  <Skeleton className="w-36 h-4" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      );
    },
  },

  ErrorState: () => {
    return (
      <div className="w-full h-96 flex flex-col items-center justify-end text-center">
        <Image
          src="/svg/server_down.svg"
          height="200"
          width="200"
          alt="server down"
        />
        <h4 className="py-4 font-medium">Server is Down</h4>
      </div>
    );
  },

  NoContentState: () => {
    return (
      <div className="w-full h-96 flex flex-col items-center justify-end text-center">
        <Image src="/svg/no_data.svg" height="200" width="200" alt="no data" />
        <h4 className="py-4 font-medium">No Data Found</h4>
      </div>
    );
  },
};

export default StatusState;
