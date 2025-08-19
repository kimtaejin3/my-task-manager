import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";
import Icon from "../shared/icon";

type FormSubmitButtonProps = {
  children: React.ReactNode;
};

export default function FormSubmitButton({ children }: FormSubmitButtonProps) {
  return (
    <S.SubmitButton type="submit">
      {children}
      <Icon svgName="check" size={24} color="red" />
    </S.SubmitButton>
  );
}

const S = {
  SubmitButton: styled.button`
    ${typography.medium14}
    background-color: ${colors.blue};
    color: ${colors.white};
    border: none;
    border-radius: 40px;
    width: 167px;
    padding: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
};
