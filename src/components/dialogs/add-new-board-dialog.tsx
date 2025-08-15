import Dialog from "@mui/material/Dialog";

export default function AddNewBoardDialog({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <Dialog open={isOpen} onClose={close}>
      <p>Are you sure you want to add a new board?</p>
      <button onClick={close}>Cancel</button>
      <button onClick={close}>Confirm</button>
    </Dialog>
  );
}
