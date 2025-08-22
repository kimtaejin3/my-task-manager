import styled from "@emotion/styled";

import typography from "../../styles/font";

interface TagProps {
  name: string;
  tagStyles: {
    textColor: string;
    backgroundColor: string;
  };
}

export default function Tag({ name, tagStyles }: TagProps) {
  return (
    <S.Tag
      textColor={tagStyles.textColor}
      backgroundColor={tagStyles.backgroundColor}
    >
      {name}
    </S.Tag>
  );
}

const S = {
  Tag: styled.span<{ textColor: string; backgroundColor: string }>`
    ${typography.medium12}
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.backgroundColor};
    padding: 2px 8px;
    border-radius: 4px;
  `,
};
