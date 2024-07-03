import { atom } from "recoil";

export const loggedInUserAtom = atom({
  key: "loggedInUserAtom",
  default: null,
});

export const loggedInUserIdAtom = atom({
  key: "loggedInUserIdAtom",
  default: null,
});
