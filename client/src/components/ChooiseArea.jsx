const ChooiseArea = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div
        className={`h-auto ${
          token ? "hidden" : ""
        } bg-[#f7f7f8] py-20 grid grid-cols-1 md:grid-cols-2 gap-4 p-4`}
      >
        <ChooiseCard username="Become a Candidate" />
        <ChooiseCard username="Become a Employer" />
      </div>
    </>
  );
};

const ChooiseCard = ({ username }) => {
  return (
    <>
      <div className="mx-auto h-auto md:h-[300px] my-8 bg-white border border-slate-100 shadow hover:shadow-lg rounded-xl flex flex-col md:flex-row p-4">
        <div className="w-full md:w-3/5 flex flex-col justify-evenly items-center p-4">
          <div className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            {username}
          </div>
          <div className="mx-4 md:mx-12 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            doloremque alias consequuntur accusantium.
          </div>
          <div className="h-12 md:h-16 w-3/5 md:w-2/5 rounded-md flex justify-center items-center bg-[#0a65cc] font-semibold text-lg md:text-xl text-white cursor-pointer shadow hover:shadow-xl">
            Register Now
          </div>
        </div>
        <div className="w-full md:w-2/5 flex justify-center items-center mt-4 md:mt-0">
          Image Here
        </div>
      </div>
    </>
  );
};

export default ChooiseArea;
