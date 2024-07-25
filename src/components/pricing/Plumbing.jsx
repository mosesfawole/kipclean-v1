import { useState } from "react";

const Plumbing = () => {
  const serviceType = [
    { type: "Emergency", price: 20000 },
    { type: "Repairs", price: 15000 },
    { type: "Heater service", price: 25000 },
    { type: "Maintenance", price: 10000 },
  ];

  const fixtures = [
    { type: "Water heater", price: 5000 },
    { type: "Sink", price: 3000 },
    { type: "Pipe work", price: 8000 },
    { type: "Toilet", price: 4000 },
    { type: "Shower", price: 7000 },
  ];

  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedFixture, setSelectedFixture] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectChange = (e, setSelected) => {
    const selectedOption = e.target.value;
    setSelected(selectedOption);
  };

  const getTotal = () => {
    const service = serviceType.find(
      (item) => item.type === selectedServiceType
    );
    const fixture = fixtures.find((item) => item.type === selectedFixture);

    const total = (service?.price || 0) + (fixture?.price || 0);
    setTotalPrice(total.toLocaleString());
  };

  return (
    <div className="mt-4  transition-all duration-500 ">
      <h3 className="mb-4 text-start text-base font-medium md:text-xl md:text-start ">
        Plumbing Services
      </h3>
      <div className="p-8 rounded-lg bg-secondary text-[#848484] flex flex-col gap-4">
        <h1 className="font-normal text-sm">Type of service</h1>
        <div className="">
          <select
            name="serviceType"
            className="appearance-none cursor-pointer
              border border-[#949291] bg-transparent rounded-lg  w-full px-4 py-2 text-sm font-medium
              outline-orange pr-8"
            style={{
              backgroundImage: "url(/keyboard_arrow_up.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.5rem center",
              backgroundSize: "12px",
            }}
            onChange={(e) => handleSelectChange(e, setSelectedServiceType)}
          >
            <option value="" disabled selected>
              Select type of service
            </option>
            {serviceType.map((item, index) => (
              <option value={item.type} key={index} className="bg-transparent">
                {item.type}
              </option>
            ))}
          </select>
        </div>
        {/*  */}
        <div>
          <h1 className="font-normal text-sm">Fixture Information</h1>
          <div className="">
            <select
              name="fixture"
              className="appearance-none cursor-pointer
              border border-[#949291] bg-transparent rounded-lg mt-4 w-full px-4 py-2 text-sm font-medium
              outline-orange pr-8"
              style={{
                backgroundImage: "url(/keyboard_arrow_up.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.5rem center",
                backgroundSize: "12px",
              }}
              onChange={(e) => handleSelectChange(e, setSelectedFixture)}
            >
              <option value="" disabled selected>
                Select fixture information
              </option>
              {fixtures.map((item, index) => (
                <option
                  value={item.type}
                  key={index}
                  className="bg-transparent"
                >
                  {item.type}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div>
          <h1 className="md:font-bold text-sm font-normal">
            Issue Description
          </h1>
          <div className="mt-4">
            <textarea
              type="text"
              className="border overflow-hidden bg-transparent border-[#949291] rounded-lg font-medium text-sm px-2 py-2 outline-none h-9 w-full resize-none"
            ></textarea>
          </div>
        </div>
        {/*  */}
        <hr />
        <div className="flex items-center justify-between md:mt-4 md:mb-6 ">
          <p className="font-light">Total</p>
          <h1 className="text-lg font-bold text-black">
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

export default Plumbing;
