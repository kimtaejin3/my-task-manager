import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import styled from "@emotion/styled";
import { DragDropContext } from "@hello-pangea/dnd";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

import { useTaskColumns } from "../../hooks/useTaskStatus";
import { selectedBoardIdAtom } from "../../jotai/atom/board";
import { boardListQueryOptions } from "../../queryOptions/board";
import { taskListQueryOptions } from "../../queryOptions/task";
import Error from "../shared/error";

import TaskColumn from "./task-column";

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
  const selectedBoardId = useAtomValue(selectedBoardIdAtom);
  const { data: boardList } = useSuspenseQuery(boardListQueryOptions);

  const currentBoardId = selectedBoardId ?? boardList[0].id;

  const { data: tasks } = useSuspenseQuery(
    taskListQueryOptions(currentBoardId)
  );

  const { columns, updateTaskStatus } = useTaskColumns(tasks);

  return (
    <S.Grid>
      <DragDropContext onDragEnd={(result) => updateTaskStatus(result)}>
        {(Object.entries(columns) as Entries<TasksByStatus>).map(
          ([status, tasks]) => (
            <TaskColumn key={status} status={status} tasks={tasks} />
          )
        )}
      </DragDropContext>
    </S.Grid>
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

  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    height: 100%;
    overflow-x: auto;
  `,
};
