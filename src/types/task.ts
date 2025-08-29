type Status = "backlog" | "in-progress" | "in-review" | "completed";

type Task = {
  id: number;
  board_id: number;
  title: string;
  status: Status;
  background: string | null;
  tags: string[];
};

type TaskFormType = Omit<Task, "id">;

type TasksByStatus = Record<Status, Task[]>;

export type { Status, Task, TaskFormType, TasksByStatus };
