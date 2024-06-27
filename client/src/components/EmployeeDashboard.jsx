import { useState } from "react";
import ApplicantPopup from "./ApplicantsPopup";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-14">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className="mt-10 mb-3 font-semibold text-4xl text-center lg:text-left">
            Hello, Google Inc.
          </div>
          <p>Here is your daily activities and job alerts</p>
        </div>

        <div className=" h-1/5 mt-10 justify-between mx-8 lg:mx-10 items-start grid grid-cols-3">
          <DashboardSummaryCard
            value="467"
            title="Open jobs"
            url="img"
            color="bg-[#e7f0fa]"
          />
          <DashboardSummaryCard
            value="67"
            title="Saved Candidates"
            url="img"
            color="bg-[#fff6e6]"
          />
        </div>

        <div className="h-1/5 mt-5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className=" mt-10  mb-5 font-semibold text-2xl text-center lg:text-left">
            Recently Posted Jobs
          </div>
        </div>

        <div className=" mx-16 h-12 rounded-lg bg-[#d7d7d7] flex items-center">
          <div className=" w-3/6 pl-7">Job</div>
          <div className=" w-1/6 pl-7">Status</div>
          <div className=" w-1/6 pl-7">Applications</div>
          <div className=" w-1/6 pl-7">Action</div>
        </div>
        <div className=" mx-16">
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
          <ApplicantJobCard />
        </div>
      </div>
    </>
  );
};

const DashboardSummaryCard = ({ value, title, url, color }) => {
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
          {url}
        </div>
      </div>
    </>
  );
};

const ApplicantJobCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className=" h-28 border-b-2 flex">
        <div className=" w-3/6 pl-5 flex items-center">
          <div className=" ml-4">
            <div className=" font-semibold text-xl">Job Title Likhna</div>
            <div className=" mt-1 flex text-[#5e6670]">
              <div>O Internship</div>
              <div className=" ml-4">O 17 days remaining</div>
            </div>
          </div>
        </div>
        <div className=" w-1/6 pl-7 flex justify-start items-center text-green-400">
          Active
        </div>
        <div className=" w-1/6 pl-7 flex justify-start items-center text-[#5e6670]">
          675 Applications
        </div>
        <div className=" w-1/6 flex justify-start items-center">
          <button
            onClick={togglePopup}
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
