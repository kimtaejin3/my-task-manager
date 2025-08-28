import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createBoard } from "../remotes/board";

import type { Board } from "../types/board";

export default function useAddNewBoard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-board"],
    mutationFn: (board: Board) => createBoard(board),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["board-list"],
      });
    },
  });
}
