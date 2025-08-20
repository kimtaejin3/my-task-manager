import styled from "@emotion/styled";

import { LOGOS } from "../../constants/board";
import colors from "../../styles/color";

import Label from "./label";

type BoardLogoSelectorProps = {
  selectedLogo: number;
  onChange: (logoId: number) => void;
};

export default function BoardLogoSelector({
  selectedLogo,
  onChange,
}: BoardLogoSelectorProps) {
  return (
    <fieldset>
      <Label id="boardLogoLabel" htmlFor="boardLogo">
        Logo
      </Label>
      <S.Grid role="radiogroup" aria-labelledby="boardLogoLabel">
        {LOGOS.map((logo) => (
          <BoardLogoInput
            key={logo.id}
            logo={logo}
            checked={selectedLogo === logo.id}
            onChange={(e) => onChange(Number(e.target.value))}
          />
        ))}
      </S.Grid>
    </fieldset>
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
};
