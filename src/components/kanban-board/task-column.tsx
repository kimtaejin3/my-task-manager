import styled from "@emotion/styled";
import { Droppable } from "@hello-pangea/dnd";

import { TASK_STATUS_CONFIG } from "../../constants/task";

import AddNewTaskCard from "./add-new-task-card";
import ColumnHeader from "./column-header";
import DraggableTaskCard from "./draggable-task-card";

import type { Status, Task } from "../../types/task";

interface TaskColumnProps {
  status: Status;
  tasks: Task[];
}

export default function TaskColumn({ status, tasks }: TaskColumnProps) {
  const { title, color } = TASK_STATUS_CONFIG[status];

  // TODO: Draggable, Droppable 분리, DroppableTaskList 만들기
  // 사용하는 곳에서 droppable에 대한 세부 구현사항을 노출할 필요가 없을것 같다.
  return (
    <S.Flex>
      <ColumnHeader title={title} count={tasks.length} color={color} />
      <Droppable droppableId={status}>
        {(provided) => (
          <S.TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <DraggableTaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
            <AddNewTaskCard show={status === "backlog"} />
          </S.TaskList>
        )}
      </Droppable>
    </S.Flex>
  );
}

const S = {
  TaskList: styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 100%;
  `,

  Flex: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
};
