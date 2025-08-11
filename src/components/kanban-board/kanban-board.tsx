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

export default function KanbanBoardContainer() {
  return (
    <S.Container>
      <ErrorBoundary
        fallback={
          <Error errorMessage="Task List 데이터를 불러오는중 문제가 발생했어요." />
        }
      >
        <Suspense fallback={<div>Loading...</div>}>
          <KanbanBoard />
        </Suspense>
      </ErrorBoundary>
    </S.Container>
  );
}

function KanbanBoard() {
  const { data } = useSuspenseQuery(taskListQueryOptions);

  const { columns, updateTaskStatus } = useTaskColumns(data);

  const { handleDragEnd } = useTaskDragDrop({
    onUpdateStatus: updateTaskStatus,
  });

  return (
    <S.Flex>
      <DragDropContext onDragEnd={(result) => handleDragEnd({ result })}>
        {(Object.entries(columns) as Entries<TasksByStatus>).map(
          ([statusCategory, tasks]) => (
            <S.Column>
              <S.ColumnHeader>
                <S.ColorBox color={TASK_STATUS_CONFIG[statusCategory].color} />
                <span>
                  {TASK_STATUS_CONFIG[statusCategory].title} ({tasks.length})
                </span>
              </S.ColumnHeader>
              <Droppable key={statusCategory} droppableId={statusCategory}>
                {(provided) => (
                  <S.TaskList
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
                  </S.TaskList>
                )}
              </Droppable>
            </S.Column>
          )
        )}
      </DragDropContext>
    </S.Flex>
  );
}

const S = {
  Container: styled.div`
    background-color: ${(props) => props.theme.themeValue.secondary};
    border-radius: 12px;
    padding: 16px 12px;
    flex-grow: 1;
    min-width: 0;
  `,

  Flex: styled.div`
    display: flex;
    gap: 12px;
    height: 100%;
    overflow-x: auto;
  `,

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

  ColorBox: styled.div<{ color: string }>`
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
  `,

  ColumnHeader: styled.header`
    display: flex;
    align-items: center;
    gap: 8px;
    ${typography.bold14}
  `,
};
