"use server";
import { EmployeeSchema, type EmployeeSchemaType } from "@/schemas";
import { EmployeeService } from "@/services";

const CreateEmployeeAction = async (values: EmployeeSchemaType) => {
  const { data, error, success } = EmployeeSchema.safeParse(values);

  if (!success) {
    throw new Error(
      "Invalid data: " + error.errors.map((e) => e.message).join(",")
    );
  }

  try {
    const response = await EmployeeService.create(data);

    if (response.status !== 201) {
      throw new Error("Error occurred during employee creation");
    }
    return response.data;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export default CreateEmployeeAction;
