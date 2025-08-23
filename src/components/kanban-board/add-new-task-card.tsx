import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { overlay } from "overlay-kit";

import colors from "../../styles/color";
import typography from "../../styles/font";
import TaskForm from "../forms/task-form";
import Dialog from "../shared/dialog";
import Icon from "../shared/icon";

export default function AddNewTaskCard({ show }: { show: boolean }) {
  const theme = useTheme();

  if (!show) return null;

  return (
    <S.Button
      onClick={() => {
        overlay.open(({ isOpen, unmount }) => {
          return (
            <Dialog isOpen={isOpen} close={unmount} theme={theme}>
              <Dialog.Wrapper>
                <Dialog.Header title="Task Details" />
                {/* 합성 컴포넌트 덕분에 theme에 대한 prop drilling 문제가 어느정도 해소됨 */}
                {/* 구현을 사용처인 이곳에서 바로 드러낼 수 있는 거도 장점 */}
                <TaskForm theme={theme} task={null} onHideModal={unmount} />
              </Dialog.Wrapper>
            </Dialog>
          );
        });
      }}
    >
      Add New Task Card{" "}
      <Icon color={colors.blueHard} svgName="add-none-circle" size={24} />
    </S.Button>
  );
}

const S = {
  Button: styled.button`
    ${typography.medium14}
    background-color: ${colors.logoBlue};
    color: ${colors.blueHard};
    border-radius: 12px;
    padding: 15px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    cursor: pointer;
  `,
};
