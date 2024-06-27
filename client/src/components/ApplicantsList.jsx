import ApplicantPopup from "./ApplicantsPopup";
import { useState } from "react";

const applications = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "Senior UX Designer",
    experience: "7 Years Experience",
    education: "Master Degree",
    appliedDate: "Jan 23, 2022",
    resume: "RonaldRichards.pdf",
    details: {
      bio: "I've been passionate about graphic design and digital art from an early age...",
      coverLetter: "Dear Sir, I am writing to express my interest...",
      dob: "14 June, 2021",
      nationality: "Bangladesh",
      gender: "Male",
      maritalStatus: "Single",
      location: "Beverly Hills, California 90202",
      phone: "+1 202-555-0141",
      email: "esther.howard@gmail.com",
      website: "www.estherhoward.com",
    },
  },
  {
    id: 2,
    name: "Azam",
    role: "Senior UX Designer",
    experience: "7 Years Experience",
    education: "Master Degree",
    appliedDate: "Jan 23, 2022",
    resume: "RonaldRichards.pdf",
    details: {
      bio: "I've been passionate about graphic design and digital art from an early age...",
      coverLetter: "Dear Sir, I am writing to express my interest...",
      dob: "14 June, 2021",
      nationality: "Bangladesh",
      gender: "Male",
      maritalStatus: "Single",
      location: "Beverly Hills, California 90202",
      phone: "+1 202-555-0141",
      email: "esther.howard@gmail.com",
      website: "www.estherhoward.com",
    },
  },
  // Add other applicants here
];

const ApplicantsList = () => {
  return (
    <>
      <header className="flex border-b-2 mx-16 mt-20 justify-between items-center pb-4 mb-6">
        <div className="flex items-center">
          <div className="h-28 w-28 m-4 rounded-lg flex justify-center items-center bg-[#e7f0fa]">
            <img
              src="logo-url"
              alt="Company Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Senior UX Designer</h1>
            <span className="text-gray-500">at Facebook</span>
            <div className="mt-2">
              <span className="text-green-500 border border-green-500 rounded px-2 py-1 text-xs mr-2">
                Full-Time
              </span>
              <span className="text-red-500 border border-red-500 rounded px-2 py-1 text-xs">
                Featured
              </span>
            </div>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Apply Now
        </button>
      </header>
      <ApplicantsSection />
    </>
  );
};

const ApplicantsSection = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const togglePopup = (applicant) => {
    setSelectedApplicant(applicant);
  };

  const closePopup = () => {
    setSelectedApplicant(null);
  };

  return (
    <>
      <div className="mx-16">
        <div className="text-2xl font-semibold">Applicants</div>
        <div className="mt-6 mb-10 flex justify-evenly w-full">
          <div className="w-[49%] bg-[#f7f7f8] border-2 rounded-lg">
            <h4 className="p-5">All Applications</h4>
            <div className="w-full grid grid-cols-2">
              {applications.map((app) => (
                <ApplicantCard
                  key={app.id}
                  applicant={app}
                  onClick={() => togglePopup(app)}
                />
              ))}
            </div>
          </div>
          <div className="w-[49%] bg-[#f7f7f8] border-2 rounded-lg">
            <h4 className="p-5">Shortlisted</h4>
            <div className="w-full grid grid-cols-2">
              {applications.map((app) => (
                <ApplicantCard
                  key={app.id}
                  applicant={app}
                  onClick={() => togglePopup(app)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ApplicantPopup
        show={!!selectedApplicant}
        onClose={closePopup}
        applicant={selectedApplicant}
      />
    </>
  );
};

const ApplicantCard = ({ applicant, onClick }) => {
  return (
    <div
      className="bg-white border-2 rounded-lg shadow m-3 cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      <div className="flex m-3 border-b-2">
        <div className="bg-red-200 mb-3 w-16 h-16 flex justify-center items-center">
          Logo
        </div>
        <div className="ml-5 mt-1">
          <div>{applicant.name}</div>
          <div>{applicant.role}</div>
        </div>
      </div>
      <ul className="my-2 ml-6">
        <li>{applicant.experience}</li>
        <li>{applicant.education}</li>
        <li>{applicant.appliedDate}</li>
      </ul>
    </div>
  );
};

export { ApplicantsList };
