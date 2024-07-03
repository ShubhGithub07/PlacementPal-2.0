import { atom } from "recoil";
import axios from "axios";

// axios.get("API_URL").then((res) => {

//  })

export const logoUrlAtom = atom({
  key: "logoUrlAtom",
  default: "https://via.placeholder.com/150?text=No+Logo",
});
export const bannerUrlAtom = atom({
  key: "bannerUrlAtom",
  default: "",
});
export const companyNameAtom = atom({
  key: "companyNameAtom",
  default: "",
});
export const companyAboutUsAtom = atom({
  key: "companyAboutUsAtom",
  default: "",
});
export const companyOrganizationAtom = atom({
  key: "companyOrganizationAtom",
  default: "",
});

export const companyIndustryAtom = atom({
  key: "companyIndustryAtom",
  default: "",
});

export const companyTeamSizeAtom = atom({
  key: "companyTeamSizeAtom",
  default: "",
});

export const companyEstbAtom = atom({
  key: "companyEstbAtom",
  default: "",
});

export const companyWebsiteAtom = atom({
  key: "companyWebsiteAtom",
  default: "",
});

export const companyVisionAtom = atom({
  key: "companyVisionAtom",
  default: "",
});

export const companySocialLinksAtom = atom({
  key: "companySocialLinksAtom",
  default: [
    {
      platform: "",
      url: "",
    },
  ],
});

export const companyLocationAtom = atom({
  key: "companyLocationAtom",
  default: "",
});

export const companyPhoneAtom = atom({
  key: "companyPhoneAtom",
  default: "",
});

export const companyEmailAtom = atom({
  key: "companyEmailAtom",
  default: "",
});
