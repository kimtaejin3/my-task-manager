import { type Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { useField } from "formik";

import { TASK_STATUS_CONFIG } from "../../constants/task";

import Dropdown from "./dropdown";
import FieldError from "./field-error";
import Label from "./label";

import type { Status } from "../../types/task";

interface StatusFieldProps {
  theme: Theme;
  name: string;
  error: {
    showError: boolean;
    errorMessage?: string;
  };
}

export default function StatusField({ theme, name, error }: StatusFieldProps) {
  const [field, , helpers] = useField<Status>(name);

  return (
    <fieldset>
      <Label htmlFor={name} id={name}>
        Status
      </Label>
      <Dropdown theme={theme}>
        <Dropdown.Trigger name={name}>
          <>
            <S.StatusIndicator
              color={TASK_STATUS_CONFIG[field.value].color}
              theme={theme}
            />
            {TASK_STATUS_CONFIG[field.value].title}
          </>
        </Dropdown.Trigger>
        <Dropdown.List>
          {Object.entries(TASK_STATUS_CONFIG).map(([status, config]) => (
            <Dropdown.Item
              key={status}
              onClick={() => helpers.setValue(status as Status)}
            >
              <S.StatusIndicator color={config.color} theme={theme} />
              {config.title}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
      {error.showError && <FieldError errorMessage={error.errorMessage} />}
    </fieldset>
  );
}

const S = {
  StatusIndicator: styled.div<{ color: string; theme: Theme }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-right: 8px;
  `,
};
