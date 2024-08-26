import { Employee } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { EmployeeService } from "@/services";

const useEmployeesQuery = () => {
  const { data, error, isLoading, isError } = useQuery<Employee[]>({
    queryKey: ["employees"],
    queryFn: () => EmployeeService.list(),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: 1000 * 60,
    refetchIntervalInBackground: true,
  });

  return { data, error, isLoading, isError };
};

export default useEmployeesQuery;
