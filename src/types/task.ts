import type { TAGS } from "../constants/task";

type Status = "backlog" | "in-progress" | "in-review" | "completed";

type Task = {
  id: number;
  board_id: number;
  title: string;
  status: Status;
  background: string | null;
  tags: TAG[];
};

type TaskFormType = Omit<Task, "id">;

type TasksByStatus = Record<Status, Task[]>;

type TAG = (typeof TAGS)[number];

export type { Status, Task, TaskFormType, TasksByStatus, TAG };
