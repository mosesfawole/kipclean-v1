const Plumbing = () => {
  const serviceType = [
    { type: "Emergency" },
    { type: "Repairs" },
    { type: "Heater service" },
    { type: "Maintenance" },
  ];

  const fixtures = [
    { type: "Water heater" },
    { type: "Sink" },
    { type: "Pipe work" },
    { type: "Toilet" },
    { type: "Shower" },
  ];

  return (
    <div className="mt-4  transition-all duration-500 ">
      <h3 className="mb-4 text-start text-base font-medium md:text-xl md:text-start ">
        Plumbing Cleaning Services
      </h3>
      <div className="p-8 rounded-lg bg-secondary text-[#848484] flex flex-col gap-4">
        <h1 className="font-normal text-sm   ">Type of service</h1>
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
          <h1 className="font-normal text-sm  ">Fixture Information </h1>
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
                Select fixture information
              </option>
              {fixtures.map((item, index) => (
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
        {/*  */}
        <div>
          <h1 className="font-bold text-sm font-Inter ">Issue Description</h1>
          <div className=" mt-4 ">
            <textarea
              type="text"
              className="border bg-transparent border-[#949291] rounded-lg font-medium text-sm  px-4 py-4 outline-none w-full  resize-none"
            ></textarea>
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

export default Plumbing;
