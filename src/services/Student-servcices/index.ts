import HTTPClient from "../http_instance";

export default class StudentServices {
  static async EnrollSport(userId: number, sportId: number) {
    const response = await HTTPClient.put(
      `/user/update_user_with_sport/${userId}/${sportId}`,
      undefined
    );
    return response.data;
  }
  static async ModifyUserSport(userId: number, sportId: number) {
    const response = await HTTPClient.put(
      `/user/update_user/${userId}/${sportId}`,
      undefined
    );
    return response.data;
  }
  static async RemoveSportFromStudent(userId: number, sportId: number) {
    const response = await HTTPClient.delete(
      `/user/delete_sportByUser/${userId}/${sportId}`
    );
    return response.data;
  }
  static async GetUserById(id: number) {
    const response = await HTTPClient.get(`/user/get_user_by_id/${id}`);
    return response.data;
  }
  static async GetEventsByUserId(id: number) {
    const response = await HTTPClient.get(
      `/sportevents/get_event_byuserid/${id}`
    );
    return response.data;
  }
  static async GetUpcomingEventsByUserId(id: number) {
    const response = await HTTPClient.get(
      `/sportevents/get_Upcoming_event_byuserid/${id}`
    );
    return response.data;
  }
  static async GetPastEventsByUserId(id: number) {
    const response = await HTTPClient.get(
      `/sportevents/get_past_event_byuserid/${id}`
    );
    return response.data;
  }
}
