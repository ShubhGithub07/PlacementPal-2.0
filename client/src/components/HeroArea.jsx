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
          <div className="text-4xl lg:text-5xl w-5/6 font-medium m-4 lg:m-10 text-center lg:text-left">
            Find a job that suits your interest & skills.
          </div>
          <div className="w-5/6 pr-0 lg:pr-20 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            eveniet aut in eum. Eum, vel!
          </div>
          <Link
            className="m-10 lg:m-20 h-12 lg:h-16 w-3/5 lg:w-2/5 rounded-md flex justify-center items-center bg-[#0a65cc] font-semibold text-lg lg:text-xl text-white cursor-pointer shadow hover:shadow-xl"
            to="/jobs"
          >
            Find Jobs
          </Link>
        </div>
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center mt-8 lg:mt-0">
          Images
        </div>
      </div>
      <div className="h-auto px-8 lg:px-32 py-8 flex flex-wrap justify-evenly items-center w-full border-b-2">
        <CounterCard Count={"30,000"} Record={"Azam"} BgColor={"bg-white"} />
        <CounterCard Count={"87,000"} Record={"Jobs"} BgColor={"bg-white"} />
        <CounterCard
          Count={"55,000"}
          Record={"Candidates"}
          BgColor={"bg-white"}
        />
        <CounterCard
          Count={"67,000"}
          Record={"Companies"}
          BgColor={"bg-white"}
        />
      </div>
    </>
  );
};

const CounterCard = ({ Count, Record, BgColor }) => {
  return (
    <>
      <div
        className={`w-full sm:w-[290px] h-[100px] mb-10 shadow-sm hover:shadow-xl rounded-md ${BgColor} flex`}
      >
        <div className="flex justify-center items-center w-2/5 h-4/5 m-3 bg-[rgb(231,240,250)]">
          Img
        </div>
        <div className="w-full">
          <div className="mx-3 mt-5 font-medium text-xl lg:text-2xl hover:text-[#0a65cc]">
            {Count}
          </div>
          <div className="mx-3 mt-2 hover:text-[#0a65cc]">{Record}</div>
        </div>
      </div>
    </>
  );
};

export { CounterCard, HeroArea, HeroText };
