import { IoMdArrowRoundForward } from "react-icons/io";

const TopCompanies = () => {
  return (
    <>
      <div className="h-auto border-y-2 py-20 bg-[#f7f7f8]">
        <div className="h-auto flex flex-col lg:flex-row justify-between mx-8 lg:mx-16 items-center">
          <div className="mt-10 font-semibold text-4xl text-center lg:text-left">
            Top Companies
          </div>
          <div className="mt-10 font-semibold text-lg h-10 w-32 rounded-md border-2 border-[#0a65cc] flex justify-center items-center cursor-pointer hover:bg-[#0a65cc] hover:text-white">
            view all <IoMdArrowRoundForward />
          </div>
        </div>
        <div className="h-auto mx-8 mt-10 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CompanyCard
            compName="Microsoft"
            compAddr="Bangalore, India"
            compLogo="https://logo.clearbit.com/microsoft.com"
          />
          <CompanyCard
            compName="Apple"
            compAddr="New York, USA"
            compLogo="https://logo.clearbit.com/apple.com"
          />
          <CompanyCard
            compName="Google Inc."
            compAddr="Govandi, Mumbai"
            compLogo="https://logo.clearbit.com/google.com"
          />
          <CompanyCard
            compName="Facebook"
            compAddr="San Francisco, USA"
            compLogo="https://logo.clearbit.com/facebook.com"
          />
          <CompanyCard
            compName="Amazon"
            compAddr="London, UK"
            compLogo="https://logo.clearbit.com/amazon.com"
          />
          <CompanyCard
            compName="Netflix"
            compAddr="Sydney, Australia"
            compLogo="https://logo.clearbit.com/netflix.com"
          />
        </div>
      </div>
    </>
  );
};

const CompanyCard = ({ compName, compAddr, compLogo }) => {
  return (
    <>
      <div className="bg-white m-4 border border-slate-100 shadow hover:shadow-lg rounded-xl p-4 flex flex-col justify-between">
        <div className="flex">
          <div className="h-20 w-20 lg:h-28 lg:w-28 m-4 rounded-lg flex justify-center items-center bg-slate-100">
            <img src={compLogo} className=" p-4 rounded-xl" alt="" />
          </div>
          <div className="mt-5 w-3/5">
            <div className="text-lg">{compName}</div>
            <div className="text-sm">{compAddr}</div>
            <div className="flex justify-center items-center rounded-xl mt-4 w-24 bg-yellow-200">
              Featured
            </div>
          </div>
        </div>
        <div className="bg-[#e7f0fa] h-10 mx-4 rounded-lg flex justify-center items-center px-8 mt-4">
          Open Positions ( {Math.floor(Math.random() * 50)} )
        </div>
      </div>
    </>
  );
};

export default TopCompanies;
