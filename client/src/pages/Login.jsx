import {
  SigningHeader,
  InputBoxes,
  SubmitButton,
} from "../components/Signing.jsx";

export const Login = () => {
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
          <div className="w-full md:w-[90%] h-[60%] mt-5">
            <InputBoxes placeholder="Email" type="email" />
            <InputBoxes placeholder="Password" type="password" />
            <SubmitButton value="Log in" Linkto="/" />
          </div>
        </div>
      </div>
    </>
  );
};