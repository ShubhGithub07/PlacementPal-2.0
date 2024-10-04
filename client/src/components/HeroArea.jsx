import { Link } from "react-router-dom";

const HeroArea = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#f7f7f8] mt-[65px]">
        <HeroText />
      </div>
    </>
  );
};

const HeroText = () => {
  return (
    <>
      <div className="h-auto flex flex-col lg:flex-row">
        <div className="h-full flex flex-col justify-center items-center w-full lg:w-1/2 p-4">
          <div className="text-4xl lg:text-5xl w-5/6 font-medium m-4 lg:m-10 text-center">
            Find a job that suits your interest & skills.
          </div>
          <div className="w-5/6 pr-0 text-center">
            A job portal website is a platform that connects job seekers with
            employers. It allows candidates to search for job openings, upload
            resumes, and apply for positions directly. On the other hand,
            employers can post job listings, search through candidate profiles,
            and manage applications.
          </div>
          <Link
            className="m-10 lg:m-20 h-12 lg:h-16 w-3/5 lg:w-2/5 rounded-md flex justify-center items-center bg-[#0a65cc] font-semibold text-lg lg:text-xl text-white cursor-pointer shadow hover:shadow-xl"
            to="/jobs"
          >
            Find Jobs
          </Link>
        </div>
        <div className="  h-auto w-auto lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img src="https://i.imgur.com/PMe1Xly.jpeg" className=" w-2/3 " />
        </div>
      </div>
      <div className="h-auto px-8 lg:px-32 py-8 flex flex-wrap justify-evenly items-center w-full border-b-2">
        <CounterCard
          Count="30,000"
          Record="New Jobs"
          BgColor="bg-white"
          BgLink="/briefcase.png"
        />
        <CounterCard
          Count="67,000"
          Record="Companies"
          BgColor="bg-white"
          BgLink="/company.png"
        />
        <CounterCard
          Count="55,000"
          Record="Candidates"
          BgColor="bg-white"
          BgLink="/candidates.png"
        />
        <CounterCard
          Count="87,000"
          Record="Jobs"
          BgColor="bg-white"
          BgLink="/briefcase.png"
        />
      </div>
    </>
  );
};

const CounterCard = ({ Count, Record, BgColor, BgLink }) => {
  return (
    <>
      <div
        className={`w-full sm:w-[300px] h-[100px] mb-10 shadow-sm hover:shadow-xl rounded-xl ${BgColor} flex`}
      >
        <div className="flex justify-center items-center w-2/5 h-4/5 m-3 rounded-xl hover:bg-blue-200 bg-[rgb(231,240,250)]">
          <img
            src={BgLink}
            className=" p-4 text-blue-600 hover:text-white mix-blend-darken"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="mx-3 mt-5 font-medium text-xl lg:text-2xl hover:text-[#4373ab] cursor-default">
            {Count}
          </div>
          <div className="mx-3 mt-2 font-semibold hover:text-[#0a65cc] cursor-default">
            {Record}
          </div>
        </div>
      </div>
    </>
  );
};

export { CounterCard, HeroArea, HeroText };
