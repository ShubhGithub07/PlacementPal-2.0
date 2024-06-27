import { createContext } from "react";
import { atom, selector } from "recoil";

export const firstNameAtom = atom({
  key: "firstNameAtom",
  default: "",
});
export const lastNameAtom = atom({
  key: "lastNameAtom",
  default: "",
});
export const emailAtom = atom({
  key: "emailAtom",
  default: "",
});
export const passwordAtom = atom({
  key: "passwordAtom",
  default: "",
});
export const confPasswordAtom = atom({
  key: "confPasswordAtom",
  default: "",
});
export const selectedAtom = atom({
  key: "selectedAtom",
  default: "Candidate",
});
