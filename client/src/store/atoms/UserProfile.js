import { atom, selector } from "recoil";
import axios from "axios";


export const fullNameAtom = atom({
    key: "fullNameAtom",
    default: "",
})

export const fullNameSelector = selector({
    key: 'fullNameSelector',
    get: async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/v1/user/fullName');
        return response.data.fullName;
      } catch (error) {
        console.error('Error fetching full name:', error);
        throw error;
      }
    },
  });

export const headlineAtom = atom({
    key: "headlineAtom",
    default: "",
})

export const experienceAtom = atom({
    key: "experienceAtom",
    default: "",
})

export const educationAtom = atom({
    key: "educationAtom",
    default: "",
})

export const personalWebsiteAtom = atom({
    key: "personalWebsiteAtom",
    default: "",
})

export const nationalityAtom = atom({
    key: "nationalityAtom",
    default: "",
})

export const DOBAtom = atom({
    key: "DOBAtom",
    default: "",
})

export const genderAtom = atom({
    key: "genderAtom",
    default: "",
})

export const martialStatusAtom = atom({
    key: "martialStatusAtom",
    default: "",
})

export const userSocialLinksAtom = atom({
    key: "userSocialLinksAtom",
    default: [
      {
        platform: "",
        url: "",
      },
    ],
  });

export const biographyAtom = atom({
    key: "biographyAtom",
    default: "",
})

export const locationAtom = atom({
    key: "locationAtom",
    default: "",
})

export const phoneAtom = atom({
    key: "phoneAtom",
    default: "",
})

export const emailAtom = atom({
    key: "emailAtom",
    default: "",
})

export const postedByAtom = atom({
    key: "postedByAtom",
    default: "",
})
