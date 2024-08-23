import { Employee } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { EmployeeService } from "@/services";

const useEmployeeQuery = (id: string) => {
  const { data, error, isLoading } = useQuery<Employee>({
    queryKey: ["employee", id],
    queryFn: () => EmployeeService.retrieve(id),
    enabled: !!id,
  });

  return { data, error, isLoading };
};

export default useEmployeeQuery;
