import { useEffect, useMemo, useState } from "react";

import { groupBy } from "es-toolkit";

import type { Task, TasksByStatus } from "../types/task";
import type { DropResult } from "@hello-pangea/dnd";

export function useTaskColumns(initialTasks: Task[]) {
  const initialColumns = useMemo(() => {
    return groupBy(initialTasks, (task) => task.status);
  }, [initialTasks]);

  const [columns, setColumns] = useState<TasksByStatus>(initialColumns);

  useEffect(() => {
    setColumns(initialColumns);
  }, [initialColumns]);

  const updateTaskStatus = (result: DropResult) => {
    if (!result.destination) return;

    const sourceStatus = {
      index: result.source.index,
      droppableId: result.source.droppableId,
    };

    const destinationStatus = {
      index: result.destination.index,
      droppableId: result.destination.droppableId,
    };

    const sourceDroppableId = sourceStatus.droppableId as keyof TasksByStatus;
    const destinationDroppableId =
      destinationStatus.droppableId as keyof TasksByStatus;

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
