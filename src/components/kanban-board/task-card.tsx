import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { overlay } from "overlay-kit";

import typography from "../../styles/font";
import Dialog from "../dialog/dialog";
import TaskForm from "../forms/task-form";
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
            <Dialog isOpen={isOpen} close={unmount} theme={theme}>
              <Dialog.Wrapper>
                <Dialog.Header title="Task Details" />
                {/* 합성 컴포넌트 덕분에 theme에 대한 prop drilling 문제가 어느정도 해소됨 */}
                {/* 구현을 사용처인 이곳에서 바로 드러낼 수 있는 거도 장점 */}
                <TaskForm theme={theme} task={task} onHideModal={unmount} />
              </Dialog.Wrapper>
            </Dialog>
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
