import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CleaningServices = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const services = [
    {
      icon: "/mop.svg",
      heading: "Regular Cleaning",
      details:
        "Our regular cleaning service is designed to meet the unique needs of each client. Whether you're looking for weekly, bi-weekly, or monthly cleaning, we've got you covered. Our comprehensive cleaning checklist includes dusting, vacuuming, mopping, surface disinfection, bathroom sanitization, kitchen cleaning, and more.",
    },
    {
      icon: "/plumbing.svg",
      heading: "Plumbing installation",
      details:
        "With years of expertise in the industry, our skilled plumbers are equipped to handle a wide range of installation projects. From piping and fixtures to water heaters and sewage systems, we have the knowledge and experience to ensure that your plumbing installation is completed with precision and care.",
    },
    {
      icon: "/vacuum.svg",
      heading: "Office Cleaning",
      details:
        "Our office cleaning service covers all aspects of maintaining a clean and sanitary workspace. From dusting and vacuuming to disinfecting surfaces and sanitizing restrooms, we leave no corner untouched. Our professionals pay special attention to high-traffic areas, common touchpoints, and sensitive equipment to ensure a meticulous clean every time.",
    },
    {
      icon: "/valve.svg",
      heading: "Pipe Works",
      details:
        "Our pipe works service covers a wide range of installation and upgrade options to enhance the efficiency and longevity of your plumbing system. Whether you need new pipes installed, old pipes replaced, or upgrades to accommodate increased demand, our skilled technicians have the expertise and equipment to get the job done right the first time.",
    },
    {
      icon: "/water_heater.svg",
      heading: "Heater service",
      details:
        "We offer professional installation services for a variety of water heater types, including traditional tank-style heaters, tankless heaters, and heat pump water heaters. Our team will help you select the right size and type of water heater for your needs and ensure proper installation for optimal performance and efficiency.",
    },
    {
      icon: "/cleaning_bucket.svg",
      heading: "Deep Cleaning",
      details:
        "Our deep cleaning service is designed to tackle dirt, grime, and buildup in every corner of your home. From baseboards to ceiling fans, we leave no stone unturned in our quest to restore your home's shine. Our comprehensive checklist includes deep dusting, vacuuming, mopping, scrubbing, and sanitizing of all surfaces.",
    },
  ];

  const slicedServices = isMobile && !showAll ? services.slice(0, 4) : services;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 sm:mt-[25rem] lg:mt-20">
      <div className="flex flex-col items-center mx-8 mt-16 text-center">
        <h1 className="text-[40px] leading-10 md:text-[52px] font-semibold">
          Cleaning And Plumbing Services
        </h1>
        <p className="text-[#2F2F2F] text-sm md:text-xl text-center font-medium mt-8 md:px-[20rem]">
          We are your local home cleaning and plumbing professionals, committed
          to thorough, reliable service. All employees are background checked
          and insured, so you can have peace of mind.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 mx-6 sm:mx-6 md:mx-14 mt-8 md:grid-cols-2">
        {slicedServices.map((service, index) => (
          <div
            key={index}
            className="bg-[#fff4ec] w-auto sm:w-auto md:w-auto rounded-2xl px-10 py-10 md:px-14"
          >
            <div className="flex justify-center items-center w-16 h-16 border-2 border-[#CC5500] rounded-lg">
              <img
                src={service.icon}
                alt="icon"
                className="m-auto max-w-full max-h-full object-contain"
              />
            </div>
            <h1 className="pt-4 text-xl md:text-2xl font-medium">
              {service.heading}
            </h1>
            <p className="pt-4 text-xs md:text-sm font-normal font-Inter">
              {service.details}
            </p>
            <div className="mt-4">
              <Link className="flex items-center gap-1" to="/Services">
                <p className="text-[#3799EF] text-base font-medium">
                  Learn More
                </p>
                <img
                  src="/expand_circle_right.svg"
                  alt="circle-right"
                  className="w-fit"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {isMobile && !showAll && (
        <div>
          <button
            className="bg-[#CC5500] rounded-3xl px-3 py-3 text-white"
            onClick={() => setShowAll(true)}
          >
            View all services
          </button>
        </div>
      )}
    </div>
  );
};

export default CleaningServices;
