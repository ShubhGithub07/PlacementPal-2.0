import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signing = () => {
  return (
    <>
      <div className="w-11/12 md:w-3/5 h-[90%] md:h-4/5 bg-white shadow-xl rounded-xl flex flex-col justify-start pt-10 items-start px-5 md:px-20 mx-auto">
        <SigningHeader
          Heading="Create Account"
          Altmsg="Already have an account?"
          Altmsglink=" Login"
          Linkto="/login"
        />
        <ToggleButton />
        <div className="w-full md:w-[90%] h-[60%] mt-5">
          <AllInputBoxes />
          <SubmitButton value="Sign up" Linkto="/" />
        </div>
      </div>
    </>
  );
};

const SigningHeader = ({ Heading, Altmsg, Altmsglink, Linkto }) => {
  return (
    <>
      <div className="text-2xl font-semibold">{Heading}</div>
      <p className="my-2">
        {Altmsg}
        <Link to={Linkto} className="text-blue-700">
          {Altmsglink}
        </Link>
        .
      </p>
    </>
  );
};

const ToggleButton = () => {
  const [selected, setSelected] = useState("candidate");
  return (
    <div className="w-full md:w-[90%] h-20 bg-[#e3e2e2] rounded-md flex flex-col justify-start pt-2 items-center mt-5 md:mt-0">
      <div className="text-sm text-[#434343]">CREATE ACCOUNT AS A</div>
      <div className="w-full md:w-[90%] flex justify-center mt-1">
        <button
          className={`px-4 w-1/2 py-2 rounded-lg ${
            selected === "candidate" ? "bg-blue-900 text-white" : "text-black"
          }`}
          onClick={() => setSelected("candidate")}
        >
          Candidate
        </button>
        <button
          className={`px-4 w-1/2 py-2 rounded-lg ${
            selected === "employer" ? "bg-blue-900 text-white" : "text-black"
          }`}
          onClick={() => setSelected("employer")}
        >
          Employers
        </button>
      </div>
    </div>
  );
};

const AllInputBoxes = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <input
          className="w-full md:w-[49%] my-2 border-2 h-10 rounded-md px-5 outline-none"
          type="text"
          placeholder="First name"
        />
        <input
          className="w-full md:w-[49%] my-2 border-2 h-10 rounded-md px-5 outline-none"
          type="text"
          placeholder="Last name"
        />
      </div>
      <InputBoxes placeholder="Email" type="email" />
      <InputBoxes placeholder="Password" type="password" />
      <InputBoxes placeholder="Confirm password" type="password" />
    </>
  );
};

const InputBoxes = ({ placeholder, type }) => {
  return (
    <>
      <input
        className="w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

const SubmitButton = ({ value, Linkto }) => {
  return (
    <>
      <div className="h-12 mt-5 flex justify-center items-center">
        <Link
          to={Linkto}
          className="w-3/5 md:w-2/5 bg-blue-500 h-full flex justify-center items-center text-white font-semibold text-xl rounded-xl shadow hover:shadow-xl"
        >
          {value}
        </Link>
      </div>
    </>
  );
};

export {
  Signing,
  SigningHeader,
  ToggleButton,
  AllInputBoxes,
  InputBoxes,
  SubmitButton,
};
