import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { overlay } from "overlay-kit";

import colors from "../../styles/color";
import typography from "../../styles/font";
import EditTaskDialog from "../dialogs/edit-task-dialog";

import type { Task } from "../../types/task";

interface TaskCardProps extends Task {}

export default function TaskCard(task: TaskCardProps) {
  const { title, tags, background } = task;

  const theme = useTheme();

  return (
    <S.Card
      onClick={() => {
        overlay.open(({ isOpen, unmount }) => {
          return (
            <EditTaskDialog
              isOpen={isOpen}
              close={unmount}
              task={task}
              theme={theme}
            />
          );
        });
      }}
    >
      <S.Content>
        {background && (
          <S.BackgroundImage>
            <img src={background} alt="" />
          </S.BackgroundImage>
        )}
        <S.Title>{title}</S.Title>
        {tags.length > 0 && (
          <S.TagList>
            {tags.map((tag) => {
              const { textColor, backgroundColor } =
                get_tag_name_color_map(tag);

              return (
                <S.Tag
                  key={tag}
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                >
                  {tag}
                </S.Tag>
              );
            })}
          </S.TagList>
        )}
      </S.Content>
    </S.Card>
  );
}

const S = {
  Card: styled.div`
    background: ${(props) => props.theme.themeValue.primary};
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    cursor: pointer;
  `,

  BackgroundImage: styled.div`
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
  `,

  Content: styled.div`
    padding: 12px;
  `,

  Title: styled.h3`
    ${typography.medium14}
    margin: 0 0 8px 0;
  `,

  TagList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  `,

  Tag: styled.span<{
    textColor: string;
    backgroundColor: string;
  }>`
    ${typography.medium12}
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.backgroundColor};
    padding: 2px 8px;
    border-radius: 4px;
  `,
};

function get_tag_name_color_map(tag_name: string) {
  switch (tag_name) {
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
