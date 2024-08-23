"use server";
import { EmployeeSchema, type Employee } from "@/schemas";
import { EmployeeService } from "@/services";

const UpdateEmployeeAction = async (id: string, values: Employee) => {
  const { data, success, error } = EmployeeSchema.safeParse(values);

  if (!success) {
    throw new Error(
      "Invalid data: " + error.errors.map((error) => error.message).join(",")
    );
  }

  try {
    const response = await EmployeeService.update(id, data);
    if (response.status !== 200) {
      throw new Error("Error occurred in updating data");
    }

    return response.data;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export default UpdateEmployeeAction;
