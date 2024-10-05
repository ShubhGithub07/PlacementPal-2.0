const Testimonial = () => {
  return (
    <>
      <div className="h-auto py-20 border-b-2">
        <div className=" font-semibold text-4xl mx-8 lg:ml-16 flex justify-center items-center text-center lg:text-left">
          Clients Testimonial
        </div>
        <div className="mt-20 h-auto mx-8 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <TestimonialCard
            name="Aisha R."
            role="HR Manager"
            comment="JobHub has transformed our hiring process! The ability to filter candidates based on specific skills saved us so much time. We filled key positions in half the usual time."
          />
          <TestimonialCard
            name="Rahul M."
            role="Job Seeker"
            comment="JobHub's interface is so easy to use. I found several job opportunities that matched my profile perfectly. The application tracking feature kept me updated every step of the way!"
          />
          <TestimonialCard
            name="Priya S."
            role="Recruiter"
            comment="With JobHub, managing multiple job postings is a breeze. The built-in analytics and applicant tracking system helped us make faster, data-driven hiring decisions."
          />
        </div>
      </div>
    </>
  );
};

const TestimonialCard = ({ name, role, comment }) => {
  return (
    <>
      <div className="h-auto m-4 border border-slate-100 bg-slate-50 shadow hover:shadow-lg rounded-xl flex flex-col justify-between p-4 cursor-default">
        <i className="ml-2">"{comment}"</i>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <div className="w-16 h-16 m-2 rounded-xl bg-[#e7f0fa] flex justify-center items-center">
              Logo
            </div>
            <div className="ml-2">
              <div>{name}</div>
              <div>{role}</div>
            </div>
          </div>
          <div className="text-4xl font-bold mr-4">"</div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
