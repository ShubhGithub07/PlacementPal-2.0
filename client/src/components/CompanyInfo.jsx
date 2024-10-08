import { useState } from "react";
import axios from "axios";
import { InputBoxes } from "./Signing";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  logoUrlAtom,
  bannerUrlAtom,
  companyAboutUsAtom,
  companyEmailAtom,
  companyEstbAtom,
  companyIndustryAtom,
  companyLocationAtom,
  companyNameAtom,
  companyOrganizationAtom,
  companyPhoneAtom,
  companySocialLinksAtom,
  companyTeamSizeAtom,
  companyVisionAtom,
  companyWebsiteAtom,
} from "../store/atoms/CompanyProfile";
import SocialLinksForm from "./SocialLinks";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const CompanyInfo = () => {
  return (
    <RecoilRoot>
      <CompanyInfoInputs />
    </RecoilRoot>
  );
};

const CompanyInfoInputs = () => {
  return (
    <>
      <BasicInformation />
      <CompanyDetailsArea />
      <FoundingInfos />
      <SocialLinksArea />
      <FinalButton />
    </>
  );
};

const BasicInformation = () => {
  const [logoUrl, setLogoUrl] = useRecoilState(logoUrlAtom);
  const [bannerUrl, setBannerUrl] = useRecoilState(bannerUrlAtom);

  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-14">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className="mt-10 mb-3 font-semibold text-4xl text-center lg:text-left">
            Company Details
          </div>
          <div className=" mt-5 mb-3 text-lg font-semibold">
            Basic Information
          </div>
          <div className=" w-full h-[300px] flex">
            <div className=" w-1/4 h-full">
              <p>Company Logo</p>
              <div className=" mt-3 h-[68%] cursor-pointer bg-gray-200 rounded-lg">
                <img
                  className=" w-full rounded-lg h-[240px] "
                  src={logoUrl}
                  alt="Logo"
                />
                {/* <input
                  type="text"
                  onChange={(e) => {
                    setLogoUrl(e.target.value);
                  }}
                /> */}
                {/* <input type="file" onChange={handleLogoChange} /> */}
              </div>
            </div>

            <div className=" w-3/4 h-full ">
              <p className=" ml-8">Company Banner</p>
              <div className=" mx-10 mt-3 cursor-pointer h-[80%] bg-gray-200 rounded-lg">
                {/* <input
                  type="text"
                  onChange={(e) => {
                    setBannerUrl(e.target.value);
                  }}
                /> */}
                {/* <input type="file" onChange={handleBannerChange} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CompanyDetailsArea = () => {
  const [aboutUs, setAboutUs] = useRecoilState(companyAboutUsAtom);
  const [companyName, setCompanyName] = useRecoilState(companyNameAtom);
  return (
    <>
      <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
        <div className=" mt-5 mb-3 text-lg font-semibold">Company Details</div>
        <SmallInputBoxes
          style="w-full my-5"
          label="Company name"
          placeholder=""
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
        />
        <div className=" w-full mb-5">
          <h1 className=" text-sm font-medium">About us</h1>
          <textarea
            className="w-full my-2 py-2 border-2 h-[300px] rounded-md px-5 outline-none"
            type="text"
            placeholder="Write down your company here. Let the candidate know who you are..."
            onChange={(e) => {
              setAboutUs(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

const FoundingInfos = () => {
  const Experience = ["Level 1", "Level 2", "Level 3", "Level 4"];
  const organizationTypes = [
    "Corporation",
    "Nonprofit Organization",
    "Government Agency",
    "Private Company",
    "Public Company",
    "Partnership",
    "Sole Proprietorship",
    "Educational Institution",
    "Cooperative",
    "Limited Liability Company (LLC)",
    "Association",
    "Trust",
    "Joint Venture",
    "Freelancer",
    "Start-up",
  ];

  const industryTypes = [
    "Information Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Retail",
    "Transportation",
    "Construction",
    "Real Estate",
    "Hospitality",
    "Energy",
    "Telecommunications",
    "Agriculture",
    "Aerospace",
    "Automotive",
    "Pharmaceuticals",
    "Media and Entertainment",
    "Food and Beverage",
    "Legal Services",
    "Nonprofit",
  ];

  const teamSizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1001-5000 employees",
    "5001-10,000 employees",
    "10,001+ employees",
  ];

  const [companyOrg, setCompanyOrg] = useRecoilState(companyOrganizationAtom);
  const [companyIndust, setCompanyIndust] = useRecoilState(companyIndustryAtom);
  const [companyTeam, setCompanyTeam] = useRecoilState(companyTeamSizeAtom);
  const [companyEstab, setCompanyEstab] = useRecoilState(companyEstbAtom);
  const [companyWeb, setCompanyWeb] = useRecoilState(companyWebsiteAtom);
  const [companyVision, setCompanyVision] = useRecoilState(companyVisionAtom);

  return (
    <>
      <div className=" pb-14 bg-[#f7f7f8]">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className=" mt-5  mb-3 text-lg font-semibold">Founding Info</div>

          <div className="flex w-full flex-col md:flex-row justify-between">
            <SmallDropdowns
              style="w-[32%]"
              label="Organization Type"
              options={organizationTypes}
              onChange={(e) => {
                setCompanyOrg(e.target.value);
              }}
            />
            <SmallDropdowns
              style="w-[32%]"
              label="Industry Type"
              options={industryTypes}
              onChange={(e) => {
                setCompanyIndust(e.target.value);
              }}
            />
            <SmallDropdowns
              style="w-[32%]"
              label="Team Size"
              options={teamSizes}
              onChange={(e) => {
                setCompanyTeam(e.target.value);
              }}
            />
          </div>
          <div className=" w-full flex">
            <div className=" w-[32%]">
              <h1 className=" text-sm font-medium">Year of Establishment</h1>
              <input
                className="w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
                type="date"
                placeholder=""
                onChange={(e) => {
                  setCompanyEstab(e.target.value);
                }}
              />
            </div>
            <SmallInputBoxes
              style=" ml-7 w-[32%]"
              label="Company Website"
              placeholder="Paste link here"
              onChange={(e) => {
                setCompanyWeb(e.target.value);
              }}
            />
          </div>
          <div className=" w-full mt-3">
            <h1 className=" text-sm font-medium">Company Vision</h1>
            <textarea
              className="w-full my-2 py-2 border-2 h-[300px] rounded-md px-5 outline-none"
              type="text"
              placeholder="Write down your company here. Let the candidate know who you are..."
              onChange={(e) => {
                setCompanyVision(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const SmallInputBoxes = ({ style, label, placeholder, onChange }) => {
  return (
    <>
      <div className={`${style}`}>
        <h1 className=" text-sm font-medium">{label}</h1>
        <input
          className="w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
};

const SmallDropdowns = ({ style, label, options, onChange }) => {
  return (
    <>
      <div className={`${style} my-3`}>
        <h1 className=" text-sm font-medium">{label}</h1>
        <select
          name="cars"
          id="cars"
          className=" w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
          onChange={onChange}
        >
          <option>Select</option>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

const ContactInfoForm = () => {
  const [companyPhone, setCompanyPhone] = useRecoilState(companyPhoneAtom);
  const [companyLocation, setCompanyLocation] =
    useRecoilState(companyLocationAtom);
  const [companyEmail, setCompanyEmail] = useRecoilState(companyEmailAtom);

  return (
    <>
      <SmallInputBoxes
        style="w-full my-5"
        label="Location"
        placeholder=""
        onChange={(e) => {
          setCompanyLocation(e.target.value);
        }}
      />
      <SmallInputBoxes
        style="w-full mb-5"
        label="Phone"
        placeholder="Phone Number"
        onChange={(e) => {
          setCompanyPhone(e.target.value);
        }}
      />
      <SmallInputBoxes
        style="w-full mb-5"
        label="Mail"
        placeholder="Email address"
        onChange={(e) => {
          setCompanyEmail(e.target.value);
        }}
      />
    </>
  );
};

export default CompanyInfo;

const SocialLinksArea = () => {
  return (
    <>
      <div className=" pb-14">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className=" mt-5 mb-3 text-lg font-semibold">Social Links</div>
          <SocialLinksForm />
        </div>
      </div>

      <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
        <div className=" mt-5 mb-3 text-lg font-semibold">Contact Info</div>
        <ContactInfoForm />
      </div>
    </>
  );
};

const FinalButton = () => {
  const navigate = useNavigate();
  const logoUrl = useRecoilValue(logoUrlAtom);
  const bannerUrl = useRecoilValue(bannerUrlAtom);
  const companyAboutUs = useRecoilValue(companyAboutUsAtom);
  const companyEmail = useRecoilValue(companyEmailAtom);
  const companyEstb = useRecoilValue(companyEstbAtom);
  const companyIndustry = useRecoilValue(companyIndustryAtom);
  const companyLocation = useRecoilValue(companyLocationAtom);
  const companyName = useRecoilValue(companyNameAtom);
  const companyOrganization = useRecoilValue(companyOrganizationAtom);
  const companyPhone = useRecoilValue(companyPhoneAtom);
  const companySocialLinks = useRecoilValue(companySocialLinksAtom);
  const companyTeamSize = useRecoilValue(companyTeamSizeAtom);
  const companyVision = useRecoilValue(companyVisionAtom);
  const companyWebsite = useRecoilValue(companyWebsiteAtom);
  // const LoggedInUser = useRecoilValue(loggedInUserAtom);
  // const LoggedInUserId = useRecoilValue(loggedInUserIdAtom);

  const isDataComplete = [
    logoUrl,
    // bannerUrl,
    companyAboutUs,
    companyEmail,
    companyEstb,
    companyIndustry,
    companyLocation,
    companyName,
    companyOrganization,
    companyPhone,
    companySocialLinks.length > 0 &&
      companySocialLinks.every((link) => link.platform && link.url),
    companyTeamSize,
    companyVision,
    companyWebsite,
  ].every((field) => field);

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem("token");
    const decodedToken = jwtDecode(accessToken);
    const LoggedInUserId = decodedToken.userId;
    const postData = {
      logoUrl: logoUrl,
      aboutUs: companyAboutUs,
      email: companyEmail,
      established: companyEstb,
      industry: companyIndustry,
      location: companyLocation,
      name: companyName,
      organizationType: companyOrganization,
      phone: companyPhone,
      socialLinks: companySocialLinks,
      teamSize: companyTeamSize,
      vision: companyVision,
      website: companyWebsite,
      postedBy: LoggedInUserId,
    };

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_BACKEND_URI
        }/api/v1/companyprofile/createCompanyProfile`,
        postData
      );
      navigate("/");
      console.log("Data posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <div className=" w-full h-20 mb-10 flex justify-center items-center">
        <button
          onClick={handleSubmit}
          disabled={!isDataComplete}
          className={`bg-[#0a65cc] shadow hover:shadow-xl text-white w-1/3 h-14 rounded-lg font-semibold text-xl ${
            !isDataComplete ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Submit
        </button>
      </div>
    </>
  );
};
