import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

import type { Theme } from "@emotion/react";

type FormCancelButtonProps = {
  children: React.ReactNode;
  theme: Theme;
  onClick?: () => void;
};

export default function FormCancelButton({
  children,
  theme,
  onClick,
}: FormCancelButtonProps) {
  return (
    <S.CancelButton theme={theme} type="button" onClick={onClick}>
      {children}
    </S.CancelButton>
  );
}

const S = {
  CancelButton: styled.button<{ theme: Theme }>`
    ${typography.medium14}
    color: ${(props) =>
      props.theme.themeType === "light" ? colors.blueMiddle : colors.gray};
    border: 2px solid
      ${(props) =>
        props.theme.themeType === "light" ? colors.blueMiddle : colors.gray};
    width: 92px;
    text-align: center;
    border-radius: 40px;
    padding: 12px;
    cursor: pointer;
  `,
};
