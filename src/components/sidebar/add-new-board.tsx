import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { overlay } from "overlay-kit";

import AddNewBoardDialog from "../dialogs/add-new-board-dialog";
import Icon from "../shared/icon";

import SidebarButton from "./sidebar-button";

export default function AddNewBoard() {
  const theme = useTheme();

  return (
    <S.Container>
      <SidebarButton
        onClick={() => {
          overlay.open(({ isOpen, unmount }) => {
            return (
              <AddNewBoardDialog
                isOpen={isOpen}
                close={unmount}
                theme={theme}
              />
            );
          });
        }}
        left={<Icon type="add" size={16} theme={theme} />}
        center={<span>Add new board</span>}
      />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    margin-top: 12px;
  `,
};
