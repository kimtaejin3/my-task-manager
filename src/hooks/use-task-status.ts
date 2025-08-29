import { useEffect, useMemo, useState } from "react";

import { groupBy } from "es-toolkit";
import { useAtomValue } from "jotai";

import { selectedBoardIdAtom } from "../jotai/atom/board";

import useUpdateTask from "./use-update-task";

import type { Status, Task, TasksByStatus } from "../types/task";
import type { Entries } from "../types/utils";
import type { DropResult } from "@hello-pangea/dnd";

//TODO: 코드 리팩토링
export function useTaskColumns(tasks: Task[]) {
  const selectedBoardId = useAtomValue(selectedBoardIdAtom);
  const updateTask = useUpdateTask({ boardId: selectedBoardId });

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
      droppableId: result.source.droppableId as Status,
    };

    const destinationStatus = {
      index: result.destination.index,
      droppableId: result.destination.droppableId as Status,
    };

    const sourceTasks = columns[sourceStatus.droppableId];
    const destinationTasks = columns[destinationStatus.droppableId];

    const [removeTaskItem] = sourceTasks.splice(sourceStatus.index, 1);
    destinationTasks.splice(destinationStatus.index, 0, removeTaskItem);

    //for ui update
    setColumns({
      ...columns,
      [sourceStatus.droppableId]: sourceTasks,
      [destinationStatus.droppableId]: destinationTasks,
    });

    //for db update
    updateTask.mutate({
      id: removeTaskItem.id,
      status: destinationStatus.droppableId,
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
