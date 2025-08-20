import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

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

      <S.Input
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

  Input: styled.input<{ theme: Theme }>`
    width: 100%;
    background-color: inherit;
    color: ${(props) => props.theme.themeValue.text};
    ${typography.medium16}
    border: 2px solid ${(props) => props.theme.themeValue.tertiary};
    border-radius: 12px;
    padding: 12px;

    &:focus {
      outline: none;
    }
  `,
};
