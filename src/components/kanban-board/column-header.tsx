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
    <S.Flex>
      <S.ColorBox color={color} />
      <span>
        {title} ({count})
      </span>
    </S.Flex>
  );
}

const S = {
  ColorBox: styled.div<{ color: string }>`
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
  `,

  Flex: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    ${typography.bold14}
  `,
};
