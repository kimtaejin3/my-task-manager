import { useState } from "react";

import { useAtomValue } from "jotai";

import useAddNewTask from "../../hooks/use-add-new-task";
import { selectedBoardIdAtom } from "../../jotai/atom/board";

import BackgroundField from "./background-field";
import Form from "./form";
import FormButtons from "./form-buttons";
import FormCancelButton from "./form-cancel-button";
import FormSubmitButton from "./form-submit-button";
import StatusField from "./status-field";
import TagsField from "./tags-field";
import TaskTitleField from "./task-title-field";

import type { Task, TaskFormType } from "../../types/task";
import type { Theme } from "@emotion/react";

interface TaskFormProps {
  theme: Theme;
  task: Task | null;
  onHideModal: () => void;
}

const defaultFormData: TaskFormType = {
  title: "",
  background: null,
  status: "backlog",
  tags: [],
  board_id: 0,
};

export default function TaskForm({ theme, task, onHideModal }: TaskFormProps) {
  const [formData, setFormData] = useState(
    createFormData(task, defaultFormData)
  );

  // TODO: BoardId null 예외 처리를 어떻게 할지 , 그냥 빈문자열 주면 될지 모르겠음
  const currentBoardId = useAtomValue(selectedBoardIdAtom);

  const { mutate, error } = useAddNewTask({ boardId: currentBoardId });

  if (error) {
    //TODO: 토스트 띄우기
    console.error("Error adding new task:", error);
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        mutate({
          ...formData,
          //에러처리를 했기 때문에 있다고 가정
          board_id: currentBoardId!,
        });
        onHideModal();
      }}
    >
      <BackgroundField
        theme={theme}
        background={formData.background}
        onChange={(background) => setFormData({ ...formData, background })}
      />
      <TaskTitleField
        theme={theme}
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <StatusField
        theme={theme}
        selectedStatus={formData.status}
        onChange={(status) => setFormData({ ...formData, status })}
      />
      <TagsField
        theme={theme}
        selectedTags={formData.tags}
        onChange={(tags: string[]) => setFormData({ ...formData, tags })}
      />

      <FormButtons>
        <FormSubmitButton>Save</FormSubmitButton>
        <FormCancelButton theme={theme} onClick={onHideModal}>
          Cancel
        </FormCancelButton>
      </FormButtons>
    </Form>
  );
}

const createFormData = (
  task: Task | null,
  defaultFormData: TaskFormType
): TaskFormType => {
  if (!task) return defaultFormData;

  return {
    title: task.title,
    background: task.background,
    status: task.status,
    tags: task.tags,
    board_id: task.board_id,
  };
};
