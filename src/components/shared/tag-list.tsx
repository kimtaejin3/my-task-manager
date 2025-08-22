import styled from "@emotion/styled";

import colors from "../../styles/color";

import Tag from "./tag";

interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <S.TagList>
      {tags.map((tag) => {
        return (
          <Tag
            key={tag}
            name={tag}
            tagStyles={getTagStyles({ tagName: tag })}
          />
        );
      })}
    </S.TagList>
  );
}

const S = {
  TagList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  `,
};

function getTagStyles({ tagName }: { tagName: string }) {
  switch (tagName) {
    case "concept":
      return {
        backgroundColor: colors.redLight,
        textColor: colors.redPrimary,
      };
    case "technical":
      return {
        backgroundColor: colors.blueLight,
        textColor: colors.bluePrimary,
      };
    case "design":
      return {
        backgroundColor: colors.yellowLight,
        textColor: colors.yellowPrimary,
      };
    case "front-end":
      return {
        backgroundColor: colors.greenLight,
        textColor: colors.greenPrimary,
      };
    default:
      return {
        backgroundColor: "#f0f0f0",
        textColor: "#333",
      };
  }
}
