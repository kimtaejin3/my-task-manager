import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { overlay } from "overlay-kit";

import typography from "../../styles/font";
import Dialog from "../dialog/dialog";
import TaskForm from "../forms/task-form";
import TagList from "../shared/tag-list";

import Background from "./background";

import type { Task } from "../../types/task";

interface TaskCardProps extends Task {}

export default function TaskCard(task: TaskCardProps) {
  const { title, tags, background } = task;

  const theme = useTheme();

  return (
    <S.Card
      onClick={() => {
        overlay.open(({ isOpen, unmount }) => {
          return (
            <Dialog isOpen={isOpen} close={unmount} theme={theme}>
              <Dialog.Wrapper>
                <Dialog.Header title="Task Details" />
                <TaskForm theme={theme} task={task} onHideModal={unmount} />
              </Dialog.Wrapper>
            </Dialog>
          );
        });
      }}
    >
      <S.Content>
        <Background background={background} />
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
