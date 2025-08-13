import { atom } from "jotai";

const currentBoardIdAtom = atom<string | null>(null);

export { currentBoardIdAtom };
