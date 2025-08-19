import styled from "@emotion/styled";

export default function Form({ children }: { children: React.ReactNode }) {
  return <S.Form>{children}</S.Form>;
}

const S = {
  Form: styled.form`
    margin: 30px 0 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
};
