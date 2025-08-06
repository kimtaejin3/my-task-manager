import React from "react";

import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

import type { Task } from "../../types/task";

export default React.memo(function TaskCard({
  id,
  title,
  tags,
  background,
}: {
  id: number;
} & Task) {
  return (
    <Card id={String(id)}>
      {background && (
        <BackgroundImage>
          <img src={background} alt="" />
        </BackgroundImage>
      )}
      <Content>
        <Title>{title}</Title>
        {tags.length > 0 && (
          <TagList>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagList>
        )}
      </Content>
    </Card>
  );
});

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  cursor: pointer;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 130px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 12px;
`;

const Title = styled.h3`
  ${typography.medium14}
  color: ${colors.gray};
  margin: 0 0 8px 0;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Tag = styled.span`
  ${typography.medium12}
  color: ${colors.gray};
  background: ${colors.gray};
  padding: 2px 8px;
  border-radius: 4px;
`;
