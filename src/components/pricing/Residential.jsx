import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Residential = () => {
  const [openDropdown, setOpenDropdown] = useState({
    propertyType: false,
    propertySize: false,
    frequency: false,
  });

  const propertyType = [
    { type: "Studio/Self Con" },
    { type: "1 Bedroom flat" },
    { type: "2 Bedroom flat" },
    { type: "3 Bedroom flat" },
    { type: "1 Bedroom duplex" },
    { type: "2 Bedroom duplex" },
    { type: "3 Bedroom duplex" },
    { type: "4 Bedroom duplex" },
    { type: "5 Bedroom duplex" },
    { type: "6 Bedroom duplex" },
  ];

  const cleaningType = [
    { type: "Move-in/Move-out cleaning" },
    { type: "Deep cleaning" },
    { type: "Regular cleaning" },
    { type: "Cleaning/Fumigation" },
    { type: "Window cleaning" },
    { type: "Carpet upholstery cleaning" },
  ];

  const frequency = [
    { type: "2x monthly (1 Deep + 1 Regular + Pack)" },
    { type: "4x monthly (1 Deep + 3 Regular + Pack)" },
    { type: "8x monthly (1 Deep + 7 Regular + Pack)" },
    { type: "12x monthly (1 Deep + 11 Regular + Pack)" },
  ];

  return (
    <div className="my-4 transition-all duration-500 ">
      <h3 className="mb-4 text-start text-base font-medium md:text-xl md:text-start  ">
        Residential Cleaning Services
      </h3>
      <div className="p-8 rounded-lg bg-secondary text-[#848484] flex flex-col gap-4">
        <h1 className="font-normal text-sm   ">Type of cleaning</h1>
        <div className="">
          <select
            name="cleaningType"
            className="appearance-none cursor-pointer
              border border-[#949291] bg-transparent rounded-lg  w-full px-4 py-2 text-sm font-medium
              outline-orange pr-8"
            style={{
              backgroundImage: "url(/keyboard_arrow_up.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.5rem center",
              backgroundSize: "12px",
            }}
          >
            <option value="" disabled selected>
              Select type of cleaning
            </option>
            {cleaningType.map((item, index) => (
              <option value={item.type} key={index} className="bg-transparent ">
                {item.type}
              </option>
            ))}
          </select>
        </div>
        {/*  */}
        <div>
          <h1 className="font-normal text-sm  ">Size of Property </h1>
          <div className="">
            <select
              name="propertySize"
              className="appearance-none cursor-pointer
              border border-[#949291] bg-transparent rounded-lg mt-4 w-full px-4 py-2 text-sm font-medium
              outline-orange pr-8"
              style={{
                backgroundImage: "url(/keyboard_arrow_up.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.5rem center",
                backgroundSize: "12px",
              }}
            >
              <option value="" disabled selected>
                Select type of property
              </option>
              {propertyType.map((item, index) => (
                <option
                  value={item.type}
                  key={index}
                  className="bg-transparent "
                >
                  {item.type}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/*  */}
        <div>
          <h1 className="font-normal text-sm  ">Frequency of cleaning</h1>
          <div className="">
            <select
              name="frequency"
              className="appearance-none cursor-pointer
              border border-[#949291] bg-transparent rounded-lg mt-4 w-full px-4 py-2 text-sm font-medium
              outline-orange pr-8"
              style={{
                backgroundImage: "url(/keyboard_arrow_up.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.5rem center",
                backgroundSize: "12px",
              }}
            >
              <option value="" disabled selected>
                Select frequency of cleaning
              </option>
              {frequency.map((item, index) => (
                <option
                  value={item.type}
                  key={index}
                  className="bg-transparent "
                >
                  {item.type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/*  */}
        <hr />
        <div className="flex items-center justify-between md:mt-4 md:mb-6 ">
          <p className="font-light "> Total</p>
          <h1 className="text-lg font-bold text-black">N80,000</h1>
        </div>
        <button className="px-4 py-2 md:py-10 font-medium text-center text-black border-[1.5px] text-base border-black rounded-lg w-full hover:bg-[#CC5500] hover:text-white transition-all duration-300">
          Get Estimate
        </button>
      </div>
    </div>
  );
};

export default Residential;
