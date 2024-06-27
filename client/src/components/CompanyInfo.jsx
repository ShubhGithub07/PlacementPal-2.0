import { InputBoxes } from "./Signing";
import SocialLinksForm from "./SocialLinks";

const CompanyInfo = () => {
  const Experience = ["Level 1", "Level 2", "Level 3", "Level 4"];
  return (
    <>
      <div className="h-auto bg-[#f7f7f8] py-14">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className="mt-10 mb-3 font-semibold text-4xl text-center lg:text-left">
            Company Details
          </div>
          <div className=" mt-5 mb-3 text-lg font-semibold">
            Basic Information
          </div>
          <BasicInformation />
        </div>
      </div>
      <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
        <div className=" mt-5 mb-3 text-lg font-semibold">Company Details</div>
        <SmallInputBoxes
          style="w-full my-5"
          label="Company name"
          placeholder=""
        />
        <div className=" w-full mb-5">
          <h1 className=" text-sm font-medium">About us</h1>
          <textarea
            className="w-full my-2 py-2 border-2 h-[300px] rounded-md px-5 outline-none"
            type="text"
            placeholder="Write down your company here. Let the candidate know who you are..."
          />
        </div>
      </div>

      <div className=" pb-14 bg-[#f7f7f8]">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className=" mt-5  mb-3 text-lg font-semibold">Founding Info</div>

          <div className="flex w-full flex-col md:flex-row justify-between">
            <SmallDropdowns
              style="w-[32%]"
              label="Experience"
              options={Experience}
            />
            <SmallDropdowns
              style="w-[32%]"
              label="Education"
              options={Experience}
            />
            <SmallDropdowns
              style="w-[32%]"
              label="Education"
              options={Experience}
            />
          </div>
          <div className=" w-full flex">
            <div className="  w-[32%]">
              <h1 className=" text-sm font-medium">Year of Establishment</h1>
              <input
                className="w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
                type="date"
                placeholder=""
              />
            </div>
            <SmallInputBoxes
              style=" ml-7 w-[32%]"
              label="Company Website"
              placeholder="Paste link here"
            />
          </div>
          <div className=" w-full mt-3">
          <h1 className=" text-sm font-medium">Company Vision</h1>
          <textarea
            className="w-full my-2 py-2 border-2 h-[300px] rounded-md px-5 outline-none"
            type="text"
            placeholder="Write down your company here. Let the candidate know who you are..."
          />
        </div>
        </div>
      </div>

      <div className=" pb-14">
        <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
          <div className=" mt-5 mb-3 text-lg font-semibold">Social Links</div>
          <SocialLinksForm />
        </div>
      </div>

      <div className="h-1/5 flex flex-col justify-between mx-8 lg:mx-16 items-start">
        <div className=" mt-5 mb-3 text-lg font-semibold">Contact Info</div>
        <ContactInfoForm />
      </div>
    </>
  );
};

const BasicInformation = () => {
  return (
    <>
      <div className=" w-full flex">
        <div className=" w-1/4">
          <p>Profile Picture</p>
          <div className=" w-[90%] h-[90%] bg-gray-200 rounded-lg"></div>
        </div>

        <FormComponent />
      </div>
    </>
  );
};

const PersonalInformation = () => {
  const Experience = ["Level 1", "Level 2", "Level 3", "Level 4"];

  return (
    <>
      <div className=" mt-3 w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <SmallDropdowns
            style="w-[49%]"
            label="Nationality"
            options={Experience}
          />
          <SmallDropdowns
            style="w-[49%]"
            label="Date of Birth"
            options={Experience}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <SmallDropdowns style="w-[49%]" label="Gender" options={Experience} />
          <SmallDropdowns
            style="w-[49%]"
            label="Marital Status"
            options={Experience}
          />
        </div>

        <div className=" my-5">
          <h1 className=" text-sm font-medium">Biography</h1>
          <textarea
            className="w-full my-2 py-2 border-2 h-[300px] rounded-md px-5 outline-none"
            type="text"
            placeholder="Write down your biography here. Let the employers know who you are..."
          />
        </div>
      </div>
    </>
  );
};

const FormComponent = () => {
  return (
    <>
      <div className=" w-3/4 h-1/3 mx-5">
        <MultipleSmallInputBox />
      </div>
    </>
  );
};

const MultipleSmallInputBox = () => {
  const Experience = ["Level 1", "Level 2", "Level 3", "Level 4"];
  const Education = ["UG", "PG", "Masters", "Gawaar"];
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <SmallInputBoxes style="w-[49%]" label="Full name" placeholder="" />
        <SmallInputBoxes
          style="w-[49%]"
          label="Title/headline"
          placeholder=""
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <SmallDropdowns
          style="w-[49%]"
          label="Experience"
          options={Experience}
        />
        <SmallDropdowns style="w-[49%]" label="Education" options={Education} />
      </div>
      <SmallInputBoxes
        style=""
        label="Personal Website"
        placeholder="Paste link here"
      />
    </>
  );
};

const SmallInputBoxes = ({ style, label, placeholder }) => {
  return (
    <>
      <div className={`${style}`}>
        <h1 className=" text-sm font-medium">{label}</h1>
        <input
          className="w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

const SmallDropdowns = ({ style, label, options }) => {
  console.log("i am rerendered");
  return (
    <>
      <div className={`${style} my-3`}>
        <h1 className=" text-sm font-medium">{label}</h1>
        <select
          name="cars"
          id="cars"
          className=" w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
        >
          <option>Select</option>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

const ContactInfoForm = () => {
  return (
    <>
      <SmallInputBoxes style="w-full my-5" label="Location" placeholder="" />
      <SmallInputBoxes
        style="w-full mb-5"
        label="Phone"
        placeholder="Phone Number"
      />
      <SmallInputBoxes
        style="w-full mb-5"
        label="Mail"
        placeholder="Email address"
      />
      <div className=" w-full h-20 mb-10 flex justify-center items-center">
        <button className=" bg-[#0a65cc] shadow hover:shadow-xl text-white w-1/3 h-14 rounded-lg font-semibold text-xl ">
          Submit
        </button>
      </div>
    </>
  );
};

export default CompanyInfo;
