import {
  CreateAccessPlanDto,
  CreateFaqDto,
  CreateRoleDto,
  CreateUserDto,
  EditRoleDto,
  LoginDto,
} from "@/models/index.model";
import HTTPClient from "../http_instance";

export default class AdminServices {
  static async CreateRole(data: CreateRoleDto) {
    const response = await HTTPClient.post("/accesscontrol/role/create", data);
    return response.data;
  }
  static async EditRole(id: number, data: EditRoleDto) {
    const response = await HTTPClient.put(`/accesscontrol/role/${id}`, data);
    return response.data;
  }
  static async deleteRole(id: number) {
    const response = await HTTPClient.delete(`/accesscontrol/role/${id}`);
    return response.data;
  }
  static async getPermissions() {
    const response = await HTTPClient.get("/accesscontrol/permissions");
    return response.data;
  }
  static async getRoles() {
    const response = await HTTPClient.get("/accesscontrol/roles");
    return response.data;
  }
  static async CreateFaq(data: CreateFaqDto) {
    const response = await HTTPClient.post("/faq/create", data);
    return response.data;
  }
  static async login(data: LoginDto) {
    const response = await HTTPClient.post("/auth/admin/login", data);
    return response.data;
  }
  static async getFaqs() {
    const response = await HTTPClient.get("/faq");
    return response.data;
  }
  static async deleteFaq(id: number) {
    const response = await HTTPClient.delete(`/faq/${id}`);
    return response.data;
  }
  static async CreateAccessPlans(data: CreateAccessPlanDto) {
    const response = await HTTPClient.post(`/accessplan/create`, data);
    return response.data;
  }
  static async getAccessPlans() {
    const response = await HTTPClient.get("/accessplan");
    return response.data;
  }
  static async editAccessPlan(id: number, data: CreateAccessPlanDto) {
    const response = await HTTPClient.put(`/accessplan/${id}`, data);
    return response.data;
  }
  static async deleteAccessPlan(id: number) {
    const response = await HTTPClient.delete(`/accessplan/${id}`);
    return response.data;
  }
  static async CreateUser(data: CreateUserDto) {
    const response = await HTTPClient.post(`/users/create`, data);
    return response.data;
  }
  static async getUsers() {
    const response = await HTTPClient.get(`/users`);
    return response.data;
  }
  static async getDashboardCount() {
    const response = await HTTPClient.get(`/dashboard`);
    return response.data;
  }
  static async getSubscribers() {
    const response = await HTTPClient.get(`/subscriber`);
    return response.data;
  }
  static async getFilteredSubscribers(pageSize: number, index: number) {
    const response = await HTTPClient.get(
      `/subscriber/filter?${pageSize && `pageSize=${pageSize}`}&${
        index && `pageIndex=${index}`
      }`
    );
    return response.data;
  }
  static async getSingleUser(id: number) {
    const response = await HTTPClient.get(`/users/${id}`);
    return response.data;
  }
  static async deleteSingleUser(id: number) {
    const response = await HTTPClient.delete(`/users/${id}`);
    return response.data;
  }
}
