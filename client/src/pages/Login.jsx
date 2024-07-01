import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { SigningHeader, InputBoxes } from "../components/Signing.jsx";
import { emailAtom, passwordAtom } from "../store/atoms/Singing";

export const Login = () => {
  return (
    <RecoilRoot>
      <LoginSection />
    </RecoilRoot>
  );
};

const LoginSection = () => {
  return (
    <>
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
    </>
  );
};

const TwoInputBoxes = () => {
  const [email, setEmail] = useRecoilState(emailAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  return (
    <>
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
        <LoginButton value="Log in" Linkto="/dashboard" />
      </div>
    </>
  );
};

const LoginButton = ({ value, Linkto }) => {
  const email = useRecoilValue(emailAtom);
  const password = useRecoilValue(passwordAtom);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    setIsLoading(true);
    setError(null);

    await axios
      .post("http://localhost:7000/api/v1/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.token);
          alert("User registered successfully");
          console.log("if", res.data.token);
        } else {
          alert(data.message);
          console.log("else", res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //   } catch (err) {
    //     console.log("I am in catch");
    //     setError(err.message);
    //   } finally {
    //   console.log("I am in finally");
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="h-12 mt-5 flex justify-center items-center">
      <Link
        onClick={handleRegister}
        to={Linkto}
        className="w-3/5 md:w-2/5 bg-blue-500 h-full flex justify-center items-center text-white font-semibold text-xl rounded-xl shadow hover:shadow-xl"
      >
        {isLoading ? "Loading..." : value}
      </Link>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
