import styled from "@emotion/styled";

import useEscapeKey from "../../hooks/useEscapeKey";
import typography from "../../styles/font";
import Icon from "../shared/icon";

import type { Theme } from "@emotion/react";

interface DialogProps {
  isOpen: boolean;
  close: () => void;
  theme: Theme;
  title: string;
  renderContent: () => React.ReactNode;
}

export default function Dialog({
  isOpen,
  close,
  theme,
  title,
  renderContent,
}: DialogProps) {
  useEscapeKey(close);

  if (!isOpen) return null;

  return (
    <S.Dialog onClick={close}>
      <S.Wrapper theme={theme} onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.HeaderTitle>{title}</S.HeaderTitle>
          <button onClick={close}>
            <Icon svgName="close" size={24} theme={theme} />
          </button>
        </S.Header>
        {renderContent()}
      </S.Wrapper>
    </S.Dialog>
  );
}

const S = {
  Dialog: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Wrapper: styled.div<{ theme: Theme }>`
    background-color: ${(props) => props.theme.themeValue.secondary};
    border-radius: 12px;
    width: 520px;
    padding: 25px 32px 32px;
    margin: 0 10px;
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  HeaderTitle: styled.h2`
    ${typography.bold20};
  `,
};
