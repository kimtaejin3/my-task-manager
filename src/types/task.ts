type StatusCategoryType = "backlog" | "in-progress" | "in-review" | "completed";

type Task = {
  id: number;
  title: string;
  status: StatusCategoryType;
  background: string | null;
  tags: string[];
};

type GroupedTasks = Record<StatusCategoryType, Task[]>;

export type { StatusCategoryType, Task, GroupedTasks };
