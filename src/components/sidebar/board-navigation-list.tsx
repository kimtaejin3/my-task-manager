import styled from "@emotion/styled";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

import { selectedBoardIdAtom } from "../../jotai/atom/board";
import { boardListQueryOptions } from "../../queryOptions/board";
import colors from "../../styles/color";

import SidebarButton from "./sidebar-button";

import type { Board } from "../../types/board";

export default function BoardNavigationList() {
  const { data: boardList } = useSuspenseQuery(boardListQueryOptions);

  return (
    <nav>
      <S.NavigationList>
        {boardList.map((board, index) => (
          <NavigationItem key={board.id} board={board} index={index} />
        ))}
      </S.NavigationList>
    </nav>
  );
}

function NavigationItem({ board, index }: { board: Board; index: number }) {
  const [selectedBoardId, setSelectedBoardId] = useAtom(selectedBoardIdAtom);

  return (
    <S.NavigationItem isSelected={selectedBoardId === board.id || index === 0}>
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
    </S.NavigationItem>
  );
}

const S = {
  NavigationList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,

  NavigationItem: styled.li<{ isSelected: boolean }>`
    border: 2px solid
      ${(props) => (props.isSelected ? colors.blueLight : "transparent")};
    border-radius: 99px;
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
