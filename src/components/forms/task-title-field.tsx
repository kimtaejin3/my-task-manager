import { type Theme } from "@emotion/react";

import FieldError from "./field-error";
import Input from "./Input";
import Label from "./label";

interface TaskTitleFieldProps {
  theme: Theme;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  error: {
    showError: boolean;
    errorMessage?: string;
  };
}

export default function TaskTitleField({
  theme,
  value,
  onChange,
  onBlur,
  name,
  error,
}: TaskTitleFieldProps) {
  return (
    <fieldset>
      <Label id="titleLabel" htmlFor="title">
        Task title
      </Label>
      <Input
        theme={theme}
        type="text"
        id="title"
        placeholder="e.g: Default Board"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
      {error.showError && <FieldError errorMessage={error.errorMessage} />}
    </fieldset>
  );
}
