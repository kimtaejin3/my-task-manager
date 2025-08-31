import colors from "../styles/color";

import type { Status } from "../types/task";

type TaskStatusConfig = {
  color: string;
  title: string;
};

export const TASK_STATUS_CONFIG: Record<Status, TaskStatusConfig> = {
  backlog: {
    color: colors.blueMiddle,
    title: "Backlog",
  },
  "in-progress": {
    color: colors.yellowMiddle,
    title: "In Progress",
  },
  "in-review": {
    color: colors.purplePrimary,
    title: "In Review",
  },
  completed: {
    color: colors.greenMiddle,
    title: "Completed",
  },
} as const;

export const TAGS = [
  "easy",
  "medium",
  "hard",
  "front-end",
  "back-end",
  "write-code",
  "just-reading",
  "meeting",
] as const;
