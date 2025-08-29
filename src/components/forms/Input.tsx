import styled from "@emotion/styled";

import typography from "../../styles/font";

import type { Theme } from "@emotion/react";

interface InputProps {
  theme: Theme;
  value: string;
  type: string;
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export default function Input({
  theme,
  value,
  type,
  id,
  placeholder,
  onChange,
  name,
}: InputProps) {
  return (
    <S.Input
      theme={theme}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
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
