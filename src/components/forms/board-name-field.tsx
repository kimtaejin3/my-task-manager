import FieldError from "./field-error";
import Input from "./Input";
import Label from "./label";

import type { Falsey } from "../../types/utils";
import type { Theme } from "@emotion/react";

interface BoardNameFieldProps {
  theme: Theme;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error: {
    showError: boolean | Falsey;
    errorMessage: string | undefined;
  };
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function BoardNameField({
  theme,
  value,
  onChange,
  onBlur,
  name,
  error,
}: BoardNameFieldProps) {
  console.log(error);
  return (
    <fieldset>
      <Label id="boardNameLabel" htmlFor="boardName">
        Board name
      </Label>

      <Input
        theme={theme}
        type="text"
        onBlur={onBlur}
        id="boardName"
        placeholder="e.g: Default Board"
        name={name}
        value={value}
        onChange={onChange}
      />
      {error.showError && <FieldError errorMessage={error.errorMessage} />}
    </fieldset>
  );
}
