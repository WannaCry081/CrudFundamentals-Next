import { axiosInstance } from "@/config/axios.config";
import { EmployeeSchemaType } from "@/schemas";

const EmployeeService = {
  retrieve: (id: string) =>
    axiosInstance.get(`employees/${id}`).then((res) => res.data),
  list: () => axiosInstance.get("employees").then((res) => res.data),
  create: (request: EmployeeSchemaType) =>
    axiosInstance.post("employees", request),
  update: (id: string, request: EmployeeSchemaType) =>
    axiosInstance.put(`employees/${id}`, request),
  destroy: (id: string) => axiosInstance.delete(`employees/${id}`),
};

export default EmployeeService;
