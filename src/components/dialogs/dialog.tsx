import styled from "@emotion/styled";

import type { Theme } from "@emotion/react";

interface DialogProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}

export default function Dialog({ isOpen, close, children }: DialogProps) {
  if (!isOpen) return null;

  return <S.Dialog onClick={close}>{children}</S.Dialog>;
}

interface DialogContentProps {
  children: React.ReactNode;
  theme: Theme;
}

Dialog.Content = function DialogContent({
  children,
  theme,
}: DialogContentProps) {
  return (
    <S.Content onClick={(e) => e.stopPropagation()} theme={theme}>
      {children}
    </S.Content>
  );
};

const S = {
  Dialog: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Content: styled.div<{ theme: Theme }>`
    background-color: ${(props) => props.theme.themeValue.primary};
  `,
};
