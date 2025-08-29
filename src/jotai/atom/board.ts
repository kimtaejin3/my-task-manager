import { atom } from "jotai";

//TODO: 네이밍 selected -> current
const selectedBoardIdAtom = atom<number | null>(null);

export { selectedBoardIdAtom };
