import styled from "@emotion/styled";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getBoardListQueryOptions } from "../queryOptions";

import { BoardTitle, NavigationButton } from "./sidebar";

export default function BoardList() {
  const { data: boardList } = useSuspenseQuery(getBoardListQueryOptions());

  return (
    <BoardListContainer>
      {boardList.map((item) => (
        <li key={item.name}>
          <NavigationButton>
            <EmojiContainer bgColor={item.color}>{item.emoji}</EmojiContainer>
            <BoardTitle>{item.name}</BoardTitle>
          </NavigationButton>
        </li>
      ))}
    </BoardListContainer>
  );
}

const BoardListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const EmojiContainer = styled.div<{ bgColor: string }>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
