import { useState } from "react";

import { type Theme } from "@emotion/react";
import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";
import getRandomCover from "../../utils/get-random-cover";

interface BackgroundFieldProps {
  theme: Theme;
  background: string | null;
  onChange: (background: string | null) => void;
}

export default function BackgroundField({
  theme,
  background,
  onChange,
}: BackgroundFieldProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <fieldset>
      <S.BackgroundImage
        theme={theme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <S.Overlay>
            <S.Button
              onClick={() => {
                const randomCover = getRandomCover();
                onChange(randomCover);
              }}
              type="button"
              backgroundColor={colors.blue}
              hide={false}
            >
              Random cover
            </S.Button>
            <S.Button
              onClick={() => onChange(null)}
              hide={background === null}
              type="button"
              backgroundColor={colors.red}
            >
              Remove
            </S.Button>
          </S.Overlay>
        )}
        {background ? (
          <img src={background} alt="" />
        ) : (
          <div>No cover photo</div>
        )}
      </S.BackgroundImage>
    </fieldset>
  );
}

const S = {
  BackgroundImage: styled.div<{ theme: Theme }>`
    width: 100%;
    height: 160px;
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

  Button: styled.button<{ backgroundColor: string; hide: boolean }>`
    ${typography.bold14}
    background-color: ${(props) => props.backgroundColor};
    color: white;
    border: none;
    border-radius: 40px;
    padding: 12px 25px;
    cursor: pointer;
    ${(props) => (props.hide ? "display: none;" : "display: flex")}
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
};
