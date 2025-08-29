import Input from "./Input";
import Label from "./label";

import type { Theme } from "@emotion/react";

export default function BoardNameField({
  theme,
  value,
  onChange,
  name,
}: {
  theme: Theme;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) {
  return (
    <fieldset>
      <Label id="boardNameLabel" htmlFor="boardName">
        Board name
      </Label>

      <Input
        theme={theme}
        type="text"
        id="boardName"
        placeholder="e.g: Default Board"
        name={name}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
}
