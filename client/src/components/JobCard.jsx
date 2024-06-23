const JobCard = () => {
  return (
    <>
      <div className=" bg-white m-4 border cursor-pointer border-slate-100 shadow hover:shadow-lg rounded-xl">
        <div className=" flex">
          <div className=" h-28 w-28 m-4 rounded-lg flex justify-center items-center bg-[#e7f0fa]">
            Logo
          </div>
          <div className=" mt-5 w-3/5">
            <div className=" text-lg">Google Inc.</div>
            <div className=" text-sm">Sakinaka, Mumbai</div>
            <h1 className=" mt-2 text-lg">Full stack developer</h1>
            <p className=" text-sm text-[#696969]">Apply before 10 June</p>
          </div>
        </div>
        <div className=" bg-[#e7f0fa] h-10 mx-4 mb-2 rounded-lg flex justify-between items-center px-8">
          <div>Internship</div>
          <div>$100,000</div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
