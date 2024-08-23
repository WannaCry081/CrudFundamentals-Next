import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useMutation, QueryClient } from "@tanstack/react-query";
import { CreateEmployee } from "@/actions";
import { toast } from "react-hot-toast";

const useCreateEmployeeQuery = () => {
  const router = useRouter();
  const queryClient = new QueryClient();
  const [isPending, startTransition] = useTransition();

  const { mutate: createEmployee } = useMutation({
    mutationFn: CreateEmployee,
    onSuccess: () => {
      startTransition(() => {
        queryClient.invalidateQueries({
          queryKey: ["employees"],
          exact: true,
        });
      });
      router.push("/employees");
      toast.success("Successfully Added Employee.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isPending, createEmployee };
};

export default useCreateEmployeeQuery;
