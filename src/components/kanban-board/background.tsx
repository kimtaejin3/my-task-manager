import styled from "@emotion/styled";

export default function Background({
  background,
}: {
  background: string | null;
}) {
  if (!background) return null;

  return (
    <S.Background>
      <img src={background} alt="" />
    </S.Background>
  );
}

const S = {
  Background: styled.div`
    width: 100%;
    height: 130px;
    overflow: hidden;
    margin-bottom: 12px;
    border-radius: 12px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
};
