import { http } from "../utils/http";

import type { Task } from "../types/task";

type taskListResponse = {
  id: number;
  tasks: Task[];
};

export const getTaskList = (boardId: string) =>
  http.get<taskListResponse>(`/board-${boardId}.json`);
