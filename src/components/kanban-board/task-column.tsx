import styled from "@emotion/styled";
import { Droppable } from "@hello-pangea/dnd";

import { TASK_STATUS_CONFIG } from "../../constants/task-status";

import ColumnHeader from "./column-header";
import DraggableTaskCard from "./draggable-task-card";

import type { Status, Task } from "../../types/task";

interface TaskColumnProps {
  status: Status;
  tasks: Task[];
}

export default function TaskColumn({ status, tasks }: TaskColumnProps) {
  return (
    <S.Column>
      <ColumnHeader
        title={TASK_STATUS_CONFIG[status].title}
        count={tasks.length}
        color={TASK_STATUS_CONFIG[status].color}
      />
      <Droppable droppableId={status}>
        {(provided) => (
          <S.TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <DraggableTaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </S.TaskList>
        )}
      </Droppable>
    </S.Column>
  );
}

const S = {
  TaskList: styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 100%;
  `,

  Column: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
};
