import { useRouter } from "nextjs-toploader/app";
import { useTransition } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateEmployeeAction } from "@/actions";
import { AlertDialog } from "@/components/shared";

const useCreateEmployeeQuery = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isPending, startTransition] = useTransition();

  const { mutate: createEmployee } = useMutation({
    mutationFn: CreateEmployeeAction,
    onSuccess: () => {
      startTransition(() => {
        queryClient.invalidateQueries({
          queryKey: ["employees"],
          exact: true,
        });
      });
      router.replace("/employees");
      AlertDialog.Success("Successfully Added Employee.");
    },
    onError: (error) => {
      AlertDialog.Error(error.message);
    },
  });

  return { isPending, createEmployee };
};

export default useCreateEmployeeQuery;
