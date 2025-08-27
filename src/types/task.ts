type Status = "backlog" | "in-progress" | "in-review" | "completed";
type Tag = "concept" | "technical" | "design" | "front-end";

type Task = {
  id: number;
  board_id: number;
  title: string;
  status: Status;
  background: string | null;
  tags: Tag[];
};

type TasksByStatus = Record<Status, Task[]>;

export type { Status, Tag, Task, TasksByStatus };
