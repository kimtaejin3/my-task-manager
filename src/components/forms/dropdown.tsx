import { useState, useRef, useEffect } from "react";

import styled from "@emotion/styled";

import typography from "../../styles/font";

import type { Theme } from "@emotion/react";

export default function Dropdown({
  theme,
  renderHeader,
  renderList,
}: {
  theme: Theme;
  renderHeader: () => React.ReactNode;
  renderList: () => React.ReactNode;
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
      <S.DropdownHeader onClick={() => setIsOpen(!isOpen)} theme={theme}>
        {renderHeader()}
      </S.DropdownHeader>

      {isOpen && <S.DropdownList theme={theme}>{renderList()}</S.DropdownList>}
    </S.DropdownContainer>
  );
}

const S = {
  DropdownContainer: styled.div<{ theme: Theme }>`
    position: relative;
    width: 100%;
    user-select: none;
  `,

  DropdownHeader: styled.div<{ theme: Theme }>`
    display: flex;
    align-items: center;
    padding: 12px;
    border: 2px solid ${(props) => props.theme.themeValue.tertiary};
    border-radius: 12px;
    cursor: pointer;
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
};
