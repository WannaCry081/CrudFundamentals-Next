import { Employee } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { EmployeeService } from "@/services";

const useEmployeesQuery = () => {
  const { data, error, isLoading } = useQuery<Employee[]>({
    queryKey: ["employees"],
    queryFn: () => EmployeeService.list(),
  });

  return { data, error, isLoading };
};

export default useEmployeesQuery;
