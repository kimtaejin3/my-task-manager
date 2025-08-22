import { useState } from "react";

import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

import type { Theme } from "@emotion/react";

interface BackgroundContainerProps {
  background: string | null;
  theme: Theme;
}

export default function BackgroundContainer({
  background,
  theme,
}: BackgroundContainerProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.BackgroundImage
      theme={theme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && background && (
        <S.Overlay>
          <S.Button backgroundColor={colors.blue}>Random cover</S.Button>
          <S.Button backgroundColor={colors.red}>Remove</S.Button>
        </S.Overlay>
      )}
      {background ? <img src={background} alt="" /> : <div>No cover photo</div>}
    </S.BackgroundImage>
  );
}

const S = {
  BackgroundImage: styled.div<{ theme: Theme }>`
    width: 100%;
    height: 130px;
    overflow: hidden;
    margin-bottom: 12px;
    border-radius: 12px;
    position: relative;
    background-color: ${(props) => props.theme.themeValue.tertiary};
    color: ${colors.gray};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  Overlay: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 16px;
  `,

  Button: styled.button<{ backgroundColor: string }>`
    ${typography.bold14}
    background-color: ${(props) => props.backgroundColor};
    color: white;
    border: none;
    border-radius: 40px;
    padding: 12px 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
};
