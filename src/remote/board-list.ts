import { http } from "../utils/http";

import type { Board } from "../types";

export const getBoardList = () => {
  return http.get<Board[]>("/list.json");
};
