const Footer = () => {
  return (
    <>
      <div className=" h-[450px] bg-[#0d1117]">
        <div className=" text-white flex flex-col justify-center items-start pb-10 pr-10 pl-24 w-1/3 float-start h-[370px]">
          <div className=" text-4xl font-semibold mb-5">iAmLogo</div>
          <div className=" text-lg font-medium mb-2">Call on : 8979324575</div>
          <div>
            Address : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus eos eius aliquam!
          </div>
        </div>
        <div className=" flex justify-evenly items-center w-2/3 h-[370px] text-white">
          <LinkTabs />
          <LinkTabs />
          <LinkTabs />
          <LinkTabs />
        </div>
        <div
          className=" h-[80px] flex justify-between items-center px-20 text-white
        border-t-2 "
        >
          <div>@2069 iamlogo - Iam Logo Inc. All rights Reserved</div>
          <div>O O O O</div>
        </div>
      </div>
    </>
  );
};

const LinkTabs = () => {
  return (
    <>
      <div>
        <div className=" text-2xl font-medium my-3">HeadLine</div>
        <ul>
          <li className=" mt-2 ml-3 hover:font-semibold cursor-pointer">
            Link 1
          </li>
          <li className=" mt-2 ml-3 hover:font-semibold cursor-pointer">
            Link 2
          </li>
          <li className=" mt-2 ml-3 hover:font-semibold cursor-pointer">
            Link 3
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
