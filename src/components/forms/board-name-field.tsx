import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

import type { Theme } from "@emotion/react";

export default function BoardNameField({
  theme,
  value,
  onChange,
}: {
  theme: Theme;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <fieldset>
      <S.Label id="boardNameLabel" htmlFor="boardName">
        Board name
      </S.Label>
      <BoardNameInput
        theme={theme}
        id="boardName"
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
}

function BoardNameInput({
  theme,
  value,
  id,
  onChange,
}: {
  theme: Theme;
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <S.Input
      theme={theme}
      type="text"
      id={id}
      placeholder="e.g: Default Board"
      value={value}
      onChange={onChange}
    />
  );
}

const S = {
  Label: styled.label`
    margin-bottom: 8px;
    display: block;

    ${typography.medium12}
    color: ${colors.gray};
  `,

  Legend: styled.legend`
    margin-bottom: 8px;
    display: block;

    ${typography.medium12}
    color: ${colors.gray};
  `,

  Input: styled.input<{ theme: Theme }>`
    width: 100%;
    background-color: inherit;
    color: ${(props) => props.theme.themeValue.text};
    ${typography.medium16}
    border: 2px solid ${(props) => props.theme.themeValue.tertiary};
    border-radius: 12px;
    padding: 12px;

    &:focus {
      outline: none;
    }
  `,

  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;
  `,

  LogoOption: styled.div`
    display: flex;
    align-items: center;
  `,

  LogoInput: styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
  `,

  LogoLabel: styled.label<{ color: string; isSelected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    cursor: pointer;
    border: 2px solid
      ${(props) => (props.isSelected ? colors.selectionRed : colors.white)};
  `,

  ButtonContainer: styled.div`
    display: flex;
    gap: 12px;
  `,

  SubmitButton: styled.button`
    ${typography.medium14}
    background-color: ${colors.blue};
    color: ${colors.white};
    border: none;
    border-radius: 40px;
    width: 167px;
    padding: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,

  CancelButton: styled.button<{ theme: Theme }>`
    ${typography.medium14}
    color: ${(props) =>
      props.theme.themeType === "light" ? colors.blueMiddle : colors.gray};
    border: 2px solid
      ${(props) =>
        props.theme.themeType === "light" ? colors.blueMiddle : colors.gray};
    width: 92px;
    text-align: center;
    border-radius: 40px;
    padding: 12px;
    cursor: pointer;
  `,
};
