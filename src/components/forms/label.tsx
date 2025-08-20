import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

interface LabelProps {
  children: string;
  htmlFor: string;
  id: string;
}

export default function Label({ children, htmlFor, id }: LabelProps) {
  return (
    <S.Label id={id} htmlFor={htmlFor}>
      {children}
    </S.Label>
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
