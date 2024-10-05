import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Notification = () => {
  return (
    <>
      <Navbar />
      <div className=" h-screen flex justify-center items-center">
        <span className=" text-4xl font-semibold">No new notification</span>
      </div>
      <Footer />
    </>
  );
};


