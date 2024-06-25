import React from "react";
import FeaturedJob from "./FeaturedJob";

const JobDetails = () => {
  return (
    <>
      <div className="max-w-5xl mx-20 p-4 mt-10">
        {" "}
        {/* Reduced mx-20 to mx-auto and mt-20 to mt-10 */}
        <header className="flex justify-between items-center border-b pb-4 mb-6">
          {" "}
          {/* Increased pb-4 to pb-6 and mb-4 to mb-6 */}
          <div>
            <div className="h-28 w-28 m-4 rounded-lg flex justify-center items-center bg-[#e7f0fa]">
              Logo
            </div>
            <h1 className="text-2xl font-bold">Senior UX Designer</h1>
            <span className="text-gray-500">at Facebook</span>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Apply Now
          </button>
        </header>
        <JobDescription />{" "}
        {/* Assuming JobDescription is a component or content block */}
      </div>

      {/* <div className="max-w-5xl mx-20 p-4 mt-20">
        <header className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <div className=" h-28 w-28 m-4 rounded-lg flex justify-center items-center bg-[#e7f0fa]">
              Logo
            </div>
            <h1 className="text-2xl font-bold">Senior UX Designer</h1>
            <span className="text-gray-500">at Facebook</span>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Apply Now
          </button>
        </header>

        <JobDescription />
      </div> */}

      <FeaturedJob username="Related Jobs" />
    </>
  );
};

const JobDescription = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Job Description</h1>
        <p className="mb-6">
          We are looking for a talented software engineer to join our dynamic
          team. The ideal candidate will have a passion for technology and a
          strong background in software development. You will work closely with
          other engineers and product managers to build high-quality software
          products.
        </p>
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
            Early finish on Fridays for our end of week catch up (4:30 finish,
            and drink of your choice from the bar).
          </li>
          <li>
            28 days holiday (including bank holidays) rising by 1 day per year
            PLUS an additional day off on your birthday.
          </li>
          <li>Generous annual bonus.</li>
          <li>Healthcare package.</li>
          <li>
            Paid community days to volunteer for a charity of your choice.
          </li>
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
            Joining an agency on the cusp of exponential growth and being part
            of this exciting story.
          </li>
        </ul>
      </div>

      <div className="flex-shrink-0 w-full lg:w-1/3 p-8 lg:ml-8">
        <JobOverview />
      </div>
    </div>
  );
};

