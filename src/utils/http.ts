import axios, { type AxiosRequestConfig } from "axios";

const SERVER_URL =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/task-manager";

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
});

export const http = {
  get: async function get<Response = unknown>(
    url: string,
    options: AxiosRequestConfig = {}
  ) {
    const res = await axiosInstance.get<Response>(url, options);
    return res.data;
  },
};
