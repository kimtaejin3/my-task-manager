import { supabase } from "../utils/supabase";

import type { Board } from "../types/board";

export const getBoardList = async () => {
  const { data, error } = await supabase.from("board").select("*");
  if (error) throw error;

  //TODO: as 고치기
  return data as Board[];
};

//TODO: Omit<Board, "id"> -> CreateBoardRequestType 이런식으로 수정. 다른 부분도 마찬가지

export const createBoard = async (board: Omit<Board, "id">) => {
  const { data, error } = await supabase
    .from("board")
    .insert(board as never)
    .select()
    .single();
  if (error) throw error;

  return data as Board;
};
