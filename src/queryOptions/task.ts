import { queryOptions } from "@tanstack/react-query";

import { getTaskList } from "../remotes/task";

export const taskListQueryOptions = (boardId: string) => {
  return queryOptions({
    queryKey: ["task-list", boardId],
    queryFn: () => getTaskList(boardId),
    select: (data) => {
      return data.tasks;
    },
  });
};
