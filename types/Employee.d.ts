import { PositionType } from "@/types/EmployeeEnum";

export type Employee = {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  position: PositionType;
  phoneNumber: string;
};

export type UpdateEmployee = {
  userName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};
