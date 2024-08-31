"use server";
import { EmployeeService } from "@/services";

const DestroyEmployeeAction = async (id: string) => {
  try {
    const response = await EmployeeService.destroy(id);
    if (response.status !== 200) {
      throw new Error("Error occurred during employee creation");
    }

    return response.data;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export default DestroyEmployeeAction;
