import { useState } from "react";

const Residential = () => {
  const propertyType = [
    { type: "Studio/Self Con", price: 10000 },
    { type: "1 Bedroom flat", price: 15000 },
    { type: "2 Bedroom flat", price: 20000 },
    { type: "3 Bedroom flat", price: 25000 },
    { type: "1 Bedroom duplex", price: 30000 },
    { type: "2 Bedroom duplex", price: 35000 },
    { type: "3 Bedroom duplex", price: 40000 },
    { type: "4 Bedroom duplex", price: 45000 },
    { type: "5 Bedroom duplex", price: 50000 },
    { type: "6 Bedroom duplex", price: 55000 },
  ];

  const cleaningType = [
    { type: "Move-in/Move-out cleaning", price: 5000 },
    { type: "Deep cleaning", price: 7000 },
    { type: "Regular cleaning", price: 3000 },
    { type: "Cleaning/Fumigation", price: 8000 },
    { type: "Window cleaning", price: 4000 },
    { type: "Carpet upholstery cleaning", price: 6000 },
  ];

  const frequency = [
    { type: "2x monthly (1 Deep + 1 Regular + Pack)", price: 10000 },
    { type: "4x monthly (1 Deep + 3 Regular + Pack)", price: 20000 },
    { type: "8x monthly (1 Deep + 7 Regular + Pack)", price: 30000 },
    { type: "12x monthly (1 Deep + 11 Regular + Pack)", price: 40000 },
  ];

  const [selectedCleaningType, setSelectedCleaningType] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectChange = (e, setSelected) => {
    const selectedOption = e.target.value;
    setSelected(selectedOption);
  };

  const getTotal = () => {
    const cleaning = cleaningType.find(
      (item) => item.type === selectedCleaningType
    );
    const property = propertyType.find(
      (item) => item.type === selectedPropertyType
    );
    const freq = frequency.find((item) => item.type === selectedFrequency);

    const total =
      (cleaning?.price || 0) + (property?.price || 0) + (freq?.price || 0);
    setTotalPrice(total.toLocaleString());
  };

  return (
    <div className="my-4 transition-all duration-500 ">
      <h3 className="mb-4 text-start text-base font-medium md:text-xl md:text-start  ">
        Residential Cleaning Services
      </h3>
      <div className="p-8 rounded-lg bg-secondary text-[#848484] flex flex-col gap-4">
        <h1 className="font-normal text-sm">Type of cleaning</h1>
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
            onChange={(e) => handleSelectChange(e, setSelectedCleaningType)}
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
          <h1 className="font-normal text-sm">Size of Property</h1>
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
              onChange={(e) => handleSelectChange(e, setSelectedPropertyType)}
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
          <h1 className="font-normal text-sm">Frequency of cleaning</h1>
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
              onChange={(e) => handleSelectChange(e, setSelectedFrequency)}
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
          <p className="font-light">Total</p>
          <h1 className="text-lg font-bold text-black">
            {" "}
            {totalPrice == 0 ? <>N10,000</> : <>N{totalPrice}</>}
          </h1>
        </div>
        <button
          className="px-4 py-2 md:py-10 font-medium text-center text-black border-[1.5px] text-sm md:text-base border-black rounded-lg w-full hover:bg-[#CC5500] hover:text-white transition-all duration-300"
          onClick={getTotal}
        >
          Get Estimate
        </button>
      </div>
    </div>
  );
};

export default Residential;
