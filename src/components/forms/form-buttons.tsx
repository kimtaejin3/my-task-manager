import styled from "@emotion/styled";

export default function FormButtons({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.ButtonContainer>{children}</S.ButtonContainer>;
}

const S = {
  ButtonContainer: styled.div`
    display: flex;
    gap: 12px;
  `,
};
