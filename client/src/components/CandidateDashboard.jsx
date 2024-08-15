import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { format, parseISO } from "date-fns";
import { BsBriefcase, BsBookmark, BsAlarm } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CandidateDashboard = () => {
  const [jobDetail, setJobDetails] = useState([]);
  const [userDetail, setUserDetail] = useState({});

  const fetchDetails = useCallback(async (userId) => {
    await axios
      .post("http://localhost:7000/api/v1/userprofile/getmyUserProfile", {
        userId,
      })
      .then((res) => {
        setUserDetail(res.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the user profile!", error);
      });

    await axios
      .post("http://localhost:7000/api/v1/job/getall", {
        userId,
      })
      .then((res) => {
        setJobDetails(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the job IDs!", error);
      });
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) return;

    const decodedToken = jwtDecode(accessToken);
    const userId = decodedToken.userId;

    if (userId) {
      fetchDetails(userId);
    }
  }, [fetchDetails]);

  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-14">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className="mt-10 mb-3 font-semibold text-4xl text-center lg:text-left">
            Hey, {userDetail.fullName}
          </div>
          <p>Here is your daily activities and job alerts</p>
        </div>

        <div className=" h-1/5 mt-10 justify-between mx-8 lg:mx-10 items-start grid grid-cols-3">
          <DashboardSummaryCard
            value={userDetail.jobApplied}
            title="Applied jobs"
            icon={<BsBriefcase className=" text-3xl" />}
            color="bg-[#e7f0fa]"
          />
          <DashboardSummaryCard
            value="0"
            title="Favorite jobs"
            icon={<BsBookmark className=" text-3xl" />}
            color="bg-[#fff6e6]"
          />
          <DashboardSummaryCard
            value="0"
            title="Jobs alerts"
            icon={<BsAlarm className=" text-3xl" />}
            color="bg-[#e7f6ea]"
          />
        </div>

        <div className="h-1/5 mt-5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className=" mt-10  mb-5 font-semibold text-2xl text-center lg:text-left">
            Recently Applied
          </div>
        </div>

        <div className=" mx-16 h-12 rounded-lg bg-[#d7d7d7] flex items-center">
          <div className=" w-3/6 pl-7">Job</div>
          <div className=" w-1/6 pl-7">Date Applied</div>
          <div className=" w-1/6 pl-7">Status</div>
          <div className=" w-1/6 pl-7">Action</div>
        </div>
        <div className=" mx-16">
          {jobDetail.map((job, index) => (
            <AppliedJobCard
              logo={job.logo}
              jobTitle={job.jobTitle}
              jobType={job.jobType}
              jobLocation={job.address}
              minSalary={job.salaryFrom}
              maxSalary={job.salaryTo}
              postedOn={format(parseISO(job.updatedAt), "dd MMM, yyyy")}
              cardId={job.cardId}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const DashboardSummaryCard = ({ value, title, icon, color }) => {
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
          {icon}
        </div>
      </div>
    </>
  );
};

const AppliedJobCard = ({
  logo,
  jobTitle,
  jobType,
  jobLocation,
  minSalary,
  maxSalary,
  postedOn,
  cardId,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" h-28 border-b-2 flex">
        <div className=" w-3/6 pl-5 flex items-center">
          <img src={logo} className=" w-16 p-1 h-16 rounded-lg" />
          <div className=" ml-4">
            <div className=" flex">
              <div className=" font-semibold">{jobTitle}</div>
              <div className=" ml-4 px-2 bg-[#e7f0fa] text-[#0a65cc] rounded-lg">
                {jobType}
              </div>
            </div>
            <div className=" mt-1 flex text-[#5e6670]">
              <div>O {jobLocation}</div>
              <div className=" ml-4">
                O ₹{minSalary}-₹{maxSalary}/month
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/6 pl-7 flex justify-start items-center text-[#5e6670]">
          {postedOn}
        </div>
        <div className=" w-1/6 pl-7 flex justify-start items-center text-green-400">
          Status
        </div>
        <div className=" w-1/6 flex justify-start items-center">
          <button
            onClick={() => navigate(`/job/${cardId}`)}
            className=" bg-[#f1f2f4] hover:bg-[#0a65cc] text-[#0a65cc] hover:text-[#f1f2f4] font-semibold px-6 py-3 rounded-lg"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default CandidateDashboard;
