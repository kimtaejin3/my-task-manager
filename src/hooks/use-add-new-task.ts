import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createTask } from "../remotes/task";

import type { TaskFormType } from "../types/task";

export default function useAddNewTask({ boardId }: { boardId: number | null }) {
  const queryClient = useQueryClient();

  if (!boardId) throw new Error("BoardId is required");

  return useMutation({
    mutationKey: ["create-task"],
    mutationFn: (task: TaskFormType) => createTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["task-list", boardId],
      });
    },
  });
}
