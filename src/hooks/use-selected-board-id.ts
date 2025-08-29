import { useAtom } from "jotai";

import { selectedBoardIdAtom } from "../jotai/atom/board";

// hooks/use-selected-board-id.ts
export default function useSelectedBoardId(defaultBoardId?: number) {
  const [selectedBoardId, setSelectedBoardId] = useAtom(selectedBoardIdAtom);

  // defaultBoardId가 제공되고 selectedBoardId가 null이면 defaultBoardId로 설정
  if (defaultBoardId !== undefined && selectedBoardId === null) {
    setSelectedBoardId(defaultBoardId);
  }

  return { selectedBoardId };
}
