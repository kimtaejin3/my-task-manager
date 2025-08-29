import { keepPreviousData, queryOptions } from "@tanstack/react-query";

import { getTaskList } from "../remotes/task";

export const taskListQueryOptions = (boardId: number) => {
  return queryOptions({
    queryKey: ["task-list", boardId],
    queryFn: () => getTaskList({ boardId }),
    placeholderData: keepPreviousData,
  });
};
