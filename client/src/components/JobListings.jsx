import Footer from "./Footer";
import JobCard from "./JobCard";
import axios from "axios";
import { useState, useEffect } from "react";

const JobListings = () => {
  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-14">
        <div className="h-1/5 flex flex-col lg:flex-row justify-between mx-8 lg:mx-16 items-center">
          <div className="mt-10 font-semibold text-4xl text-center lg:text-left">
            Jobs
          </div>
        </div>
        <SearchArea />
      </div>
      <Footer />
    </>
  );
};

const SearchArea = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://localhost:7000/api/v1/jobcard/getalljobcard?filter=" + filter
      )
      .then((response) => {
        setJobs(response.data.JobCards);
      })
      .catch((error) => {
        console.error("There was an error fetching the jobs!", error);
      });
  }, [filter]);

  return (
    <>
      <>
        <div className="my-10">
          <input
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            type="text"
            placeholder="Search"
            className="mx-20 w-5/6 px-4 py-3 border border-slate-400 outline-none rounded-xl"
          ></input>
          <div className="mt-7 mx-20 flex flex-wrap gap-2">
            <a
              href="#"
              className="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm"
            >
              Technology
            </a>
            <a
              href="#"
              className="bg-green-200 hover:bg-green-300 py-1 px-2 rounded-lg text-sm"
            >
              Programming
            </a>
            <a
              href="#"
              className="bg-yellow-200 hover:bg-yellow-300 py-1 px-2 rounded-lg text-sm"
            >
              Web Development
            </a>
            <a
              href="#"
              className="bg-indigo-200 hover:bg-indigo-300 py-1 px-2 rounded-lg text-sm"
            >
              Design
            </a>
            <a
              href="#"
              className="bg-purple-200 hover:bg-purple-300 py-1 px-2 rounded-lg text-sm"
            >
              AI
            </a>
            <a
              href="#"
              className="bg-pink-200 hover:bg-pink-300 py-1 px-2 rounded-lg text-sm"
            >
              Machine Learning
            </a>
          </div>
        </div>
        <div className="h-auto mx-8 mt-10 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard job={job} key={job._id} />
          ))}
        </div>
      </>
    </>
  );
};

export default JobListings;
