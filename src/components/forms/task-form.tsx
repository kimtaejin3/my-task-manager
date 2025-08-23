import { useState } from "react";

import BackgroundField from "./background-field";
import Form from "./form";
import FormButtons from "./form-buttons";
import FormCancelButton from "./form-cancel-button";
import FormSubmitButton from "./form-submit-button";
import StatusField from "./status-field";
import TagsField from "./tags-field";
import TaskTitleField from "./task-title-field";

import type { Task, Status } from "../../types/task";
import type { Theme } from "@emotion/react";

interface TaskFormProps {
  theme: Theme;
  task: Task | null;
  onHideModal: () => void;
}

const defaultFormData: TaskFormData = {
  taskTitle: "",
  background: null,
  status: "backlog",
  tags: [],
};

export default function TaskForm({ theme, task, onHideModal }: TaskFormProps) {
  const [formData, setFormData] = useState(
    createFormData(task, defaultFormData)
  );

  return (
    <Form>
      <BackgroundField
        theme={theme}
        background={formData.background}
        onChange={(background) => setFormData({ ...formData, background })}
      />
      <TaskTitleField
        theme={theme}
        value={formData.taskTitle}
        onChange={(e) =>
          setFormData({ ...formData, taskTitle: e.target.value })
        }
      />
      <StatusField
        theme={theme}
        selectedStatus={formData.status}
        onChange={(status) => setFormData({ ...formData, status })}
      />
      <TagsField
        theme={theme}
        selectedTags={formData.tags}
        onChange={(tags) => setFormData({ ...formData, tags })}
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

type TaskFormData = {
  taskTitle: string;
  background: string | null;
  status: Status;
  tags: string[];
};

const createFormData = (
  task: Task | null,
  defaultFormData: TaskFormData
): TaskFormData => {
  if (!task) return defaultFormData;

  return {
    taskTitle: task.title,
    background: task.background,
    status: task.status,
    tags: task.tags,
  };
};
