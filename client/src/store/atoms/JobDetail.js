import { atom } from "recoil";
import axios from "axios";

// axios.get("API_URL").then((res) => {

//  })

export const jobTitleAtom = atom({
  key: "jobTitleAtom",
  default: "",
});

export const jobTagsAtom = atom({
  key: "jobTagsAtom",
  default: "",
});

export const jobRoleAtom = atom({
  key: "jobRoleAtom",
  default: "",
});

export const minSalaryAtom = atom({
  key: "minSalaryAtom",
  default: "",
});

export const maxSalaryAtom = atom({
  key: "maxSalaryAtom",
  default: "",
});

export const salaryTypeAtom = atom({
  key: "salaryTypeAtom",
  default: "",
});

export const jobEduAtom = atom({
  key: "jobEduAtom",
  default: "",
});

export const jobExpAtom = atom({
  key: "jobExpAtom",
  default: "",
});

export const jobTypeAtom = atom({
  key: "jobTypeAtom",
  default: "",
});

export const jobVacanciesAtom = atom({
  key: "jobVacanciesAtom",
  default: "",
});

export const jobExpirationAtom = atom({
  key: "jobExpirationAtom",
  default: "",
});

export const jobLevelAtom = atom({
  key: "jobLevelAtom",
  default: "",
});

export const jobCountryAtom = atom({
  key: "jobCountryAtom",
  default: "",
});

export const jobCityAtom = atom({
  key: "jobCityAtom",
  default: "",
});

export const jobDescAtom = atom({
  key: "jobDescAtom",
  default: "",
});
