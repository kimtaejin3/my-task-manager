import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTask } from "../remotes/task";

import type { Task } from "../types/task";

export default function useUpdateTask({ boardId }: { boardId: number | null }) {
  const queryClient = useQueryClient();

  if (!boardId) throw new Error("BoardId is required");

  return useMutation({
    mutationKey: ["update-task"],
    //TODO: 타입
    mutationFn: (task: { id: number } & Partial<Omit<Task, "id">>) =>
      updateTask(boardId, task),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["task-list", boardId],
      });
    },
  });
}
