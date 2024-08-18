const WorkingArea = () => {
  return (
    <>
      <div className="h-auto flex flex-col justify-center items-center pb-10 border-b-2">
        <div className="my-10 bg-[#e7f0fa] text-center text-2xl font-semibold p-4 rounded-lg">
          How JobHub Works
        </div>
        <img
          className=" h-auto mt-5 rounded-xl w-11/12 sm:w-5/6 max-h-[300px] object-cover"
          src="working.png"
          alt="Working Image"
        />
      </div>
    </>
  );
};

export default WorkingArea;
