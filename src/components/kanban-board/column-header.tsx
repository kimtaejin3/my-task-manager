import styled from "@emotion/styled";

import typography from "../../styles/font";

interface ColumnHeaderProps {
  title: string;
  count: number;
  color: string;
}

export default function ColumnHeader({
  title,
  count,
  color,
}: ColumnHeaderProps) {
  return (
    <S.Header>
      <S.ColorBox color={color} />
      <span>
        {title} ({count})
      </span>
    </S.Header>
  );
}

const S = {
  ColorBox: styled.div<{ color: string }>`
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
  `,

  Header: styled.header`
    display: flex;
    align-items: center;
    gap: 8px;
    ${typography.bold14}
  `,
};
