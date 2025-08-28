import { queryOptions } from "@tanstack/react-query";

import { getBoardList } from "../remotes/board";

export const boardListQueryOptions = queryOptions({
  queryKey: ["board-list"],
  queryFn: getBoardList,
});
