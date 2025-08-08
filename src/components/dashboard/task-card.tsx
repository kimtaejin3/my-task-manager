import React from "react";

import styled from "@emotion/styled";

import colors from "../../styles/color";
import typography from "../../styles/font";

import type { Task } from "../../types/task";

interface TaskCardProps extends Task {
  id: number;
}

//TODO: 임시객체, 서버 로직 변경함에 따라 제거 예정

const TAG_NAME_COLOR_MAP = {
  concept: {
    backgroundColor: colors.redLight,
    textColor: colors.redPrimary,
  },
  technical: {
    backgroundColor: colors.blueLight,
    textColor: colors.bluePrimary,
  },
  design: {
    backgroundColor: colors.yellowLight,
    textColor: colors.yellowPrimary,
  },
  "front-end": {
    backgroundColor: colors.greenLight,
    textColor: colors.greenPrimary,
  },
};

type TagName = keyof typeof TAG_NAME_COLOR_MAP;

export default function TaskCard({
  id,
  title,
  tags,
  background,
}: TaskCardProps) {
  return (
    <Card id={String(id)}>
      <Content>
        {background && (
          <BackgroundImage>
            <img src={background} alt="" />
          </BackgroundImage>
        )}
        <Title>{title}</Title>
        {tags.length > 0 && (
          <TagList>
            {tags.map((tag) => (
              <Tag
                key={tag}
                textColor={TAG_NAME_COLOR_MAP[tag as TagName].textColor}
                backgroundColor={
                  TAG_NAME_COLOR_MAP[tag as TagName].backgroundColor
                }
              >
                {tag}
              </Tag>
            ))}
          </TagList>
        )}
      </Content>
    </Card>
  );
}

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
  margin-bottom: 12px;
  border-radius: 12px;

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
  margin: 0 0 8px 0;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Tag = styled.span<{
  textColor: string;
  backgroundColor: string;
}>`
  ${typography.medium12}
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  padding: 2px 8px;
  border-radius: 4px;
`;
