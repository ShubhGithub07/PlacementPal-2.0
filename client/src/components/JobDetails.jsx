import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ApplyPopup from "./ApplyPopup";
import FeaturedJob from "./FeaturedJob";

const JobDetails = () => {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [jobDetail, setJobDetail] = useState({});


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/v1/job/${id}`)
      .then((response) => {
        setJobDetail(response.data.data.job);
      })
      .catch((error) => {
        console.error("There was an error fetching the jobs!", error);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-16">
      <header className="flex justify-between items-center border-b pb-6 mb-6">
        <div className="flex items-center">
          <div className="h-28 w-28 m-4 rounded-lg flex justify-center items-center">
            <img
              src={jobDetail.logo}
              alt={jobDetail.companyName}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{jobDetail.jobTitle}</h1>
            <span className="text-gray-500">at {jobDetail.companyName}</span>
            <div className="mt-2">
              <span className="text-green-500 border border-green-500 rounded px-2 py-1 text-xs mr-2">
                {jobDetail.jobType}
              </span>
              <span className="text-red-500 border border-red-500 rounded px-2 py-1 text-xs">
                Featured
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={togglePopup}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >

          Apply Now
        </button>
        <ApplyPopup show={showPopup} onClose={togglePopup} />
      </header>
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-2/3">
          <JobDescription description={jobDetail.jobDescription} />
        </div>
        <div className="lg:w-1/3">
          <JobOverview
            props={{
              salaryFrom: jobDetail.salaryFrom,
              salaryTo: jobDetail.salaryTo,
              address: jobDetail.address,
              jobPosted: jobDetail.jobPostedOn,
              vacancy: jobDetail.vacancy,
              jobType: jobDetail.jobType,
              experience: jobDetail.experience,
              gender: jobDetail.gender,
              jobLevel: jobDetail.jobLevel,
            }}
          />
          <JobBenefits />
        </div>
      </div>
      <FeaturedJob username="Related Jobs" />
    </div>
  );
};

const JobDescription = ({ description }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Job Description</h1>
      <p className="mb-6">{description}</p>
      <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Develop high-quality software design and architecture.</li>
        <li>
          Identify, prioritize, and execute tasks in the software development
          life cycle.
        </li>
        <li>
          Develop tools and applications by producing clean, efficient code.
        </li>
        <li>Automate tasks through appropriate tools and scripting.</li>
        <li>Review and debug code.</li>
        <li>Perform validation and verification testing.</li>
        <li>
          Collaborate with internal teams and vendors to fix and improve
          products.
        </li>
        <li>Document development phases and monitor systems.</li>
        <li>Ensure software is up-to-date with latest technologies.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Requirements</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          Bachelor's degree in Computer Science, Engineering or related field.
        </li>
        <li>Proven experience as a Software Engineer or similar role.</li>
        <li>
          Experience with software design and development in a test-driven
          environment.
        </li>
        <li>
          Knowledge of coding languages (e.g., C++, Java, JavaScript) and
          frameworks/systems (e.g., AngularJS, Git).
        </li>
        <li>
          Experience with databases and Object-Relational Mapping (ORM)
          frameworks (e.g., Hibernate).
        </li>
        <li>Ability to learn new languages and technologies.</li>
        <li>Excellent communication skills.</li>
        <li>Resourcefulness and troubleshooting aptitude.</li>
        <li>Attention to detail.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Desirable</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          Working knowledge of eCommerce platforms, ideally Shopify but also
          others e.g. Magento, WooCommerce, Visualsoft to enable seamless
          migrations.
        </li>
        <li>Working knowledge of payment gateways.</li>
        <li>API platform experience / Building restful APIs.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Benefits</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          Early finish on Fridays for our end of week catch up (4:30 finish, and
          drink of your choice from the bar).
        </li>
        <li>
          28 days holiday (including bank holidays) rising by 1 day per year
          PLUS an additional day off on your birthday.
        </li>
        <li>Generous annual bonus.</li>
        <li>Healthcare package.</li>
        <li>Paid community days to volunteer for a charity of your choice.</li>
        <li>
          £100 contribution for your own personal learning and development.
        </li>
        <li>Free Breakfast on Mondays and free snacks in the office.</li>
        <li>
          Access to Perkbox with numerous discounts plus free points from the
          company to spend as you wish.
        </li>
        <li>Cycle 2 Work Scheme.</li>
        <li>Brand new MacBook Pro.</li>
        <li>
          Joining an agency on the cusp of exponential growth and being part of
          this exciting story.
        </li>
      </ul>
    </div>
  );
};

const JobOverview = (props) => {
  const {
    salaryFrom,
    salaryTo,
    address,
    jobPosted,
    vacancy,
    jobType,
    experience,
    gender,
    jobLevel,
  } = props.props;
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white mb-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-700">Salary (USD)</p>
          <p className="text-green-500 text-xl font-bold">
            ${salaryFrom} - ${salaryTo}
          </p>
          <p className="text-gray-500">Monthly salary</p>
        </div>
        <div>
          <p className="text-gray-700">Job Location</p>
          <p className="text-gray-900 font-medium">{address}</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="text-gray-600">Job Posted:</p>
            <p className="font-medium">{jobPosted}</p>
          </div>
          <div>
            <p className="text-gray-600">Vacancy:</p>
            <p className="font-medium">{vacancy}</p>
          </div>
          <div>
            <p className="text-gray-600">Employment Status:</p>
            <p className="font-medium">{jobType}</p>
          </div>
          <div>
            <p className="text-gray-600">Experience:</p>
            <p className="font-medium">At least {experience} years</p>
          </div>
          <div>
            <p className="text-gray-600">Gender:</p>
            <p className="font-medium">{gender}</p>
          </div>
          <div>
            <p className="text-gray-600">Job Level:</p>
            <p className="font-medium">{jobLevel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobBenefits = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Job Benefits</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.85 7.9a3 3 0 010 4.24l-2.25 2.25a6 6 0 01-4.24 1.76h-3.2A6 6 0 014.4 14.4l-2.25-2.25a3 3 0 010-4.24A8 8 0 017 4.4h10a8 8 0 012.85.85z"
            />
          </svg>
          <p>401K Salary</p>
        </div>

        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7h8M8 11h4m2.13 7.12l-4.93-4.93a4.5 4.5 0 00-6.37 6.37l4.93 4.93a4.5 4.5 0 006.37-6.37z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 8a6 6 0 00-6-6"
            />
          </svg>
          <p>Async</p>
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10a3 3 0 00-3-3H9a3 3 0 00-3 3v2a3 3 0 003 3h3a3 3 0 003-3v-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14h.01"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6.93 11.93a2 2 0 112.83-2.83 2 2 0 01-2.83 2.83z"
            />
          </svg>
          <p>Learning budget</p>
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 3a1 1 0 000 2h6a1 1 0 100-2H9zm0 4a1 1 0 000 2h6a1 1 0 100-2H9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8.75A2.75 2.75 0 015.75 6h12.5A2.75 2.75 0 0121 8.75V21a2.75 2.75 0 01-2.75 2.75H5.75A2.75 2.75 0 013 21V8.75z"
            />
          </svg>
          <p>Vision Insurance</p>
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9a3 3 0 11-6 0 3 3 0 016 0zm16 0a3 3 0 11-6 0 3 3 0 016 0zM12 22s8-4 8-10V9c0-1.05-.95-2-2-2h-3l-2.5 4h-5L7 7H4c-1.05 0-2 .95-2 2v3c0 6 8 10 8 10z"
            />
          </svg>
          <p>4 day workweek</p>
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6l4 4"
            />
          </svg>
          <p>Profit Sharing</p>
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3h8v4m-4 14v-5m-6 5v-5m10 5v-5"
            />
          </svg>
          <p>Free gym membership</p>
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14l1 9H4l1-9zm0 0H4a2 2 0 012-2h12a2 2 0 012 2h-1m-2 0H7"
            />
          </svg>
          <p>Equity Compensation</p>
        </div>
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 7h16M4 11h16m-9 4h5"
            />
          </svg>
          <p>No politics at work</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
