import { Link } from "react-router-dom";
import axios from "axios";
import {
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  jobTitleAtom,
  jobTagsAtom,
  jobRoleAtom,
  minSalaryAtom,
  maxSalaryAtom,
  salaryTypeAtom,
  jobEduAtom,
  jobExpAtom,
  jobTypeAtom,
  jobVacanciesAtom,
  jobExpirationAtom,
  jobLevelAtom,
  jobCountryAtom,
  jobCityAtom,
  jobDescAtom,
} from "../store/atoms/JobDetail.js";
import { jwtDecode } from "jwt-decode";

const JobInfo = () => {
  return (
    <RecoilRoot>
      <JobInfoInputs />
    </RecoilRoot>
  );
};

const JobInfoInputs = () => {
  return (
    <>
      <JobBasicDetail />
      <JobSalary />
      <AdvInfo />
      <JobLocation />
      <JobDescription />
      <FinalButton />
    </>
  );
};

const JobBasicDetail = () => {
  const Education = ["UG", "PG", "Masters", "Gawaar"];

  const setJobTitle = useSetRecoilState(jobTitleAtom);
  const setJobTags = useSetRecoilState(jobTagsAtom);
  const setJobRole = useSetRecoilState(jobRoleAtom);

  return (
    <>
      <div className="h-auto py-8 bg-[#f7f7f8]">
        <div className="h-1/5 mt-16 font-semibold text-4xl text-center lg:text-left mx-8 lg:mx-16">
          Job Details
        </div>
        <div className=" mt-8 mx-16 flex justify-between items-center">
          <SmallInputBoxes
            style="w-full"
            label="Job Title"
            placeholder=""
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
          />
        </div>

        <div className="  mx-16 flex justify-between items-center">
          <SmallInputBoxes
            style="w-[49%]"
            label="Job Tags"
            placeholder=""
            onChange={(e) => {
              setJobTags(e.target.value);
            }}
          />

          <SmallDropdowns
            style="w-[49%]"
            label="Job Role"
            options={Education}
            onChange={(e) => {
              setJobRole(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

const JobSalary = () => {
  const setMinSalary = useSetRecoilState(minSalaryAtom);
  const setMaxSalary = useSetRecoilState(maxSalaryAtom);
  const setSalaryType = useSetRecoilState(salaryTypeAtom);

  const Education = ["UG", "PG", "Masters", "Gawaar"];
  return (
    <>
      <div className=" h-auto bg-[#f7f7f8]">
        <div className="h-1/5 font-semibold text-xl text-center lg:text-left mx-8 lg:mx-16">
          Salary
        </div>

        <div className="  mx-16 flex justify-between items-center">
          <SmallInputBoxes
            style="w-[32%]"
            label="Min Salary"
            placeholder=""
            onChange={(e) => {
              setMinSalary(e.target.value);
            }}
          />

          <SmallInputBoxes
            style="w-[32%]"
            label="Max Salary"
            placeholder=""
            onChange={(e) => {
              setMaxSalary(e.target.value);
            }}
          />

          <SmallDropdowns
            style="w-[32%]"
            label="Salary Type"
            options={Education}
            onChange={(e) => {
              setSalaryType(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

const AdvInfo = () => {
  const setJobEdu = useSetRecoilState(jobEduAtom);
  const setJobExp = useSetRecoilState(jobExpAtom);
  const setJobType = useSetRecoilState(jobTypeAtom);
  const setJobVacancy = useSetRecoilState(jobVacanciesAtom);
  const setJobExpiration = useSetRecoilState(jobExpirationAtom);
  const setJobLevel = useSetRecoilState(jobLevelAtom);

  const Education = ["UG", "PG", "Masters", "Gawaar"];
  return (
    <>
      <div className=" pt-5 h-auto bg-[#f7f7f8]">
        <div className="h-1/5 font-semibold text-xl text-center lg:text-left mx-8 lg:mx-16">
          Advance Information
        </div>

        <div className="  mx-16 flex justify-between items-center">
          <SmallDropdowns
            style="w-[32%]"
            label="Education"
            options={Education}
            onChange={(e) => {
              setJobEdu(e.target.value);
            }}
          />
          <SmallDropdowns
            style="w-[32%]"
            label="Experience"
            options={Education}
            onChange={(e) => {
              setJobExp(e.target.value);
            }}
          />
          <SmallDropdowns
            style="w-[32%]"
            label="Job Type"
            options={Education}
            onChange={(e) => {
              setJobType(e.target.value);
            }}
          />
        </div>

        <div className="  mx-16 flex justify-between items-center">
          <SmallInputBoxes
            style="w-[32%]"
            label="Vacancies"
            options={Education}
            onChange={(e) => {
              setJobVacancy(e.target.value);
            }}
          />
          <div className=" w-[32%]">
            <h1 className=" text-sm font-medium">Expiration</h1>
            <input
              className="w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
              type="date"
              onChange={(e) => {
                setJobExpiration(e.target.value);
              }}
            />
          </div>
          <SmallDropdowns
            style="w-[32%]"
            label="Job Level"
            options={Education}
            onChange={(e) => {
              setJobLevel(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

const JobLocation = () => {
  const setJobCountry = useSetRecoilState(jobCountryAtom);
  const setJobCity = useSetRecoilState(jobCityAtom);

  const Education = ["UG", "PG", "Masters", "Gawaar"];
  return (
    <>
      <div className=" h-[200px] my-8 mx-16 rounded-lg bg-[#f1f2f4]">
        <div className="py-7 font-semibold text-xl text-center lg:text-left lg:mx-8">
          Location
        </div>

        <div className=" flex justify-between items-center text-center lg:text-left lg:mx-8">
          <SmallDropdowns
            style="w-[49%]"
            label="Country"
            options={Education}
            onChange={(e) => {
              setJobCountry(e.target.value);
            }}
          />

          <SmallDropdowns
            style="w-[49%]"
            label="City"
            options={Education}
            onChange={(e) => {
              setJobCity(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

const JobDescription = () => {
  const setJobDesc = useSetRecoilState(jobDescAtom);
  return (
    <>
      <div className=" py-10 h-auto bg-[#f7f7f8]">
        <div className=" pb-4 h-1/5 font-semibold text-xl text-center lg:text-left mx-8 lg:mx-16">
          Job Description
        </div>

        <div className="  mx-16 flex justify-between items-center">
          <textarea
            className="w-full my-2 py-2 border-2 h-[300px] rounded-md px-5 outline-none"
            type="text"
            onChange={(e) => {
              setJobDesc(e.target.value);
            }}
            placeholder="Write down your biography here. Let the employers know who you are..."
          />
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

const FinalButton = () => {
  const jobTitle = useRecoilValue(jobTitleAtom);
  const jobTags = useRecoilValue(jobTagsAtom);
  const jobRole = useRecoilValue(jobRoleAtom);
  const minSalary = useRecoilValue(minSalaryAtom);
  const maxSalary = useRecoilValue(maxSalaryAtom);
  const salaryType = useRecoilValue(salaryTypeAtom);
  const jobEdu = useRecoilValue(jobEduAtom);
  const jobExp = useRecoilValue(jobExpAtom);
  const jobType = useRecoilValue(jobTypeAtom);
  const jobVacancy = useRecoilValue(jobVacanciesAtom);
  const jobExpiration = useRecoilValue(jobExpirationAtom);
  const jobLevel = useRecoilValue(jobLevelAtom);
  const jobCountry = useRecoilValue(jobCountryAtom);
  const jobCity = useRecoilValue(jobCityAtom);
  const jobDesc = useRecoilValue(jobDescAtom);

  const isDataComplete = [
    jobTitle,
    jobTags,
    jobRole,
    minSalary,
    maxSalary,
    salaryType,
    jobEdu,
    jobExp,
    jobType,
    jobVacancy,
    jobExpiration,
    jobLevel,
    jobCountry,
    jobCity,
    jobDesc,
  ].every((field) => field);

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem("token");
    const decodedToken = jwtDecode(accessToken);
    const LoggedInUserId = decodedToken.userId;
    const postData = {
      jobTitle,
      jobTags,
      jobRole,
      salaryFrom: minSalary,
      salaryTo: maxSalary,
      salaryType,
      jobEdu,
      jobExp,
      jobType,
      vacancies: jobVacancy,
      jobExpiration,
      jobLevel,
      jobCountry,
      jobCity,
      jobDesc,
      postedBy: LoggedInUserId,
    };

    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/postingjob/createPostingJob",
        postData
      );
      console.log("Data posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="w-full h-20 mb-10 flex justify-center items-center">
      <button
        onClick={handleSubmit}
        disabled={!isDataComplete}
        className={`bg-[#0a65cc] shadow hover:shadow-xl text-white w-1/3 h-14 rounded-lg font-semibold text-xl ${
          !isDataComplete ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Post Job
      </button>
    </div>
  );
};

export default JobInfo;
