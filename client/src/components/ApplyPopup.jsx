import React from 'react';

const ApplyPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Apply Job: Senior UX Designer</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            &times;
          </button>
        </div>
        <div className="mb-4">
          <textarea
            className="w-full h-40 p-2 border outline-none rounded-lg"
            placeholder="Write down your biography here. Let the employers know who you are..."
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
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
