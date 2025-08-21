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

type TaskTagConfig = {
  backgroundColor: string;
  textColor: string;
};

export const TASK_TAG_CONFIG: Record<string, TaskTagConfig> = {
  concept: {
    backgroundColor: colors.redLight,
    textColor: colors.redPrimary,
  },
  technical: {
    backgroundColor: colors.blueLight,
    textColor: colors.bluePrimary,
  },
  design: {
    backgroundColor: colors.yellowLight,
    textColor: colors.yellowPrimary,
  },
  "front-end": {
    backgroundColor: colors.greenLight,
    textColor: colors.greenPrimary,
  },
} as const;
