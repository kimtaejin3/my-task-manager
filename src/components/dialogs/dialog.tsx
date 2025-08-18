import { createContext, useContext } from "react";

import styled from "@emotion/styled";

import typography from "../../styles/font";
import Icon from "../shared/icon";

import type { Theme } from "@emotion/react";

interface DialogProps {
  isOpen: boolean;
  close: () => void;
  theme: Theme;
  children: React.ReactNode;
}

type DialogContextType = {
  isOpen: boolean;
  close: () => void;
  theme: Theme;
};

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined
);

export default function Dialog({
  isOpen,
  close,
  theme,
  children,
}: DialogProps) {
  if (!isOpen) return null;

  return (
    <DialogContext.Provider value={{ isOpen, close, theme }}>
      <S.Dialog onClick={close}>{children}</S.Dialog>
    </DialogContext.Provider>
  );
}

function useDialogContext() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("useDialogContext must be used within a Dialog");
  }

  return context;
}

Dialog.Wrapper = function DialogWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useDialogContext();

  return (
    <S.Wrapper theme={theme} onClick={(e) => e.stopPropagation()}>
      {children}
    </S.Wrapper>
  );
};

Dialog.Header = function DialogHeader({ title }: { title: string }) {
  const { theme, close } = useDialogContext();

  console.log("theme", theme);

  return (
    <S.Header>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <button onClick={close}>
        <Icon type="close" size={24} theme={theme} />
      </button>
    </S.Header>
  );
};

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
