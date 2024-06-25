const CandidateDashboard = () => {
  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-14">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className="mt-10 mb-3 font-semibold text-4xl text-center lg:text-left">
            Hey, Azam Shaikh
          </div>
          <p>Here is your daily activities and job alerts</p>
        </div>

        <div className=" h-1/5 mt-10 justify-between mx-8 lg:mx-10 items-start grid grid-cols-3">
          <DashboardSummaryCard
            value="467"
            title="Applied jobs"
            url="img"
            color="bg-[#e7f0fa]"
          />
          <DashboardSummaryCard
            value="67"
            title="Favorite jobs"
            url="img"
            color="bg-[#fff6e6]"
          />
          <DashboardSummaryCard
            value="467"
            title="Jobs alerts"
            url="img"
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
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
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

const AppliedJobCard = () => {
  return (
    <>
      <div className=" h-28 border-b-2 flex">
        <div className=" w-3/6 pl-5 flex items-center">
          <div className=" w-16 h-16 p-5 bg-gray-200 rounded-lg">img</div>
          <div className=" ml-4">
            <div className=" flex">
              <div className=" font-semibold">Job Title Likhna</div>
              <div className=" ml-4 px-2 bg-[#e7f0fa] text-[#0a65cc] rounded-lg">
                Remote
              </div>
            </div>
            <div className=" mt-1 flex text-[#5e6670]">
              <div>O Mumbai</div>
              <div className=" ml-4">O $10k-$20k/month</div>
            </div>
          </div>
        </div>
        <div className=" w-1/6 pl-7 flex justify-start items-center text-[#5e6670]">
          Feb 2, 2024 16:35
        </div>
        <div className=" w-1/6 pl-7 flex justify-start items-center text-green-400">
          Status
        </div>
        <div className=" w-1/6 flex justify-start items-center">
          <button className=" bg-[#f1f2f4] hover:bg-[#0a65cc] text-[#0a65cc] hover:text-[#f1f2f4] font-semibold px-6 py-3 rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default CandidateDashboard;
