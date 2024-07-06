import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import axios from "axios";
import { SigningHeader, InputBoxes } from "../components/Signing.jsx";
import { emailAtom, passwordAtom } from "../store/atoms/Singing";
import {
  loggedInUserAtom,
  loggedInUserIdAtom,
} from "../store/atoms/LoggedInUser.js";
import { jwtDecode } from "jwt-decode"; // Correct import

export const Login = () => {
  return (
    <RecoilRoot>
      <LoginSection />
    </RecoilRoot>
  );
};

const LoginSection = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#f7f7f8]">
      <div className="w-11/12 md:w-3/5 h-3/5 bg-white shadow-xl rounded-xl flex flex-col justify-start pt-12 items-start px-5 md:px-20 mx-auto">
        <SigningHeader
          Heading="Log In"
          Altmsg="Don't have an account?"
          Altmsglink=" Sign up"
          Linkto="/signup"
        />
        <TwoInputBoxes />
      </div>
    </div>
  );
};

const TwoInputBoxes = () => {
  const [email, setEmail] = useRecoilState(emailAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  return (
    <div className="w-full md:w-[90%] h-[60%] mt-5">
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
      <LoginButton value="Log in" Linkto="/" />
    </div>
  );
};

const LoginButton = ({ value, Linkto }) => {
  const email = useRecoilValue(emailAtom);
  const password = useRecoilValue(passwordAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use navigate for navigation
  const setLoggedInUser = useSetRecoilState(loggedInUserAtom);
  const LoggedInUser = useRecoilValue(loggedInUserAtom);
  const setLoggedInUserId = useSetRecoilState(loggedInUserIdAtom);
  const LoggedInUserId = useRecoilValue(loggedInUserIdAtom);

  useEffect(() => {
    console.log("after useEffect : user name -> ", LoggedInUser);
    console.log("after useEffect : user Id -> ", LoggedInUserId);
  }, [LoggedInUserId]);

  const handleRegister = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:7000/api/v1/users/login", {
        email: email,
        password: password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        const decodedToken = jwtDecode(res.data.token);
        setLoggedInUser(decodedToken.role);
        setLoggedInUserId(decodedToken.userId);
        navigate(Linkto);
      } else {
        setError("Login failed. Please try again.");
        console.log("else", res.data.token);
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-12 mt-5 flex justify-center items-center">
      <button
        onClick={handleRegister}
        className="w-3/5 md:w-2/5 bg-blue-500 h-full flex justify-center items-center text-white font-semibold text-xl rounded-xl shadow hover:shadow-xl"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : value}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
