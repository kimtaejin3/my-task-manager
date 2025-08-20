import { type Theme } from "@emotion/react";

import TaskForm from "../forms/task-form";

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
  // const { title, tags, background } = task;

  return (
    <Dialog isOpen={isOpen} close={close} theme={theme}>
      <Dialog.Wrapper>
        <Dialog.Header title="Task Details" />
        <TaskForm theme={theme} task={task} onHideModal={close} />
      </Dialog.Wrapper>
    </Dialog>
  );
}
