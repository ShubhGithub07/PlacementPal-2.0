import { CounterCard } from "./HeroArea";
import { IoMdArrowRoundForward } from "react-icons/io";

const PopularCategory = () => {
  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-20 border-b-2">
        <div className="h-auto flex flex-col lg:flex-row justify-between mx-8 lg:mx-16 items-center">
          <div className="mt-10 font-semibold text-4xl text-center lg:text-left">
            Popular Category
          </div>
          <div className="mt-10 font-semibold text-lg h-10 w-32 rounded-md border-2 border-[#0a65cc] flex justify-center items-center cursor-pointer hover:bg-[#0a65cc] hover:text-white">
            view all <IoMdArrowRoundForward />
          </div>
        </div>
        <div className="h-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-14 px-8 lg:px-16">
            <CounterCard
              Count="76"
              Record="Graphic & Designing"
              BgColor="bg-slate-100"
              BgLink="/graphic.png"
            />
            <CounterCard
              Count="78"
              Record="Coding & Programming"
              BgColor="bg-slate-100"
              BgLink="/coding.png"
            />
            <CounterCard
              Count="89"
              Record="Digital Marketing"
              BgColor="bg-slate-100"
              BgLink="/digitalmrkt.png"
            />
            <CounterCard
              Count="98"
              Record="Video & Animation"
              BgColor="bg-slate-100"
              BgLink="/videonanim.png"
            />
            <CounterCard
              Count="98"
              Record="Music & Audio"
              BgColor="bg-slate-100"
              BgLink="/music.png"
            />
            <CounterCard
              Count="89"
              Record="Account & Finance"
              BgColor="bg-slate-100"
              BgLink="/finance.png"
            />
            <CounterCard
              Count="90"
              Record="Health & Care"
              BgColor="bg-slate-100"
              BgLink="/healthcare.png"
            />
            <CounterCard
              Count="78"
              Record="Data & Science"
              BgColor="bg-slate-100"
              BgLink="/datascience_.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
