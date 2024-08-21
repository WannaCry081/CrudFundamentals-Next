import * as z from "zod";

export const EmployeeSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export type Employee = z.infer<typeof EmployeeSchema>;
