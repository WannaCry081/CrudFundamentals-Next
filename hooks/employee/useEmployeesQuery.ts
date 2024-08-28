import type { Employee, Pagination } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { EmployeeService } from "@/services";

const useEmployeesQuery = (pagination: Pagination) => {
  const { data, error, isLoading, isError } = useQuery<Employee[]>({
    queryKey: ["employees"],
    queryFn: () => EmployeeService.list(pagination),
  });

  return { data, error, isLoading, isError };
};

export default useEmployeesQuery;
