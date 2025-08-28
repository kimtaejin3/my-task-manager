import React from "react";

import styled from "@emotion/styled";

interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, onSubmit }: FormProps) {
  return <S.Form onSubmit={onSubmit}>{children}</S.Form>;
}

const S = {
  Form: styled.form`
    margin: 30px 0 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
};
