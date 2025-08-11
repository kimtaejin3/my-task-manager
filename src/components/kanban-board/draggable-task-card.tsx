import { Draggable } from "@hello-pangea/dnd";

import TaskCard from "./task-card";

import type { Task } from "../../types/task";

interface DraggableTaskCardProps {
  task: Task;
  index: number;
}

export default function DraggableTaskCard({
  task,
  index,
}: DraggableTaskCardProps) {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            margin: "0 0 12px 0",
          }}
        >
          <TaskCard {...task} />
        </div>
      )}
    </Draggable>
  );
}
