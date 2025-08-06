import colors from "../styles/color";

import type { StatusCategoryType, TaskStatusConfig } from "../types/task";

export const TASK_STATUS_CONFIG: Record<StatusCategoryType, TaskStatusConfig> =
  {
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
