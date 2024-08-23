import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { UpdateEmployeeAction } from "@/actions";
import { Employee } from "@/schemas";
import toast from "react-hot-toast";

const useUpdateEmployeeQuery = (id: string) => {
  const router = useRouter();
  const queryClient = new QueryClient();
  const [isPending, startTransition] = useTransition();

  const { mutate: updateEmployee } = useMutation({
    mutationFn: (values: Employee) => UpdateEmployeeAction(id, values),
    onSuccess: () => {
      startTransition(() => {
        queryClient.invalidateQueries({
          queryKey: ["employee", id],
          exact: true,
        });
      });
      router.push("/employees");
      toast.success("Successfully Updated Employee");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, isUpdatePending: isPending, updateEmployee };
};

export default useUpdateEmployeeQuery;
