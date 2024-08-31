import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { UpdateEmployeeAction } from "@/actions";
import { EmployeeSchemaType } from "@/schemas";
import { AlertDialog } from "@/components/shared";

const useUpdateEmployeeQuery = (id: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isPending, startTransition] = useTransition();

  const { mutate: updateEmployee } = useMutation({
    mutationFn: (values: EmployeeSchemaType) =>
      UpdateEmployeeAction(id, values),
    onSuccess: () => {
      startTransition(() => {
        queryClient.invalidateQueries({ queryKey: ["employee", id] });
        queryClient.invalidateQueries({ queryKey: ["employees"] });
      });
      router.replace("/employees");
      AlertDialog.Success("Successfully Updated Employee");
    },
    onError: (error) => {
      AlertDialog.Error(error.message);
    },
  });

  return { isPending, isUpdatePending: isPending, updateEmployee };
};

export default useUpdateEmployeeQuery;
