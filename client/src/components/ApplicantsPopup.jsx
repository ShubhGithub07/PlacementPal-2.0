import React from "react";
import { format, parseISO } from "date-fns";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ApplicantPopup = ({ show, onClose, applicant }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!show || !applicant) return null;

  const handleShortlist = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/api/v1/job/shortlist`,
        {
          userId: applicant.postedBy,
          cardId: id,
        }
      );
      console.log("Shortlist response:", response);
      if (response.status === 200) {
        navigate("/edashboard");
      }
    } catch (error) {
      console.error("Error shortlisting the applicant:", error);
    }
  };

  const handleReject = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/api/v1/job/reject`,
        {
          userId: applicant.postedBy,
          cardId: id,
        }
      );
      console.log("Shortlist response:", response);
      if (response.status === 200) {
        navigate("/edashboard");
      }
    } catch (error) {
      console.error("Error shortlisting the applicant:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl overflow-y-auto max-h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{`Apply Job: ${applicant.role}`}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Biography</div>
              <p>{applicant.biography}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Cover Letter</div>
              <p>{applicant.postedBy}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Date of Birth</div>
              <p>{format(parseISO(applicant.DOB), "dd MMM, yyyy")}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Nationality</div>
              <p>{applicant.nationality}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Gender</div>
              <p>{applicant.gender}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Marital Status</div>
              <p>{applicant.martialStatus}</p>
            </div>
          </div>
          <div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Location</div>
              <p>{applicant.location}</p>
              <p>{id}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Phone</div>
              <p>{applicant.phone}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Email</div>
              <p>{applicant.email}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Website</div>
              <a
                href={`http://${applicant.personalWebsite}`}
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {applicant.personalWebsite}
              </a>
            </div>
            <div className="text-sm mb-4">
              <a href={applicant.resume} className="text-blue-600">
                Download Resume
              </a>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleShortlist}
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Hire
              </button>
              <button
                onClick={handleReject}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantPopup;
