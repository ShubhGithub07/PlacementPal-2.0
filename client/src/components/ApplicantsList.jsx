import { useParams } from "react-router-dom";
import axios from "axios";
import ApplicantPopup from "./ApplicantsPopup";
import { useEffect, useMemo, useState } from "react";
import { jobDescAtom } from "../store/atoms/JobDetail";
import { format, parseISO } from "date-fns";

const ApplicantsList = () => {
  const [jobDetail, setJobDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/v1/job/${id}`
        );
        setJobDetail(response.data.data.job);
      } catch (error) {
        console.error("There was an error fetching the job details!", error);
      }
    };

    fetchJobDetail();
  }, [id]);

  return (
    <>
      <header className="flex border-b-2 mx-16 mt-20 justify-between items-center pb-4 mb-6">
        <div className="flex items-center">
          <div className="h-28 w-28 m-4 rounded-lg flex justify-center items-center bg-[#e7f0fa]">
            <img
              src={jobDetail.logo}
              alt="Company Logo"
              className="h-full w-full rounded-xl"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{jobDetail.jobTitle}</h1>
            <span className="text-gray-500">at {jobDetail.companyName}</span>
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
        <button className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded">
          Delete
        </button>
      </header>
      <ApplicantsSection jobDetail={jobDetail} />
    </>
  );
};

const ApplicantsSection = ({ jobDetail }) => {
  const [appPopUp, setAppPopUp] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [shortlistedApp, setShortlistedApp] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      const applicantPromises = jobDetail.appliedUsers?.map((user) => {
        return axios.post(
          "http://localhost:7000/api/v1/userprofile/getmyUserProfile",
          {
            userId: user.userId,
          }
        );
      });

      try {
        const applicantResponses = await Promise.all(applicantPromises);
        const newSelectedApplicants = [];
        const newNotSelectedApplicants = [];

        applicantResponses.forEach((response, index) => {
          const userData = response.data.data;
          const userInfo = jobDetail.appliedUsers[index];

          if (userInfo.isShortlisted) {
            newSelectedApplicants.push(userData);
          } else {
            newNotSelectedApplicants.push(userData);
          }
        });

        setShortlistedApp(newSelectedApplicants);
        setApplicants(newNotSelectedApplicants);
      } catch (error) {
        console.error("There was an error fetching the applicants!", error);
      }
    };

    if (jobDetail.appliedUsers) {
      fetchApplicants();
    }
  }, [jobDetail]);

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
              {applicants.map((app) => (
                <ApplicantCard
                  key={app._id}
                  applicant={app}
                  onClick={() => togglePopup(app)}
                />
              ))}
            </div>
          </div>
          <div className="w-[49%] bg-[#f7f7f8] border-2 rounded-lg">
            <h4 className="p-5">Shortlisted</h4>
            <div className="w-full grid grid-cols-2">
              {shortlistedApp.map((app) => (
                <ApplicantCard
                  key={app._id}
                  applicant={app}
                  jobDetail={jobDetail}
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
        <div className="bg-red-200 mb-3 w-16 h-16 rounded-xl flex justify-center items-center">
          Logo
        </div>
        <div className="ml-5 mt-1">
          <div>{applicant.fullName}</div>
          <div>{applicant.headline}</div>
          <div>{applicant.gender}</div>
        </div>
      </div>
      <ul className="my-2 ml-6">
        <li>{applicant.experience}</li>
        <li>{applicant.education}</li>
      </ul>
    </div>
  );
};

export { ApplicantsList };
