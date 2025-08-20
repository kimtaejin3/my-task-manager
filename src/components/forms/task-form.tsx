import { useState } from "react";

import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

import Form from "./form";
import FormButtons from "./form-buttons";
import FormCancelButton from "./form-cancel-button";
import FormSubmitButton from "./form-submit-button";
import Input from "./Input";
import Label from "./label";

import type { Task } from "../../types/task";
import type { Theme } from "@emotion/react";

interface TaskFormProps {
  theme: Theme;
  task: Task;
  onHideModal: () => void;
}

export default function TaskForm({ theme, task, onHideModal }: TaskFormProps) {
  const [formData, setFormData] = useState({
    taskTitle: task.title,
    background: task.background,
  });

  return (
    <Form>
      <fieldset>
        <S.ImageContainer theme={theme}>
          {formData.background ? (
            <img src={formData.background} alt="" />
          ) : (
            <S.NoCoverPhoto>No cover photo</S.NoCoverPhoto>
          )}
        </S.ImageContainer>

        <input type="file" accept="image/*" hidden />
      </fieldset>
      <fieldset>
        <Label id="taskTitleLabel" htmlFor="taskTitle">
          Task title
        </Label>
        <Input
          theme={theme}
          type="text"
          id="taskTitle"
          placeholder="e.g: Default Board"
          value={formData.taskTitle}
          onChange={(e) =>
            setFormData({ ...formData, taskTitle: e.target.value })
          }
        />
      </fieldset>
      <FormButtons>
        <FormSubmitButton>Save</FormSubmitButton>
        <FormCancelButton theme={theme} onClick={onHideModal}>
          Cancel
        </FormCancelButton>
      </FormButtons>
    </Form>
  );
}

const S = {
  ImageContainer: styled.div<{ theme: Theme }>`
    width: 100%;
    height: 120px;
    overflow: hidden;
    margin-bottom: 12px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.themeValue.tertiary};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  NoCoverPhoto: styled.div`
    ${typography.bold20}
    color: ${colors.gray};
  `,
};
