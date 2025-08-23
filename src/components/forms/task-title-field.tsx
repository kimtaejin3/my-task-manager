import { type Theme } from "@emotion/react";

import Input from "./Input";
import Label from "./label";

interface TaskTitleFieldProps {
  theme: Theme;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TaskTitleField({
  theme,
  value,
  onChange,
}: TaskTitleFieldProps) {
  return (
    <fieldset>
      <Label id="taskTitleLabel" htmlFor="taskTitle">
        Task title
      </Label>
      <Input
        theme={theme}
        type="text"
        id="taskTitle"
        placeholder="e.g: Default Board"
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
}
