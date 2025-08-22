import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { overlay } from "overlay-kit";

import typography from "../../styles/font";
import EditTaskDialog from "../dialogs/edit-task-dialog";
import TagList from "../shared/tag-list";

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
            <EditTaskDialog
              isOpen={isOpen}
              close={unmount}
              task={task}
              theme={theme}
            />
          );
        });
      }}
    >
      <S.Content>
        {background && (
          <S.Background>
            <img src={background} alt="" />
          </S.Background>
        )}
        <S.Title>{title}</S.Title>
        <TagList tags={tags} />
      </S.Content>
    </S.Card>
  );
}

const S = {
  Background: styled.div`
    width: 100%;
    height: 130px;
    overflow: hidden;
    margin-bottom: 12px;
    border-radius: 12px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
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
