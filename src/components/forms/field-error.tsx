import styled from "@emotion/styled";

interface FieldErrorProps {
  errorMessage: string | undefined;
}

export default function FieldError({ errorMessage }: FieldErrorProps) {
  if (!errorMessage) return null;
  return <S.Error>{errorMessage}</S.Error>;
}

const S = {
  Error: styled.div`
    color: red;
    font-size: 14px;
    margin-top: 10px;
  `,
};
