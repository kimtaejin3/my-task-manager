import { type Theme } from "@emotion/react";

import Dialog from "./dialog";

import type { Task } from "../../types/task";

export default function EditTaskDialog({
  isOpen,
  close,
  task,
  theme,
}: {
  isOpen: boolean;
  close: () => void;
  task: Task;
  theme: Theme;
}) {
  const { title, tags, background } = task;

  return (
    <Dialog isOpen={isOpen} close={close}>
      <Dialog.Content theme={theme}>
        <h2>Task Details</h2>
        <img src={background || ""} alt="" />
        <input type="text" value={title} />
        <input type="text" value={tags.join(",")} />
        <button onClick={close}>Cancel</button>
        <button onClick={close}>Confirm</button>
      </Dialog.Content>
    </Dialog>
  );
}
