import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import styled from "@emotion/styled";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useSuspenseQuery } from "@tanstack/react-query";

import { TASK_STATUS_CONFIG } from "../../constants/task-status";
import { useTaskDragDrop } from "../../hooks/useDragDrop";
import { useTaskColumns } from "../../hooks/useTaskStatus";
import { taskListQueryOptions } from "../../queryOptions/task";
import typography from "../../styles/font";
import Error from "../shared/error";

import TaskCard from "./task-card";

import type { TasksByStatus } from "../../types/task";
import type { Entries } from "../../types/utils";

export default function Dashboard() {
  return (
    <ErrorBoundary
      fallback={
        <Error errorMessage="Task List 데이터를 불러오는중 문제가 발생했어요." />
      }
    >
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardWrapper />
      </Suspense>
    </ErrorBoundary>
  );
}

function DashboardWrapper() {
  const { data } = useSuspenseQuery(taskListQueryOptions);

  const { columns, updateTaskStatus } = useTaskColumns(data);

  const { handleDragEnd } = useTaskDragDrop({
    onUpdateStatus: updateTaskStatus,
  });

  return (
    <DashboardWrapperContainer>
      <DragDropContext onDragEnd={(result) => handleDragEnd({ result })}>
        {(Object.entries(columns) as Entries<TasksByStatus>).map(
          ([statusCategory, tasks]) => (
            <Column>
              <ColumnHeader>
                <ColorBox color={TASK_STATUS_CONFIG[statusCategory].color} />
                <span>
                  {TASK_STATUS_CONFIG[statusCategory].title} ({tasks.length})
                </span>
              </ColumnHeader>
              <Droppable key={statusCategory} droppableId={statusCategory}>
                {(provided) => (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {tasks.map((task, index) => (
                      <Draggable
                        key={String(task.id)}
                        draggableId={String(task.id)}
                        index={index}
                      >
                        {(provided) => {
                          return (
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
                          );
                        }}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            </Column>
          )
        )}
      </DragDropContext>
    </DashboardWrapperContainer>
  );
}

const DashboardWrapperContainer = styled.div`
  display: flex;
  gap: 12px;
  height: 100%;
  overflow-x: auto;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4px;
  width: 370px;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ColorBox = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const ColumnHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  ${typography.bold14}
`;
