import { useState } from "react";

import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

import Dialog from "./dialog";

import type { Theme } from "@emotion/react";

export default function AddNewBoardDialog({
  isOpen,
  close,
  theme,
}: {
  isOpen: boolean;
  close: () => void;
  theme: Theme;
}) {
  return (
    <Dialog isOpen={isOpen} close={close} theme={theme}>
      <Dialog.Wrapper>
        <Dialog.Header title="New Board" />
        <AddNewBoardForm theme={theme} />
      </Dialog.Wrapper>
    </Dialog>
  );
}

const LOGOS = [
  { id: 0, emoji: "🛠️", color: colors.logoRed },
  { id: 1, emoji: "⚙️", color: colors.logoOrange },
  { id: 2, emoji: "🚀", color: colors.logoYellow },
  { id: 3, emoji: "🔑", color: colors.logoGreen },
  { id: 4, emoji: "⏰", color: colors.logoBlue },
  { id: 5, emoji: "⛑️", color: colors.logoPurple },
  { id: 6, emoji: "🧑‍💻", color: colors.logoRed },
  { id: 7, emoji: "👀", color: colors.logoOrange },
  { id: 8, emoji: "🥘", color: colors.logoYellow },
  { id: 9, emoji: "️️✈️", color: colors.logoGreen },
  { id: 10, emoji: "👩🏻‍🎨", color: colors.logoPurple },
  { id: 11, emoji: "⭐️", color: colors.logoRed },
  { id: 12, emoji: "📚", color: colors.logoOrange },
];

function AddNewBoardForm({ theme }: { theme: Theme }) {
  const [formData, setFormData] = useState({
    boardName: "",
    boardLogo: 0,
  });

  return (
    <S.Form>
      <fieldset>
        <S.Label id="boardNameLabel" htmlFor="boardName">
          Board name
        </S.Label>
        <BoardNameInput
          theme={theme}
          id="boardName"
          value={formData.boardName}
          onChange={(e) =>
            setFormData({ ...formData, boardName: e.target.value })
          }
        />
      </fieldset>
      <fieldset>
        <S.Label id="boardLogoLabel">Logo</S.Label>
        <S.Grid role="radiogroup" aria-labelledby="boardLogoLabel">
          {LOGOS.map((logo) => (
            <BoardLogoInput
              key={logo.id}
              logo={logo}
              checked={formData.boardLogo === logo.id}
              onChange={(e) =>
                setFormData({ ...formData, boardLogo: Number(e.target.value) })
              }
            />
          ))}
        </S.Grid>
      </fieldset>
      <S.ButtonContainer>
        <S.SubmitButton type="submit">
          Create Board
          {/* TODO(리팩토링): 아이콘 컴포넌트 수정 필요 */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
              stroke="#FEF7EE"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </S.SubmitButton>
        <S.CancelButton theme={theme} type="button">
          Cancel
        </S.CancelButton>
      </S.ButtonContainer>
    </S.Form>
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

function BoardLogoInput({
  logo,
  checked,
  onChange,
}: {
  logo: { id: number; emoji: string; color: string };
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <S.LogoOption key={logo.id}>
      <S.LogoInput
        type="radio"
        id={`logo-${logo.id}`}
        name="boardLogo"
        value={logo.id}
        aria-describedby="logo-selection-description"
        checked={checked}
        onChange={onChange}
      />
      <S.LogoLabel
        isSelected={checked}
        htmlFor={`logo-${logo.id}`}
        color={logo.color}
      >
        <span role="img" aria-label={`Logo option ${logo.emoji}`}>
          {logo.emoji}
        </span>
      </S.LogoLabel>
    </S.LogoOption>
  );
}

const S = {
  Form: styled.form`
    margin: 30px 0 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,

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

  ScreenReaderText: styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
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
