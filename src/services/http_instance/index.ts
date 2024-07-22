import CookieManager from "@/utils/cookiemanager";
import axios, { HeadersDefaults, AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({
  baseURL,
});

export function getJWT() {
  if (typeof window !== "undefined") {
    let token = CookieManager.getCookie("jwt");
    if (token?.charAt(0) === '"' && token?.charAt(token?.length - 1) === '"') {
      token = token?.substring(1, token?.length - 2);
    }
    // token?.replace(/^"(.*)"$/, '$1');
    // console.log(token?.split('"'))
    return "Bearer " + token;
  }
  return "";
}

class HTTPClient {
  static async get(endpoint: string) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };

    const response = await instance.get(endpoint, { headers });
    return response;
  }

  static async post(endpoint: string, data: any) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      //   "Access-Control-Allow-Headers":""
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };

    const response = await instance.post(endpoint, data, { headers });
    return response;
  }

  static async delete(endpoint: string) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };
    const response = await instance.delete(endpoint, { headers });
    return response;
  }

  static async put(endpoint: string, data: any) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };

    const response = await instance.put(endpoint, data, { headers });
    return response;
  }

  static async formDataPost(endpoint: string, data: any) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Content-Type": "multipart/form", //this is not the correct content type please change it
      Authorization: getJWT(),
    };

    const response = await instance.post(endpoint, data, { headers });
    return response;
  }

  static async patch(endpoint: string) {
    const response = await instance.patch(endpoint);
    return response;
  }
}
export default HTTPClient;
