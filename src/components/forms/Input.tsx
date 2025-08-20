import styled from "@emotion/styled";

import typography from "../../styles/font";

import type { Theme } from "@emotion/react";

export default function Input({
  theme,
  value,
  type,
  id,
  placeholder,
  onChange,
}: {
  theme: Theme;
  value: string;
  type: string;
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <S.Input
      theme={theme}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

const S = {
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
