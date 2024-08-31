import * as z from "zod";

export const EmployeeSchema = z.object({
  userName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  position: z.string(),
  phoneNumber: z.string(),
});

export type EmployeeSchemaType = z.infer<typeof EmployeeSchema>;
