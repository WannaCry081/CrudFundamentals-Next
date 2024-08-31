import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertDialog } from "@/components/shared";
import { DestroyEmployeeAction } from "@/actions";

const useDestroyEmployeeQuery = (id: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isPending, startTransition] = useTransition();

  const { mutate: destroyEmployee } = useMutation({
    mutationFn: () => DestroyEmployeeAction(id),
    onSuccess: () => {
      startTransition(() => {
        queryClient.invalidateQueries({ queryKey: ["employee", id] });
        queryClient.invalidateQueries({ queryKey: ["employees"] });
      });
      router.replace("/employees");
      AlertDialog.Success("Successfully Deleted Employee");
    },
    onError: (error) => {
      AlertDialog.Error(error.message);
    },
  });

  return { isPending, isDestroyPending: isPending, destroyEmployee };
};

export default useDestroyEmployeeQuery;
