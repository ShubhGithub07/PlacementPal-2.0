import Navbar from "../components/Navbar";

export const NotFoundpage = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <Navbar />
      <div className=" w-full h-screen flex justify-center items-center">
        <div className=" text-6xl font-bold">
          {token ? "404 Not Found" : "You need to login first"}
        </div>
        )
      </div>
    </>
  );
};
