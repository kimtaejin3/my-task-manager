import { atom } from "jotai";

const selectedBoardIdAtom = atom<number | null>(null);

export { selectedBoardIdAtom };
