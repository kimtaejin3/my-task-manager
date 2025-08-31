import styled from "@emotion/styled";

import getTagStyles from "../../utils/get-tag-styles";

import Tag from "./tag";

import type { TAG } from "../../types/task";

interface TagListProps {
  tags: TAG[];
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
