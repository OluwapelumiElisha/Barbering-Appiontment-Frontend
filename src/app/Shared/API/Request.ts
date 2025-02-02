import axios, { AxiosInstance } from "axios";

const baseURL: string = "http://localhost:4000/api/v1/";

// Public requests (no authentication required)
export const publicRequest: AxiosInstance = axios.create({
  baseURL,
});

// Authenticated requests (requires token)
export const UserRequest = (): AxiosInstance => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
