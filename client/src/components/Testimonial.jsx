const Testimonial = () => {
  return (
    <>
      <div className="h-auto py-20 border-b-2">
        <div className=" font-semibold text-4xl mx-8 lg:ml-16 flex justify-center items-center text-center lg:text-left">
          Clients Testimonial
        </div>
        <div className="mt-20 h-auto mx-8 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </>
  );
};

const TestimonialCard = () => {
  return (
    <>
      <div className="h-auto m-4 border border-slate-100 shadow hover:shadow-lg rounded-xl flex flex-col justify-between p-4">
        <div>
          <div className="my-5 ml-2">O O O O O</div>
          <div className="ml-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            labore, dolorum ea cumque architecto, culpa quam ducimus deleniti
            excepturi aliquid ad. Debitis explicabo illum molestiae earum nobis
            voluptatem esse doloribus!
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <div className="w-16 h-16 m-2 rounded-xl bg-[#e7f0fa] flex justify-center items-center">
              Logo
            </div>
            <div className="ml-2">
              <div>Azam Ali Shaikh</div>
              <div>Full Stack Developer</div>
            </div>
          </div>
          <div className="text-4xl font-bold mr-4">"</div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;