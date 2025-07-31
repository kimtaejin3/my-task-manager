import styled from "@emotion/styled";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getBoardListQueryOptions } from "../queryOptions";

import { BoardTitle } from "./sidebar";
import SidebarButton from "./sidebar-button";

export default function SidebarBoardButtonList() {
  const { data: boardList } = useSuspenseQuery(getBoardListQueryOptions());
  return (
    <BoardListContainer>
      {boardList.map((item) => (
        <li key={item.name}>
          <SidebarButton
            left={
              <EmojiContainer bgColor={item.color}>{item.emoji}</EmojiContainer>
            }
            content={<BoardTitle>{item.name}</BoardTitle>}
          />
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

// const NavigationButton = styled.button`
//   box-sizing: border-box;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   padding: 8px;
//   border-radius: 46px;
//   align-items: center;
// `;
