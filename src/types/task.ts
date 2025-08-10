type Status = "backlog" | "in-progress" | "in-review" | "completed";

type Task = {
  id: number;
  title: string;
  status: Status;
  background: string | null;
  tags: string[];
};

type TasksByStatus = Record<Status, Task[]>;

export type { Status, Task, TasksByStatus };
