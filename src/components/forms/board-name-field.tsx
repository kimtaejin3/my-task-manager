import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

import Input from "./Input";

import type { Theme } from "@emotion/react";

export default function BoardNameField({
  theme,
  value,
  onChange,
}: {
  theme: Theme;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <fieldset>
      <S.Label id="boardNameLabel" htmlFor="boardName">
        Board name
      </S.Label>

      <Input
        theme={theme}
        type="text"
        id="boardName"
        placeholder="e.g: Default Board"
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
}

const S = {
  Label: styled.label`
    margin-bottom: 8px;
    display: block;

    ${typography.medium12}
    color: ${colors.gray};
  `,
};
