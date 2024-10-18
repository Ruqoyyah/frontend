import {
  CreateEvent,
  CreateSport,
  EditDto,
  LoginDto,
  SignUpDto,
} from "@/models/index.model";
import HTTPClient from "../http_instance";

export default class AdminServices {
  static async login(data: LoginDto) {
    const response = await HTTPClient.post("/user/signin", data);
    return response.data;
  }
  static async getUserbyType(userType: string) {
    const response = await HTTPClient.get(
      `/user/get_all_User_by_type/${userType}`
    );
    return response.data;
  }
  static async getUserbySport(sportId: number) {
    const response = await HTTPClient.get(
      `/user/get_user_by_sportid/${sportId}`
    );
    return response.data;
  }
  static async getUpcomingEventsBySport(sportId: number) {
    const response = await HTTPClient.get(
      `sportevents/get_upcoming_eventsbysport/${sportId}`
    );
    return response.data;
  }
  static async getAllSports() {
    const response = await HTTPClient.get(`/sport/get_all`);
    return response.data;
  }
  static async getAllEvents() {
    const response = await HTTPClient.get(`/sportevents/get_allevents`);
    return response.data;
  }
  static async getAllUpcomingEvents() {
    const response = await HTTPClient.get(`/sportevents/get_upcoming_events`);
    return response.data;
  }
  static async getAllPastEvents() {
    const response = await HTTPClient.get(`/sportevents/get_past_events`);
    return response.data;
  }
  static async CreateUser(data: SignUpDto) {
    const response = await HTTPClient.post(`/user/create_student`, data);
    return response.data;
  }
  static async editUser(data: EditDto, id: number) {
    const response = await HTTPClient.put(`/user/update_user/${id}`, data);
    return response.data;
  }
  static async editEvent(data: CreateEvent, id: number) {
    const response = await HTTPClient.put(
      `/sportevents/update_event/${id}`,
      data
    );
    return response.data;
  }
  static async editSport(data: CreateSport, id: number) {
    const response = await HTTPClient.put(`/sport/update_sport/${id}`, data);
    return response.data;
  }
  static async CreateSport(data: CreateSport) {
    const response = await HTTPClient.post(`/sport/create_sport`, data);
    return response.data;
  }
  static async CreateEvent(data: CreateEvent) {
    const response = await HTTPClient.post(`/sportevents/create_event`, data);
    return response.data;
  }
  static async CreateAdminUser(data: SignUpDto) {
    const response = await HTTPClient.post(`/user/create_super_admin`, data);
    return response.data;
  }
  static async getUsers() {
    const response = await HTTPClient.get(`/users`);
    return response.data;
  }
  static async getSingleUser(id: number) {
    const response = await HTTPClient.get(`/users/${id}`);
    return response.data;
  }
  static async getSingleEvent(id: number) {
    const response = await HTTPClient.get(`/sportevents/get_event_by_id/${id}`);
    return response.data;
  }
  static async deleteSingleUser(id: number) {
    const response = await HTTPClient.delete(`/users/${id}`);
    return response.data;
  }
  static async deleteSingleEvent(id: number) {
    const response = await HTTPClient.delete(`/sportevents/delete_event/${id}`);
    return response.data;
  }
  static async deleteSport(id: number) {
    const response = await HTTPClient.delete(`/sport/delete_sport/${id}`);
    return response.data;
  }
  static async deleteStudent(id: number) {
    const response = await HTTPClient.delete(`/user/delete_user/${id}`);
    return response.data;
  }
}
