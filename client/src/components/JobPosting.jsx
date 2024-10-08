import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
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
import { useState } from "react";

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
  const jobRoles = [
    "Software Developer",
    "Data Analyst",
    "Project Manager",
    "Graphic Designer",
    "Marketing Manager",
    "Sales Executive",
    "Customer Support Representative",
    "HR Manager",
    "Product Manager",
    "Business Analyst",
    "Web Developer",
    "Systems Administrator",
    "Content Writer",
    "UX/UI Designer",
    "Network Engineer",
  ];

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
            options={jobRoles}
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

  const salaryTypes = [
    "Annual",
    "Monthly",
    "Hourly",
    "Contract",
    "Commission-based",
    "Freelance",
  ];

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
            options={salaryTypes}
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

  const Education = [
    "Secondary School Certificate (SSC) / 10th Standard",
    "Higher Secondary Certificate (HSC) / 12th Standard",
    "Diploma in Engineering",
    "Bachelor of Arts (BA)",
    "Bachelor of Science (BSc)",
    "Bachelor of Commerce (BCom)",
    "Bachelor of Engineering (BE) / Bachelor of Technology (BTech)",
    "Bachelor of Business Administration (BBA)",
    "Master of Arts (MA)",
    "Master of Science (MSc)",
    "Master of Business Administration (MBA)",
    "Master of Technology (MTech)",
    "Doctor of Philosophy (PhD)",
    "Chartered Accountant (CA)",
    "Certified Information Systems Auditor (CISA)",
  ];

  const experienceLevels = [
    "Internship",
    "Entry Level",
    "Junior",
    "Mid Level",
    "Senior",
    "Lead",
    "Manager",
    "Director",
    "VP",
    "Executive",
  ];

  const jobTypes = [
    "Full-Time",
    "Part-Time",
    "Contract",
    "Freelance",
    "Internship",
    "Temporary",
    "Remote",
    "Seasonal",
  ];

  const jobLevels = [
    "Entry Level",
    "Junior",
    "Mid-Level",
    "Senior",
    "Lead",
    "Manager",
    "Director",
    "VP",
    "C-Level",
    "Intern",
  ];

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
            options={experienceLevels}
            onChange={(e) => {
              setJobExp(e.target.value);
            }}
          />
          <SmallDropdowns
            style="w-[32%]"
            label="Job Type"
            options={jobTypes}
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
            options={jobLevels}
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
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil",
    "South Africa",
    "Mexico",
    "Spain",
    "Italy",
    "Netherlands",
  ];

  const cities = {
    "United States": [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "San Francisco",
      "Seattle",
      "Miami",
      "Boston",
      "Washington D.C.",
      "Dallas",
    ],
    Canada: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Calgary",
      "Ottawa",
      "Edmonton",
      "Winnipeg",
      "Quebec City",
      "Halifax",
      "Victoria",
    ],
    "United Kingdom": [
      "London",
      "Manchester",
      "Birmingham",
      "Glasgow",
      "Liverpool",
      "Edinburgh",
      "Bristol",
      "Leeds",
      "Sheffield",
      "Cardiff",
    ],
    Australia: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Gold Coast",
      "Hobart",
      "Canberra",
      "Darwin",
      "Newcastle",
    ],
    India: [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Chandigarh",
    ],
    Germany: [
      "Berlin",
      "Munich",
      "Hamburg",
      "Frankfurt",
      "Cologne",
      "Stuttgart",
      "Dusseldorf",
      "Dortmund",
      "Essen",
      "Leipzig",
    ],
    France: [
      "Paris",
      "Marseille",
      "Lyon",
      "Toulouse",
      "Nice",
      "Nantes",
      "Montpellier",
      "Strasbourg",
      "Bordeaux",
      "Lille",
    ],
    Japan: [
      "Tokyo",
      "Osaka",
      "Kyoto",
      "Nagoya",
      "Yokohama",
      "Fukuoka",
      "Kobe",
      "Sapporo",
      "Hiroshima",
      "Sendai",
    ],
    China: [
      "Beijing",
      "Shanghai",
      "Guangzhou",
      "Shenzhen",
      "Chengdu",
      "Hong Kong",
      "Wuhan",
      "Xi'an",
      "Hangzhou",
      "Nanjing",
    ],
    Brazil: [
      "Sao Paulo",
      "Rio de Janeiro",
      "Brasilia",
      "Salvador",
      "Fortaleza",
      "Belo Horizonte",
      "Manaus",
      "Curitiba",
      "Recife",
      "Porto Alegre",
    ],
    "South Africa": [
      "Johannesburg",
      "Cape Town",
      "Durban",
      "Pretoria",
      "Port Elizabeth",
      "Bloemfontein",
      "East London",
      "Nelspruit",
      "Polokwane",
      "Kimberley",
    ],
    Mexico: [
      "Mexico City",
      "Guadalajara",
      "Monterrey",
      "Cancun",
      "Puebla",
      "Merida",
      "San Luis Potosi",
      "Tijuana",
      "Leon",
      "Queretaro",
    ],
    Spain: [
      "Madrid",
      "Barcelona",
      "Valencia",
      "Seville",
      "Malaga",
      "Bilbao",
      "Granada",
      "Alicante",
      "Murcia",
      "Valladolid",
    ],
    Italy: [
      "Rome",
      "Milan",
      "Naples",
      "Turin",
      "Palermo",
      "Genoa",
      "Bologna",
      "Florence",
      "Venice",
      "Catania",
    ],
    Netherlands: [
      "Amsterdam",
      "Rotterdam",
      "The Hague",
      "Utrecht",
      "Eindhoven",
      "Groningen",
      "Arnhem",
      "Maastricht",
      "Leiden",
      "Delft",
    ],
  };

  const setJobCountry = useSetRecoilState(jobCountryAtom);
  const [city, setCity] = useState([]);
  const setJobCity = useSetRecoilState(jobCityAtom);
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
            options={countries}
            onChange={(e) => {
              const Country = e.target.value;
              setJobCountry(Country);
              setCity(cities[Country]);
            }}
          />

          <SmallDropdowns
            style="w-[49%]"
            label="City"
            options={city}
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
  const navigate = useNavigate();
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
        `${
          import.meta.env.VITE_BACKEND_URI
        }/api/v1/postingjob/createPostingJob`,
        postData
      );
      navigate("/edashboard");
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
