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
    const response = await HTTPClient.put(
      `/user/delete_sportByUser/${userId}/${sportId}`,
      undefined
    );
    return response.data;
  }
  static async GetUserById(id: number) {
    const response = await HTTPClient.get(`/user/get_user_by_id/${id}`);
    return response.data;
  }
}
