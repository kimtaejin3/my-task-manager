import { http } from "../utils/http";

import type { Task } from "../types/task";

type taskListResponse = {
  id: number;
  tasks: Task[];
};

export const getTaskList = async (boardId: string) => {
  return http.get<taskListResponse>(`/board-${boardId}.json`);
};
