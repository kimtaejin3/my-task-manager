import { useEffect, useMemo, useState } from "react";

import { groupBy } from "es-toolkit";

import type { Status, Task, TasksByStatus } from "../types/task";
import type { Entries } from "../types/utils";
import type { DropResult } from "@hello-pangea/dnd";

export function useTaskColumns(tasks: Task[]) {
  const calculatedColumns = useMemo(
    () =>
      createTaskColumns({
        tasks,
        columnTemplate: {
          backlog: [],
          "in-progress": [],
          "in-review": [],
          completed: [],
        },
      }),
    [tasks]
  );

  const [columns, setColumns] = useState<TasksByStatus>(calculatedColumns);

  useEffect(() => {
    setColumns(calculatedColumns);
  }, [calculatedColumns]);

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

const createTaskColumns = ({
  tasks,
  columnTemplate,
}: {
  tasks: Task[];
  columnTemplate: { [key in Status]: Task[] };
}) => {
  const groupedTasks = groupBy(tasks, (task) => task.status);
  const orderedColumns = columnTemplate;

  (Object.entries(groupedTasks) as Entries<TasksByStatus>).forEach(
    ([status, tasks]) => {
      orderedColumns[status] = tasks;
    }
  );

  return orderedColumns;
};
