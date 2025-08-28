import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";
import Icon from "../shared/icon";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export default function FormSubmitButton({
  children,
  disabled,
}: FormSubmitButtonProps) {
  return (
    <S.SubmitButton type="submit" disabled={disabled}>
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
    // width: 167px;
    width: fit-content;
    padding: 12px 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
};
