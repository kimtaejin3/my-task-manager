import { getBoardList } from "../remote/board-list";

export const getBoardListQueryOptions = () => {
  return {
    queryKey: ["board-list"],
    queryFn: getBoardList,
  };
};
