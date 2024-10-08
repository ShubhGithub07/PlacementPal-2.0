import { React, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const ApplyPopup = ({ show, jobTitle, jobId, onClick }) => {
  if (!show) return null;

  const [coverLetter, setCoverLetter] = useState("");
  const handleSubmit = async () => {
    onClick();
    const accessToken = localStorage.getItem("token");
    const decodedToken = jwtDecode(accessToken);
    const LoggedInUserId = decodedToken.userId;

    const postData = {
      jobId: jobId,
      coverLetter: coverLetter,
      userId: LoggedInUserId,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/api/v1/application/post`,
        postData
      );
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Apply for: {jobTitle}</h2>
          <button
            onClick={onClick}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <div className="mb-4">
          <textarea
            className="w-full h-40 p-2 border outline-none rounded-lg"
            placeholder="Write down the cover letter"
            onChange={(e) => {
              setCoverLetter(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyPopup;
