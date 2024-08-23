import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { EmployeeService } from "@/services";
import toast from "react-hot-toast";

const useDestroyEmployeeQuery = (id: string) => {
  const router = useRouter();
  const queryClient = new QueryClient();
  const [isPending, startTransition] = useTransition();

  const { mutate: destroyEmployee } = useMutation({
    mutationFn: EmployeeService.destroy,
    onSuccess: () => {
      startTransition(() => {
        queryClient.invalidateQueries({
          queryKey: ["employee", id],
          exact: true,
        });
      });
      router.push("/employees");
      toast.success("Successfully Deleted Employee");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, isDestroyPending: isPending, destroyEmployee };
};

export default useDestroyEmployeeQuery;
