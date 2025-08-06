import { queryOptions } from "@tanstack/react-query";

import { getTaskList } from "../remotes/task";

export const taskListQueryOptions = queryOptions({
  queryKey: ["task-list"],
  queryFn: getTaskList,
  select: (data) => {
    return data.tasks;
  },
});
