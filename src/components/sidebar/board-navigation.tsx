import styled from "@emotion/styled";
import { useSuspenseQuery } from "@tanstack/react-query";

import { boardListQueryOptions } from "../../queryOptions/board";

import SidebarButton from "./sidebar-button";

export default function BoardNavigation() {
  const { data: boardList } = useSuspenseQuery(boardListQueryOptions);
  return (
    <nav>
      <S.NavigationList>
        {boardList.map((item) => (
          <li key={item.name}>
            <SidebarButton
              left={
                <S.EmojiContainer bgColor={item.color}>
                  {item.emoji}
                </S.EmojiContainer>
              }
              center={<span>{item.name}</span>}
            />
          </li>
        ))}
      </S.NavigationList>
    </nav>
  );
}

const S = {
  NavigationList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,

  EmojiContainer: styled.div<{ bgColor: string }>`
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
