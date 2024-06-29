import { Link, useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/job/${job._id}`);
        }}
        className=" bg-white m-4 border cursor-pointer border-slate-100 shadow hover:shadow-lg rounded-xl"
      >
        <div className=" flex">
          <img
            src={job.logo}
            className=" h-28 w-28 m-4 p-4 rounded-lg flex justify-center items-center"
          />

          <div className=" mt-5 w-3/5">
            <div className=" text-lg">{job.companyName}</div>
            <div className=" text-sm">{job.address}</div>
            <h1 className=" mt-2 text-lg">{job.jobTitle}</h1>
            <p className=" text-sm text-[#696969]">
              Apply before {job.lastDate} June
            </p>
          </div>
        </div>
        <div className=" bg-[#e7f0fa] h-10 mx-4 mb-2 rounded-lg flex justify-between items-center px-8">
          <div>{job.jobType}</div>
          <div>${job.salary}</div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