const JobOverview = () => {
  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-700">Salary (USD)</p>
          <p className="text-green-500 text-xl font-bold">
            $100,000 - $120,000
          </p>
          <p className="text-gray-500">Yearly salary</p>
        </div>
        <div>
          <p className="text-gray-700">Job Location</p>
          <p className="text-gray-900 font-medium">Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 2a1 1 0 00-1 1v3H4a1 1 0 000 2h1v1a1 1 0 002 0V8h1a1 1 0 000-2H7V3a1 1 0 00-1-1zm3 7a1 1 0 011-1h2a1 1 0 110 2h-1v1a1 1 0 01-2 0v-1H8a1 1 0 01-1-1V8a1 1 0 011-1h1v1a1 1 0 011 1v1h1a1 1 0 011 1v1h-2a1 1 0 01-1-1v-1zM3 6h2V3a1 1 0 10-2 0v3zm4 7a1 1 0 00-1 1v3H5a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2H8v-3a1 1 0 00-1-1zm6-4h-2v2h2v-2zm2 0h-1v2h1a1 1 0 000-2zm1 4a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm-2 3h2v-2h-2v2zm-6 0h2v-2H6v2zM3 14h2v-2H3v2z" />
            </svg>
            <div>
              <p className="text-gray-600">Job Posted:</p>
              <p className="font-medium">14 Jun, 2021</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 2a1 1 0 00-1 1v3H4a1 1 0 000 2h1v1a1 1 0 002 0V8h1a1 1 0 000-2H7V3a1 1 0 00-1-1zm3 7a1 1 0 011-1h2a1 1 0 110 2h-1v1a1 1 0 01-2 0v-1H8a1 1 0 01-1-1V8a1 1 0 011-1h1v1a1 1 0 011 1v1h1a1 1 0 011 1v1h-2a1 1 0 01-1-1v-1zM3 6h2V3a1 1 0 10-2 0v3zm4 7a1 1 0 00-1 1v3H5a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2H8v-3a1 1 0 00-1-1zm6-4h-2v2h2v-2zm2 0h-1v2h1a1 1 0 000-2zm1 4a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm-2 3h2v-2h-2v2zm-6 0h2v-2H6v2zM3 14h2v-2H3v2z" />
            </svg>
            <div>
              <p className="text-gray-600">Job Expire In:</p>
              <p className="font-medium">14 Aug, 2021</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a7 7 0 100 14A7 7 0 009 2zM7 10H6a1 1 0 000 2h1a1 1 0 010 2H5a1 1 0 010-2h1a1 1 0 000-2H5a1 1 0 010-2h1a1 1 0 010-2H6a1 1 0 000-2h1a1 1 0 000 2H5a1 1 0 010 2h2a1 1 0 000 2zm4-6a1 1 0 100 2h1a1 1 0 010 2H9a1 1 0 000 2h2a1 1 0 010 2h-1a1 1 0 010-2H8a1 1 0 000-2h1a1 1 0 000-2H8a1 1 0 000-2h2a1 1 0 100-2h1z" />
            </svg>
            <div>
              <p className="text-gray-600">Job Level:</p>
              <p className="font-medium">Entry Level</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a7 7 0 100 14A7 7 0 009 2zM7 10H6a1 1 0 000 2h1a1 1 0 010 2H5a1 1 0 010-2h1a1 1 0 000-2H5a1 1 0 010-2h1a1 1 0 000-2H6a1 1 0 000-2h1a1 1 0 000 2H5a1 1 0 010 2h2a1 1 0 000 2zm4-6a1 1 0 100 2h1a1 1 0 010 2H9a1 1 0 000 2h2a1 1 0 010 2h-1a1 1 0 010-2H8a1 1 0 000-2h1a1 1 0 000-2H8a1 1 0 000-2h2a1 1 0 100-2h1z" />
            </svg>
            <div>
              <p className="text-gray-600">Experience:</p>
              <p className="font-medium">$50k-80k/month</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a7 7 0 100 14A7 7 0 009 2zM7 10H6a1 1 0 000 2h1a1 1 0 010 2H5a1 1 0 010-2h1a1 1 0 000-2H5a1 1 0 010-2h1a1 1 0 010-2H6a1 1 0 000-2h1a1 1 0 000 2H5a1 1 0 010 2h2a1 1 0 000 2zm4-6a1 1 0 100 2h1a1 1 0 010 2H9a1 1 0 000 2h2a1 1 0 010 2h-1a1 1 0 010-2H8a1 1 0 000-2h1a1 1 0 000-2H8a1 1 0 000-2h2a1 1 0 100-2h1z" />
            </svg>
            <div>
              <p className="text-gray-600">Education:</p>
              <p className="font-medium">Graduation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <h2 className="text-xl font-semibold mb-4">Share this job:</h2>
        <div className="flex space-x-4">
          <button className="flex items-center px-3 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5a2 2 0 100 4 2 2 0 000-4zM2 9a2 2 0 100 4 2 2 0 000-4zM2 13a2 2 0 100 4 2 2 0 000-4zM12 9a2 2 0 100 4 2 2 0 000-4zM12 13a2 2 0 100 4 2 2 0 000-4zM18 5a2 2 0 100 4 2 2 0 000-4zM12 5a2 2 0 100 4 2 2 0 000-4zM18 9a2 2 0 100 4 2 2 0 000-4zM18 13a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Copy Links
          </button>
          <button className="flex items-center px-3 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5a2 2 0 100 4 2 2 0 000-4zM2 9a2 2 0 100 4 2 2 0 000-4zM2 13a2 2 0 100 4 2 2 0 000-4zM12 9a2 2 0 100 4 2 2 0 000-4zM12 13a2 2 0 100 4 2 2 0 000-4zM18 5a2 2 0 100 4 2 2 0 000-4zM12 5a2 2 0 100 4 2 2 0 000-4zM18 9a2 2 0 100 4 2 2 0 000-4zM18 13a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            LinkedIn
          </button>
          <button className="flex items-center px-3 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5a2 2 0 100 4 2 2 0 000-4zM2 9a2 2 0 100 4 2 2 0 000-4zM2 13a2 2 0 100 4 2 2 0 000-4zM12 9a2 2 0 100 4 2 2 0 000-4zM12 13a2 2 0 100 4 2 2 0 000-4zM18 5a2 2 0 100 4 2 2 0 000-4zM12 5a2 2 0 100 4 2 2 0 000-4zM18 9a2 2 0 100 4 2 2 0 000-4zM18 13a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Twitter
          </button>
          <button className="flex items-center px-3 py-1 border rounded text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5a2 2 0 100 4 2 2 0 000-4zM2 9a2 2 0 100 4 2 2 0 000-4zM2 13a2 2 0 100 4 2 2 0 000-4zM12 9a2 2 0 100 4 2 2 0 000-4zM12 13a2 2 0 100 4 2 2 0 000-4zM18 5a2 2 0 100 4 2 2 0 000-4zM12 5a2 2 0 100 4 2 2 0 000-4zM18 9a2 2 0 100 4 2 2 0 000-4zM18 13a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

{
  /* <section className="mb-4">
          <h2 className="text-xl font-semibold">Job Description</h2>
          <p className="mt-2">
            Velstar is a Shopify Plus agency, and we partner with brands to help
            them grow, we also do the same with our people!
          </p>
          <p className="mt-2">
            Here at Velstar, we don't just make websites, we create exceptional
            digital experiences that consumers love. Our team of designers,
            developers, strategists, and creators work together to push brands
            to the next level.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Requirements</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>
              Great troubleshooting and analytical skills combined with the
              desire to tackle challenges head-on.
            </li>
            <li>
              3+ years of experience in back-end development working either with
              multiple smaller projects simultaneously or large-scale
              applications.
            </li>
            <li>
              Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
              Laravel.
            </li>
            <li>
              Working regularly with APIs and Web Services (REST, GraphQL, SOAP,
              etc).
            </li>
            <li>
              Have experience/awareness in Agile application development,
              commercial off-the-shelf software, middleware, servers and
              storage, and database management.
            </li>
            <li>
              Familiarity with version control and project management systems
              (e.g., Github, Jira).
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Desirable</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>
              Working knowledge of eCommerce platforms, ideally Shopify but also
              others e.g. Magento, WooCommerce, Visualsoft to enable seamless
              migrations.
            </li>
            <li>Working knowledge of payment gateways.</li>
            <li>API platform experience / Building restful APIs.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Benefits</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>
              Early finish on Fridays for our end of week catch up (4:30 finish,
              and drink of your choice from the bar).
            </li>
            <li>
              28 days holiday (including bank holidays) rising by 1 day per year
              PLUS an additional day off on your birthday.
            </li>
            <li>Generous annual bonus.</li>
            <li>Healthcare package.</li>
            <li>
              Paid community days to volunteer for a charity of your choice.
            </li>
            <li>
              £100 contribution for your own personal learning and development.
            </li>
            <li>Free Breakfast on Mondays and free snacks in the office.</li>
            <li>
              Access to Perkbox with numerous discounts plus free points from
              the company to spend as you wish.
            </li>
            <li>Cycle 2 Work Scheme.</li>
            <li>Brand new MacBook Pro.</li>
            <li>
              Joining an agency on the cusp of exponential growth and being part
              of this exciting story.
            </li>
          </ul>
        </section>

        <div className="flex-shrink-0 w-full lg:w-1/3 p-8">
          <JobOverview />
        </div> */
}
