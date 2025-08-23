import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { overlay } from "overlay-kit";

import AddNewBoardForm from "../forms/add-new-board-form";
import Dialog from "../shared/dialog";
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
              <Dialog isOpen={isOpen} close={unmount} theme={theme}>
                <Dialog.Wrapper>
                  <Dialog.Header title="New Board" />
                  <AddNewBoardForm theme={theme} onHideModal={unmount} />
                </Dialog.Wrapper>
              </Dialog>
            );
          });
        }}
        left={<Icon svgName="add" size={16} theme={theme} />}
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
