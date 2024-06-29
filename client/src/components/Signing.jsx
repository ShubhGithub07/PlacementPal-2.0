import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  emailAtom,
  firstNameAtom,
  lastNameAtom,
  passwordAtom,
  confPasswordAtom,
  selectedAtom,
} from "../store/atoms/Singing";
import axios from "axios";

const Signing = () => {
  return (
    <RecoilRoot>
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
          <SubmitButton value="Sign up" />
        </div>
      </div>
    </RecoilRoot>
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
  const [selected, setSelected] = useRecoilState(selectedAtom);

  return (
    <div className="w-full md:w-[90%] h-20 bg-[#e3e2e2] rounded-md flex flex-col justify-start pt-2 items-center mt-5 md:mt-0">
      <div className="text-sm text-[#434343]">CREATE ACCOUNT AS A</div>
      <div className="w-full md:w-[90%] flex justify-center mt-1">
        <button
          className={`px-4 w-1/2 py-2 rounded-lg ${
            selected === "Candidate" ? "bg-blue-900 text-white" : "text-black"
          }`}
          onClick={() => setSelected("Candidate")}
        >
          Candidate
        </button>
        <button
          className={`px-4 w-1/2 py-2 rounded-lg ${
            selected === "Employer" ? "bg-blue-900 text-white" : "text-black"
          }`}
          onClick={() => setSelected("Employer")}
        >
          Employer
        </button>
      </div>
    </div>
  );
};

const AllInputBoxes = () => {
  const [firstName, setFirstName] = useRecoilState(firstNameAtom);
  const [lastName, setLastName] = useRecoilState(lastNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [confPassword, setConfPassword] = useRecoilState(confPasswordAtom);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <input
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full md:w-[49%] my-2 border-2 h-10 rounded-md px-5 outline-none"
          type="text"
          placeholder="First name"
          value={firstName}
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          className="w-full md:w-[49%] my-2 border-2 h-10 rounded-md px-5 outline-none"
          type="text"
          placeholder="Last name"
          value={lastName}
        />
      </div>
      <InputBoxes
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        value={email}
      />
      <InputBoxes
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <InputBoxes
        onChange={(e) => setConfPassword(e.target.value)}
        placeholder="Confirm password"
        type="password"
        value={confPassword}
      />
    </>
  );
};

const InputBoxes = ({ onChange, placeholder, type, value }) => {
  return (
    <input
      className="w-full my-2 border-2 h-10 rounded-md px-5 outline-none"
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

const SubmitButton = ({ value }) => {
  const navigate = useNavigate();
  const firstName = useRecoilValue(firstNameAtom);
  const lastName = useRecoilValue(lastNameAtom);
  const email = useRecoilValue(emailAtom);
  const password = useRecoilValue(passwordAtom);
  const confPassword = useRecoilValue(confPasswordAtom);
  const selected = useRecoilValue(selectedAtom);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    setIsLoading(true);
    setError(null);

    if (password !== confPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:7000/api/v1/users/register", {
        firstName,
        lastName,
        email,
        password,
        role: selected,
      });

      navigate("/"); // Redirect to a protected route after successful registration
    } catch (err) {
      setError(err.response.data.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-12 mt-5 flex justify-center items-center">
      <button
        onClick={handleRegister}
        className="w-3/5 md:w-2/5 bg-blue-500 h-full flex justify-center items-center text-white font-semibold text-xl rounded-xl shadow hover:shadow-xl"
      >
        {isLoading ? "Loading..." : value}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
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
