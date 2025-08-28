import { Suspense, useMemo } from "react";

import { ErrorBoundary } from "react-error-boundary";

import styled from "@emotion/styled";
import { DragDropContext } from "@hello-pangea/dnd";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

import { useTaskColumns } from "../../hooks/use-task-status";
import { selectedBoardIdAtom } from "../../jotai/atom/board";
import { boardListQueryOptions } from "../../queryOptions/board";
import { taskListQueryOptions } from "../../queryOptions/task";
import Error from "../shared/error";

import TaskColumn from "./task-column";

import type { Task, TasksByStatus } from "../../types/task";
import type { Entries } from "../../types/utils";

const TaskListLoading = () => {
  return <div>Loading...</div>;
};

export default function KanbanBoardContainer() {
  return (
    <S.Container>
      <ErrorBoundary
        fallback={
          <Error errorMessage="Task List 데이터를 불러오는중 문제가 발생했어요." />
        }
      >
        <Suspense fallback={<TaskListLoading />}>
          <KanbanBoard />
        </Suspense>
      </ErrorBoundary>
    </S.Container>
  );
}

function KanbanBoard() {
  const selectedBoardId = useAtomValue(selectedBoardIdAtom);

  // currentBoardId, taskListQueryOptions 관련 코드를 간소화하기 위함
  const { data: boardList } = useSuspenseQuery(boardListQueryOptions);

  const currentBoardId = selectedBoardId ?? boardList[0].id;

  // 원래는 useSuspenseQuery를 사용했지만 board 전환시 사용성 향상을 위해 useQuery를 사용 (이전 데이터 유지 위해)
  const { data: tasks, isLoading: isTasksLoading } = useQuery(
    taskListQueryOptions(currentBoardId)
  );

  // 불필요한 랜더링 방지
  const emptyTasks: Task[] = useMemo(() => [], []);
  const { columns, updateTaskStatus } = useTaskColumns(tasks ?? emptyTasks);

  //초기로딩시
  if (isTasksLoading) return <TaskListLoading />;

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
