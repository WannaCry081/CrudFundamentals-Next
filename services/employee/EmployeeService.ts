import { axiosInstance } from "@/config/axios.config";
import type { EmployeeSchemaType } from "@/schemas";
import type { Pagination } from "@/types";

const EmployeeService = {
  retrieve: (id: string) =>
    axiosInstance.get(`employees/${id}`).then((res) => res.data),
  list: (pagination: Pagination) =>
    axiosInstance
      .get("employees", {
        params: {
          _limit: pagination.limit,
          _page: pagination.page,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data;
      }),
  create: (request: EmployeeSchemaType) =>
    axiosInstance.post("employees", request),
  update: (id: string, request: EmployeeSchemaType) =>
    axiosInstance.put(`employees/${id}`, request),
  destroy: (id: string) => axiosInstance.delete(`employees/${id}`),
};

export default EmployeeService;
