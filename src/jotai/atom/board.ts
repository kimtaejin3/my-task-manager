import { atom } from "jotai";

const selectedBoardIdAtom = atom<string | null>(null);

export { selectedBoardIdAtom };
