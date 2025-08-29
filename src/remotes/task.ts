import { supabase } from "../utils/supabase";

import type { TaskFormType, Task } from "../types/task";

export const getTaskList = async ({ boardId }: { boardId: number }) => {
  const { data, error } = await supabase
    .from("task")
    .select("*")
    .eq("board_id", boardId);
  if (error) throw error;

  return data as Task[];
};

export const createTask = async (task: TaskFormType) => {
  const { data, error } = await supabase
    .from("task")
    .insert(task as never)
    .select()
    .single();
  if (error) throw error;

  return data as Task;
};
