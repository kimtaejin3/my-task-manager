import { supabase } from "../utils/supabase";

import type { TaskFormType, Task } from "../types/task";

export const getTaskList = async ({ boardId }: { boardId: number | null }) => {
  if (!boardId) return [];

  const { data, error } = await supabase
    .from("task")
    .select("*")
    .eq("board_id", boardId)
    .order("created_at", { ascending: false });
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

export const updateTask = async (
  boardId: number,
  //TODO: 타입
  task: { id: number } & Partial<Omit<Task, "id">>
) => {
  const { data, error } = await supabase
    .from("task")
    .update(task as never)
    .eq("board_id", boardId)
    .eq("id", task.id)
    .select()
    .single();
  if (error) throw error;

  return data as Task;
};
