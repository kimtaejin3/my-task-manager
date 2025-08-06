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

import { taskListQueryOptions } from "../../queryOptions/task";
import typography from "../../styles/font";

import TaskCard from "./task-card";

import type { GroupedTasks, StatusCategoryType } from "../../types/task";

export interface DragItem {
  id: number;
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardWrapper />
    </Suspense>
  );
}

// const A = {
//   backlog: {
//     config: {
//       color: 'blue',
//       title: 'Backlog',
//     }
//     tasks: [],
//   }

// };

function DashboardWrapper() {
  const { data } = useSuspenseQuery(taskListQueryOptions);

  // const newData = data.map((item) => ({
  //   ..
  // }));

  const groupedArr: GroupedTasks = groupBy(data, (item) => item.status);

  const [columns, setColumns] = useState(groupedArr);

  const handleDragEnd = ({
    result,
    columns,
    setColumns,
  }: {
    result: DropResult<string>;
    columns: GroupedTasks;
    setColumns: React.Dispatch<SetStateAction<GroupedTasks>>;
  }) => {
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

  return (
    <DashboardContainer>
      <DragDropContext
        onDragEnd={(result) => handleDragEnd({ result, columns, setColumns })}
      >
        {Object.entries(columns).map(([statusCategory, tasks]) => (
          <Droppable key={statusCategory} droppableId={statusCategory}>
            {(provided) => (
              <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                <ListHeader>
                  <ColorBox color={"blue"} />
                  <span>{statusCategory} (0)</span>
                </ListHeader>
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
        ))}
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
  width: 180px;
  height: 100%;
`;

const ColorBox = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const ListHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  ${typography.bold14}
`;
