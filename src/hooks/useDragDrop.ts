import { useState } from "react";

import { groupBy } from "es-toolkit";

import type { GroupedTasks, StatusCategoryType, Task } from "../types/task";
import type { DropResult } from "@hello-pangea/dnd";

export default function useTaskDragDrop({ taskList }: { taskList: Task[] }) {
  const taskListByStatus: GroupedTasks = groupBy(
    taskList,
    (item) => item.status
  );
  const [columns, setColumns] = useState(taskListByStatus);

  const handleDragEnd = ({ result }: { result: DropResult<string> }) => {
    if (!result.destination) return;

    const sourceTasks =
      columns[result.source.droppableId as StatusCategoryType];
    const [removed] = sourceTasks.splice(result.source.index, 1);

    const destTasks =
      columns[result.destination.droppableId as StatusCategoryType];
    destTasks.splice(result.destination.index, 0, removed);

    setColumns({
      ...columns,
      [result.source.droppableId]: sourceTasks,
      [result.destination.droppableId]: destTasks,
    });
  };

  return {
    columns,
    setColumns,
    handleDragEnd,
  };
}
