import { useState, useEffect, useCallback } from "react";
import ApplicantPopup from "./ApplicantsPopup";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { BsBriefcase, BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const [jobDetail, setJobDetails] = useState([]);
  const [compDetail, setCompDetails] = useState({});
  const [compId, setCompId] = useState("");

  const fetchDetails = useCallback(async (userId) => {
    await axios
      .post("http://localhost:7000/api/v1/companyprofile/getMyCompanyProfile", {
        userId,
      })
      .then((res) => {
        setCompDetails(res.data.data);
        setCompId(res.data.data._id);
        fetchJobs();
      })
      .catch((error) => {
        console.error("There was an error fetching the company details", error);
      });
  }, []);

  const fetchJobs = useCallback(async () => {
    if (!compId) return;

    await axios
      .post("http://localhost:7000/api/v1/job/getmyjobs", {
        compId,
      })
      .then((res) => {
        setJobDetails(res.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the job IDs!", error);
      });
  }, [compId]);

  useEffect(() => {
    fetchJobs();
  }, [compId, fetchJobs]);

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) return;

    const decodedToken = jwtDecode(accessToken);
    const userId = decodedToken.userId;

    if (userId) {
      fetchDetails(userId);
    }
  }, [fetchDetails]);

  const navigate = useNavigate();

  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-14">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className="mt-10 mb-3 font-semibold text-4xl text-center lg:text-left">
            Hello, {compDetail.name}
          </div>
          <p>Here is your daily activities and job alerts</p>
        </div>

        <div className=" h-1/5 mt-10 justify-between mx-8 lg:mx-10 items-start grid grid-cols-3">
          <DashboardSummaryCard
            value={jobDetail.length}
            title="Open jobs"
            logo={<BsBriefcase className=" text-3xl" />}
            color="bg-[#e7f0fa]"
          />
          <DashboardSummaryCard
            value={Math.floor(Math.random() * 20)}
            title="Saved Candidates"
            logo={<BsBookmark className=" text-3xl" />}
            color="bg-[#fff6e6]"
          />
          <button
            onClick={() => {
              navigate("/jobposting");
            }}
            className=" h-28 bg-green-200 px-10 py-4 mx-5 flex justify-center items-center rounded-lg shadow-lg hover:shadow-xl text-2xl font-semibold"
          >
            Add jobs
          </button>
        </div>

        <div className="h-1/5 mt-5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className=" mt-10  mb-5 font-semibold text-2xl text-center lg:text-left">
            Recently Posted Jobs
          </div>
        </div>

        <div className=" mx-16 h-12 rounded-lg bg-[#d7d7d7] flex items-center">
          <div className=" w-3/6 pl-7">Job</div>
          <div className=" w-1/6 pl-7">Status</div>
          <div className=" w-1/6 pl-7">Action</div>
          <div className=" w-1/6 pl-7">Applications</div>
        </div>
        <div className=" mx-16">
          {jobDetail.map((job, index) => (
            <ApplicantJobCard
              key={index}
              jobTitle={job.jobTitle}
              jobType={job.jobType}
              appliedUsers={job.appliedUsers.length}
              daysRemaining={Math.floor(Math.random() * 20)}
              cardId={job.cardId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const DashboardSummaryCard = ({ value, title, logo, color }) => {
  return (
    <>
      <div
        className={`${color} px-10 py-4 mx-5 flex justify-between rounded-lg shadow-lg`}
      >
        <div className=" flex flex-col justify-evenly">
          <div className=" text-2xl font-semibold">{value}</div>
          <div className=" text-lg text-gray-700 ">{title}</div>
        </div>
        <div className=" w-20 h-20 bg-white flex justify-center items-center rounded-lg">
          {logo}
        </div>
      </div>
    </>
  );
};

const ApplicantJobCard = ({ jobTitle, jobType, daysRemaining, appliedUsers, cardId }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className=" h-28 border-b-2 flex">
        <div className=" w-3/6 pl-5 flex items-center">
          <div className=" ml-4">
            <div className=" font-semibold text-xl">{jobTitle}</div>
            <div className=" mt-1 flex text-[#5e6670]">
              <div>O {jobType}</div>
              <div className=" ml-4">O {daysRemaining} days remaining</div>
            </div>
          </div>
        </div>
        <div className=" w-1/6 pl-7 flex justify-start items-center text-green-400">
          Active
        </div>
        <div className=" w-1/6 pl-7 flex justify-start items-center text-[#5e6670]">
          {appliedUsers} Applications
        </div>
        <div className=" w-1/6 flex justify-start items-center">
          <button
            onClick={() => {
              navigate(`/job/applicants/${cardId}`);
            }}
            className=" bg-[#f1f2f4] hover:bg-[#0a65cc] text-[#0a65cc] hover:text-[#f1f2f4] font-semibold px-6 py-3 rounded-lg"
          >
            View Applications
          </button>
          <ApplicantPopup show={showPopup} onClose={togglePopup} />
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
