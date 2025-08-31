import { Formik } from "formik";
import { useAtomValue } from "jotai";
import * as Yup from "yup";

import useAddNewTask from "../../hooks/use-add-new-task";
import useUpdateTask from "../../hooks/use-update-task";
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

export default function TaskForm({ theme, task, onHideModal }: TaskFormProps) {
  const currentBoardId = useAtomValue(selectedBoardIdAtom);

  const { mutate: addNewTaskMutation, error } = useAddNewTask({
    boardId: currentBoardId,
  });
  const { mutate: updateTaskMutation } = useUpdateTask({
    boardId: currentBoardId,
  });

  if (error) {
    console.error("Error adding new task:", error);
  }

  return (
    <Formik
      initialValues={createFormData({
        task,
        defaultFormData: {
          title: "",
          background: null,
          status: "backlog",
          tags: [],
          board_id: 0,
        },
      })}
      validationSchema={Yup.object({
        title: Yup.string().required("Required"),
        status: Yup.string().required("Required"),
        tags: Yup.array().min(1, "At least one tag is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        if (task) {
          updateTaskMutation(
            { ...values, id: task.id },
            {
              onSuccess: () => {
                onHideModal();
                setSubmitting(false);
              },
            }
          );
        } else {
          addNewTaskMutation(values, {
            onSuccess: () => {
              onHideModal();
              setSubmitting(false);
            },
          });
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <BackgroundField theme={theme} name="background" />
          <TaskTitleField
            theme={theme}
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            name="title"
            error={{
              showError: !!(errors.title && touched.title),
              errorMessage: errors.title,
            }}
          />
          <StatusField
            theme={theme}
            name="status"
            error={{
              showError: !!(errors.status && touched.status),
              errorMessage: errors.status,
            }}
          />
          <TagsField
            theme={theme}
            name="tags"
            error={{
              showError: !!(errors.tags && touched.tags),
              errorMessage: errors.tags,
            }}
          />
          <FormButtons>
            <FormSubmitButton disabled={isSubmitting}>Save</FormSubmitButton>
            <FormCancelButton theme={theme} onClick={onHideModal}>
              Cancel
            </FormCancelButton>
          </FormButtons>
        </Form>
      )}
    </Formik>
  );
}

const createFormData = ({
  task,
  defaultFormData,
}: {
  task: Task | null;
  defaultFormData: TaskFormType;
}): TaskFormType => {
  if (!task) return defaultFormData;

  return {
    title: task.title,
    background: task.background,
    status: task.status,
    tags: task.tags,
    board_id: task.board_id,
  };
};
