const ChooseUs = () => {
  return (
    <>
      <div className="mt-[7rem]  ">
        <div className="px-6 py-8 mb-14 text-center bg-[#FFF4EC]">
          <h1 className="text-xl mb-2 sm:text-2xl md:text-[52px] font-bold text-center">
            Why Choose Us?
          </h1>
          <p className="pt-4 font-normal   text-xs sm:leading-5  text-[#2F2F2F] md:text-lg sm:text-xs sm:px-14 md:mt-6 text-center mx-auto md:px-80">
            Kip-Clean Cleaning and Plumbing Service has established itself as a
            beacon of reliability and excellence in the industry. Through a
            commitment to unparalleled service and customer satisfaction,
            Kip-Clean has consistently exceeded the expectations of its clients.
          </p>
        </div>
        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-7 mx-4 md:mx-[5rem] lg:grid-cols-2 lg:grid-rows-2 mt-7 h-[45rem] text-white">
          <div className=" relative w-full h-full sm:h-[20rem] lg:h-full lg:row-span-1 bg-img3 bg-cover bg-center rounded-lg md:rounded-[2.5rem] shadow-[#007FFF]/ shadow-xl p-4 sm:p-8">
            <div className="absolute inset-0 bg-[#002549] md:bg-[#252525] opacity-75 rounded-lg md:rounded-[2.5rem]"></div>
            <div className="flex flex-col justify-between relative h-full">
              <div className="">
                <img
                  className="w-[2rem] md:w-[4rem]"
                  src="/Vector1.png"
                  alt=""
                />
              </div>

              <div className="flex flex-col sm:gap-2 pr-24 md:pr-0">
                <p className="text-xl font-bold sm:text-xl md:text-4xl ">
                  Same Day Availability
                </p>
                <p className=" text-sm font-Inter  sm:text-sm md:text-xl">
                  Emergency Service needed? We provide immediate booking
                  confirmation for your cleaning service with us.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-3 w-full h-full sm:h-[20rem] lg:h-full lg:col-span-1 md:row-span-2 md:order-2 bg-img2 bg-cover bg-center rounded-lg md:rounded-[2.5rem] shadow-black/50 shadow-xl p-4 sm:p-8 md:p-8">
            <div className="absolute inset-0 bg-[#002549] md:bg-[#252525] opacity-75 rounded-lg md:rounded-[2.5rem]"></div>
            <div className="flex flex-col justify-between relative h-full">
              <div>
                <img
                  className="w-[2rem] md:w-[4rem]"
                  src="/Vector3.png"
                  alt=""
                />
              </div>

              <div className="flex flex-col sm:gap-4">
                <p className="text-xl font-bold sm:text-xl md:text-4xl">
                  Quick Response
                </p>
                <p className="font-normal font-Inter text-sm sm:text-sm md:text-xl pr-28 md:pr-0">
                  For Emergency cleaning and plumbing services, you can count on
                  us to respond swiftly and get the job done right.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-2 w-full h-full sm:h-[20rem] lg:h-full lg:row-span-1 md:order-3 bg-img1 bg-cover bg-center rounded-lg md:rounded-[2.5rem] shadow-black/50 shadow-xl p-4 sm:p-8 md:p-8">
            <div className="absolute inset-0 bg-[#002549] md:bg-[#252525] opacity-75 rounded-lg md:rounded-[2.5rem]"></div>
            <div className="flex flex-col justify-between relative h-full">
              <div>
                <img
                  className="w-[2rem] md:w-[4rem]"
                  src="/Vector2.png"
                  alt=""
                />
              </div>

              <div className="flex flex-col sm:gap-4">
                <h2 className="text-xl font-bold  sm:text-xl md:text-4xl ">
                  Great Feedback
                </h2>
                <p className="  text-sm font-Inter  sm:text-sm md:text-xl pr-28 md:pr-0">
                  We have a great customer return rate and most would recommend
                  us to a friend or family member.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
