import { useState, useRef, useEffect, createContext, useContext } from "react";

import styled from "@emotion/styled";

import typography from "../../styles/font";

import type { Theme } from "@emotion/react";

//context
interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  theme: Theme;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

export default function Dropdown({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.DropdownContainer ref={dropdownRef} theme={theme}>
      <DropdownContext.Provider value={{ isOpen, setIsOpen, theme }}>
        {children}
      </DropdownContext.Provider>
    </S.DropdownContainer>
  );
}

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a Dropdown component");
  }
  return context;
};

Dropdown.Trigger = function DropdownTrigger({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { isOpen, setIsOpen, theme } = useDropdown();

  return (
    <S.DropdownTrigger
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      theme={theme}
      name={name}
    >
      {children}
    </S.DropdownTrigger>
  );
};

Dropdown.List = function DropdownList({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, theme } = useDropdown();

  if (!isOpen) return null;

  return <S.DropdownList theme={theme}>{children}</S.DropdownList>;
};

Dropdown.Item = function DropdownItem({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  const { theme, setIsOpen } = useDropdown();

  return (
    <S.DropdownItem
      onClick={() => {
        onClick();
        setIsOpen(false);
      }}
      theme={theme}
    >
      {children}
    </S.DropdownItem>
  );
};

const S = {
  DropdownContainer: styled.div<{ theme: Theme }>`
    position: relative;
    width: 100%;
    user-select: none;
  `,

  DropdownTrigger: styled.button<{ theme: Theme }>`
    display: flex;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid ${(props) => props.theme.themeValue.tertiary};
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    ${typography.bold14}
  `,

  DropdownArrow: styled.span<{ isOpen: boolean }>`
    margin-left: auto;
    font-size: 10px;
    transition: transform 0.2s ease;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  `,

  DropdownList: styled.ul<{ theme: Theme }>`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 10px;
    padding: 0;
    list-style: none;
    background-color: ${(props) => props.theme.themeValue.tertiary};
    border-radius: 4px;
    z-index: 10;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,

  DropdownItem: styled.li<{ theme: Theme }>`
    display: flex;
    align-items: center;
    padding: 10px 12px;
    cursor: pointer;
    ${typography.bold14}

    &:hover {
      background-color: ${(props) => props.theme.themeValue.secondary};
    }
  `,
};
