import { InputBoxes } from "./Signing";
import axios from "axios";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import {
  fullNameAtom,
  headlineAtom,
  experienceAtom,
  educationAtom,
  personalWebsiteAtom,
  nationalityAtom,
  DOBAtom,
  genderAtom,
  martialStatusAtom,
  userSocialLinksAtom,
  biographyAtom,
  locationAtom,
  phoneAtom,
  emailAtom,
} from "../store/atoms/UserProfile.js";
import SocialLinksForm from "./UserSocialLinks.jsx";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  return (
    <RecoilRoot>
      <UserInfoInputs />
    </RecoilRoot>
  );
};

const UserInfoInputs = () => {
  return (
    <>
      <BasicInformation />
      <PersonalInformation />

      <div className=" pb-14 bg-[#f7f7f8]">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className=" mt-5 mb-3 text-lg font-semibold">Social Links</div>
          <SocialLinksForm />
        </div>
      </div>
      <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
        <div className=" mt-5 mb-3 text-lg font-semibold">Contact Info</div>
        <ContactInfoForm />
        <FinalButton />
      </div>
    </>
  );
};

const BasicInformation = () => {
  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-14">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className="mt-10 mb-3 font-semibold text-4xl text-center lg:text-left">
            User Info
          </div>
          <div className=" mt-5 mb-3 text-lg font-semibold">
            Basic Information
          </div>
          <div className=" w-full flex">
            <div className=" w-1/4">
              <p>Profile Picture</p>
              <div className=" w-[90%] h-[90%] bg-gray-200 rounded-lg"></div>
            </div>

            <FormComponent />
          </div>
        </div>
      </div>
    </>
  );
};

