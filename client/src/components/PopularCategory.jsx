import { CounterCard } from "./HeroArea";

const PopularCategory = () => {
  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-20 border-b-2">
        <div className="h-auto flex flex-col lg:flex-row justify-between mx-8 lg:mx-16 items-center">
          <div className="mt-10 font-semibold text-4xl text-center lg:text-left">
            Popular Category
          </div>
          <div className="mt-10 font-semibold text-lg h-10 w-32 rounded-md border-2 border-[#0a65cc] flex justify-center items-center cursor-pointer hover:bg-[#0a65cc] hover:text-white">
            view all -K
          </div>
        </div>
        <div className="h-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-14 px-8 lg:px-16">
            <CounterCard />
            <CounterCard />
            <CounterCard />
            <CounterCard />
            <CounterCard />
            <CounterCard />
            <CounterCard />
            <CounterCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
