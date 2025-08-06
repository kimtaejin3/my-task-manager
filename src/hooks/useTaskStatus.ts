import { useState } from "react";

import { groupBy } from "es-toolkit";

import type { Task, GroupedTasks } from "../types/task";

export function useTaskColumns(initialTasks: Task[]) {
  const [columns, setColumns] = useState<GroupedTasks>(() =>
    groupBy(initialTasks, (task) => task.status)
  );

  const updateTaskStatus = (
    sourceStatus: {
      index: number;
      droppableId: string;
    },
    destinationStatus: {
      index: number;
      droppableId: string;
    }
  ) => {
    const sourceDroppableId = sourceStatus.droppableId as keyof GroupedTasks;
    const destinationDroppableId =
      destinationStatus.droppableId as keyof GroupedTasks;

    const sourceTasks = columns[sourceDroppableId];
    const destinationTasks = columns[destinationDroppableId];

    const [removeTaskItem] = sourceTasks.splice(sourceStatus.index, 1);
    destinationTasks.splice(destinationStatus.index, 0, removeTaskItem);

    setColumns({
      ...columns,
      [sourceDroppableId]: sourceTasks,
      [destinationDroppableId]: destinationTasks,
    });
  };

  return {
    columns,
    updateTaskStatus,
  };
}