const PersonalInformation = () => {
  const nationality = [
    'India'
  ];
  const Gender = ["Male", "Female"]
  const maritalStatusOptions = [
    "Single",
    "Married",
    "Divorced",
    "Widowed",
    "Separated"
  ];
  const [userNationality, setUserNationality] = useRecoilState(nationalityAtom);
  const [userDOB, setUserDOB] = useRecoilState(DOBAtom);
  const [userGender, setUserGender] = useRecoilState(genderAtom);
  const [userMStatus, setUserMStatus] = useRecoilState(martialStatusAtom);
  const [userBio, setUserBio] = useRecoilState(biographyAtom);
  console.log(userDOB);

  return (
    <>
      <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
        <div className=" mt-5 mb-3 text-lg font-semibold">
          Personal Information
        </div>
        <div className=" mt-3 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <SmallDropdowns
              style="w-[49%]"
              label="Nationality"
              options={nationality}
              onChange={(e) => {
                setUserNationality(e.target.value);
              }}
            />
            <div className=" w-[49%] mt-3">
              <h1 className=" text-sm font-medium">Date of Birth</h1>
              <input
                className="w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
                type="date"
                placeholder=""
                onChange={(e) => {
                  setUserDOB(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <SmallDropdowns
              style="w-[49%]"
              label="Gender"
              options={Gender}
              onChange={(e) => {
                setUserGender(e.target.value);
              }}
            />

            <SmallDropdowns
              style="w-[49%]"
              label="Marital Status"
              options={maritalStatusOptions}
              onChange={(e) => {
                setUserMStatus(e.target.value);
              }}
            />
          </div>

          <div className=" my-5">
            <h1 className=" text-sm font-medium">Biography</h1>
            <textarea
              className="w-full my-2 py-2 border-2 h-[300px] rounded-md px-5 outline-none"
              type="text"
              onChange={(e) => {
                setUserBio(e.target.value);
              }}
              placeholder="Write down your biography here. Let the employers know who you are..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

const FormComponent = () => {
  return (
    <>
      <div className=" w-3/4 h-1/3 mx-5">
        <MultipleSmallInputBox />
      </div>
    </>
  );
};

const MultipleSmallInputBox = () => {
  const Experience = ["Fresher", "1-2 year", "less than 5 years", "5-10 years", 'more than 10 years'];
  const Education = [
    "Associate's Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate Degree",
    "High School Diploma",
    "Vocational Training",
    "Certification"
  ];
  const [userFullname, setUserFullname] = useRecoilState(fullNameAtom);
  const [userHeadline, setUserHeadline] = useRecoilState(headlineAtom);
  const [userExp, setUserExp] = useRecoilState(experienceAtom);
  const [userEducation, setUserEducation] = useRecoilState(educationAtom);
  const [userWebsite, setUserWebsite] = useRecoilState(personalWebsiteAtom);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <SmallInputBoxes
          style="w-[49%]"
          label="Full name"
          placeholder=""
          onChange={(e) => {
            setUserFullname(e.target.value);
          }}
        />
        <SmallInputBoxes
          style="w-[49%]"
          label="Title"
          placeholder=""
          onChange={(e) => {
            setUserHeadline(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <SmallDropdowns
          style="w-[49%]"
          label="Experience"
          options={Experience}
          onChange={(e) => {
            setUserExp(e.target.value);
          }}
        />
        <SmallDropdowns
          style="w-[49%]"
          label="Education"
          options={Education}
          onChange={(e) => {
            setUserEducation(e.target.value);
          }}
        />
      </div>
      <SmallInputBoxes
        style=""
        label="Personal Website"
        onChange={(e) => {
          setUserWebsite(e.target.value);
        }}
        placeholder="Paste link here"
      />
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
          name="users"
          id="users"
          onChange={onChange}
          className=" w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
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
  const [userLocation, setUserLocation] = useRecoilState(locationAtom);
  const [userPhone, setUserPhone] = useRecoilState(phoneAtom);
  const [userEmail, setUserEmail] = useRecoilState(emailAtom);

  return (
    <>
      <SmallInputBoxes
        style="w-full my-5"
        label="Location"
        placeholder="Current city"
        onChange={(e) => {
          setUserLocation(e.target.value);
        }}
      />
      <SmallInputBoxes
        style="w-full mb-5"
        label="Phone"
        placeholder="Phone number"
        onChange={(e) => {
          setUserPhone(e.target.value);
        }}
      />
      <SmallInputBoxes
        style="w-full mb-5"
        label="Email"
        placeholder="Email address"
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
      />
    </>
  );
};

const FinalButton = () => {
  const navigate = useNavigate();
  const userFullname = useRecoilValue(fullNameAtom);
  const userHeadline = useRecoilValue(headlineAtom);
  const userExp = useRecoilValue(experienceAtom);
  const userEducation = useRecoilValue(educationAtom);
  const userWebsite = useRecoilValue(personalWebsiteAtom);
  const userNationality = useRecoilValue(nationalityAtom);
  const userDOB = useRecoilValue(DOBAtom);
  const userGender = useRecoilValue(genderAtom);
  const userMStatus = useRecoilValue(martialStatusAtom);
  const userSocialLinks = useRecoilValue(userSocialLinksAtom);
  const userBio = useRecoilValue(biographyAtom);
  const userLocation = useRecoilValue(locationAtom);
  const userPhone = useRecoilValue(phoneAtom);
  const userEmail = useRecoilValue(emailAtom);

  const isDataComplete = [
    userFullname,
    userHeadline,
    userExp,
    userEducation,
    userWebsite,
    userNationality,
    userDOB,
    userGender,
    userMStatus,
    userSocialLinks.every((link) => link.platform && link.url),
    userBio,
    userLocation,
    userPhone,
    userEmail,
  ].every((field) => field);

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem("token");
    const decodedToken = jwtDecode(accessToken);
    const LoggedInUserId = decodedToken.userId;
    const postData = {
      fullName: userFullname,
      headline: userHeadline,
      experience: userExp,
      education: userEducation,
      personalWebsite: userWebsite,
      nationality: userNationality,
      DOB: userDOB,
      gender: userGender,
      martialStatus: userMStatus,
      socialLinks: userSocialLinks,
      biography: userBio,
      location: userLocation,
      phone: userPhone,
      email: userEmail,
      postedBy: LoggedInUserId,
    };

    try {
      await axios
        .post(
          "http://localhost:7000/api/v1/userprofile/createUserProfile",
          postData
        )
        .then(navigate("/"))
        .catch((err) =>
          console.log(`Got this error while posting user profile : ${err}`)
        );
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

export default UserInfo;
