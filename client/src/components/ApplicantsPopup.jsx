import React from "react";
import { useNavigate } from "react-router-dom";

const ApplicantPopup = ({ show, onClose, applicant }) => {
  if (!show || !applicant) return null;
  const navigate = useNavigate();

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
              <p>{applicant.details.bio}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Cover Letter</div>
              <p>{applicant.details.coverLetter}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Date of Birth</div>
              <p>{applicant.details.dob}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Nationality</div>
              <p>{applicant.details.nationality}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Gender</div>
              <p>{applicant.details.gender}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Marital Status</div>
              <p>{applicant.details.maritalStatus}</p>
            </div>
          </div>
          <div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Location</div>
              <p>{applicant.details.location}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Phone</div>
              <p>{applicant.details.phone}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Email</div>
              <p>{applicant.details.email}</p>
            </div>
            <div className="text-sm mb-4">
              <div className="font-semibold">Website</div>
              <a
                href={`http://${applicant.details.website}`}
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {applicant.details.website}
              </a>
            </div>
            <div className="text-sm mb-4">
              <a href={applicant.resume} className="text-blue-600">
                Download Resume
              </a>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => {
                  navigate("/edashboard");
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Hire
              </button>
              <button
                onClick={() => {
                  navigate("/edashboard");
                }}
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
