import { Skeleton } from "../ui/skeleton";

const EmployeeDetailsState = {
  LoadingState: () => {
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

  ErrorState: () => {
    return <div>Loading...</div>;
  },

  NotFoundState: () => {
    return <div>Loading...</div>;
  },
};

export default EmployeeDetailsState;
