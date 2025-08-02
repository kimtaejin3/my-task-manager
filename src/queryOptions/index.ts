import { queryOptions } from "@tanstack/react-query";

import { getBoardList } from "../remote/board-list";

export const boardListQueryOptions = queryOptions({
  queryKey: ["board-list"],
  queryFn: getBoardList,
});
