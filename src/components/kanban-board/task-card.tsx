import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { overlay } from "overlay-kit";

import typography from "../../styles/font";
import TaskForm from "../forms/task-form";
import Dialog from "../shared/dialog";
import TagList from "../shared/tag-list";

import OptionalBackground from "./optional-background";

import type { Task } from "../../types/task";

interface TaskCardProps extends Task {}

export default function TaskCard(task: TaskCardProps) {
  const { title, tags, background } = task;

  //  overlay를 사용할떄 다른 컴포넌트처럼 스타일 컴포넌트안에서 theme을 불러오지 못하기 때문에 이렇게 넘겨줘야 한다.
  const theme = useTheme();

  return (
    <S.Card
      onClick={() => {
        overlay.open(({ isOpen, unmount }) => {
          return (
            <Dialog
              isOpen={isOpen}
              close={unmount}
              theme={theme}
              title="Task Details"
              renderContent={() => (
                <TaskForm theme={theme} task={task} onHideModal={unmount} />
              )}
            />
          );
        });
      }}
    >
      <S.Content>
        <OptionalBackground background={background} />
        <S.Title>{title}</S.Title>
        <TagList tags={tags} />
      </S.Content>
    </S.Card>
  );
}

const S = {
  Card: styled.div`
    background: ${(props) => props.theme.themeValue.primary};
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    cursor: pointer;
  `,

  Content: styled.div`
    padding: 12px;
  `,

  Title: styled.h3`
    ${typography.medium14}
    margin: 0 0 8px 0;
  `,
};
