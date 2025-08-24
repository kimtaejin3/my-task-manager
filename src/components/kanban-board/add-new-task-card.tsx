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
            <Dialog
              isOpen={isOpen}
              close={unmount}
              theme={theme}
              title="Task Details"
              renderContent={() => (
                <TaskForm theme={theme} task={null} onHideModal={unmount} />
              )}
            />
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
