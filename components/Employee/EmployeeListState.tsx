import { Skeleton } from "../ui/skeleton";

const EmployeeListState = {
  LoadingState: () => {
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

  ErrorState: () => {
    return <div>Error...</div>;
  },

  NoContentState: () => {
    return <div>No Employees Found...</div>;
  },
};

export default EmployeeListState;
