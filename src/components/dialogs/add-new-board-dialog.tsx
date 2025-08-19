import AddNewBoardForm from "../forms/add-new-board-form";

import Dialog from "./dialog";

import type { Theme } from "@emotion/react";

export default function AddNewBoardDialog({
  isOpen,
  close,
  theme,
}: {
  isOpen: boolean;
  close: () => void;
  theme: Theme;
}) {
  return (
    <Dialog isOpen={isOpen} close={close} theme={theme}>
      <Dialog.Wrapper>
        <Dialog.Header title="New Board" />
        <AddNewBoardForm theme={theme} />
      </Dialog.Wrapper>
    </Dialog>
  );
}
