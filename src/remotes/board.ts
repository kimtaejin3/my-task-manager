import { supabase } from "../utils/supabase";

import type { Board } from "../types/board";

export const getBoardList = async () => {
  const { data, error } = await supabase.from("board").select("*");
  if (error) throw error;

  //TODO: as 고치기
  return data as Board[];
};

export const createBoard = async (board: Board) => {
  const { data, error } = await supabase
    .from("board")
    .insert(board as never)
    .select()
    .single();
  if (error) throw error;

  return data as Board;
};
