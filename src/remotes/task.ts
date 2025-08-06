import { http } from "../utils/http";

import type { Task } from "../types/task";

type taskListResponse = {
  id: number;
  tasks: Task[];
};

export const getTaskList = () => {
  return http.get<taskListResponse>("/board-1.json");
};
