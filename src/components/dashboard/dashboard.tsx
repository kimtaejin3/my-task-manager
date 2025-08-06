import { Suspense, useState, type SetStateAction } from "react";

import styled from "@emotion/styled";
import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";
import { useSuspenseQuery } from "@tanstack/react-query";
import { groupBy } from "es-toolkit";

import { TASK_STATUS_CONFIG } from "../../constants/task-status";
import useTaskDragDrop from "../../hooks/useDragDrop";
import { taskListQueryOptions } from "../../queryOptions/task";
import typography from "../../styles/font";

import TaskCard from "./task-card";

import type { GroupedTasks } from "../../types/task";
import type { Entries } from "../../types/utils";

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardWrapper />
    </Suspense>
  );
}

function DashboardWrapper() {
  const { data } = useSuspenseQuery(taskListQueryOptions);

  const { columns, handleDragEnd } = useTaskDragDrop({
    taskList: data,
  });

  return (
    <DashboardContainer>
      <DragDropContext onDragEnd={(result) => handleDragEnd({ result })}>
        {(Object.entries(columns) as Entries<GroupedTasks>).map(
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
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  gap: 12px;
  height: 100%;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  padding: 0 4px;
  width: 380px;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 12px;
  ${typography.bold14}
`;
