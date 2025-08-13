import styled from "@emotion/styled";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

import { selectedBoardIdAtom } from "../../jotai/atom/board";
import { boardListQueryOptions } from "../../queryOptions/board";

import SidebarButton from "./sidebar-button";

import type { Board } from "../../types/board";

export default function BoardNavigationList() {
  const { data: boardList } = useSuspenseQuery(boardListQueryOptions);

  return (
    <nav>
      <S.NavigationList>
        {boardList.map((board) => (
          <NavigationItem key={board.id} board={board} />
        ))}
      </S.NavigationList>
    </nav>
  );
}

function NavigationItem({ board }: { board: Board }) {
  const setSelectedBoardId = useSetAtom(selectedBoardIdAtom);

  return (
    <li>
      <SidebarButton
        onClick={() => {
          setSelectedBoardId(board.id);
        }}
        left={
          <S.EmojiContainer bgColor={board.color}>
            {board.emoji}
          </S.EmojiContainer>
        }
        center={<span>{board.name}</span>}
      />
    </li>
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
