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
        <Dialog.Header title="Add New Board" />
        <p>Are you sure you want to add a new board?</p>
        <button onClick={close}>Cancel</button>
        <button onClick={close}>Confirm</button>
      </Dialog.Wrapper>
    </Dialog>
  );
}
