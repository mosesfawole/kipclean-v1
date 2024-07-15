const Partners = () => {
  const images = [
    "/Rectangle 155.svg",
    "/Rectangle 156.svg",
    "/Rectangle 159.svg",
    "/Rectangle 157.svg",
    "/Rectangle 160.svg",
    "/Rectangle 161.svg",
    "/Rectangle 163.svg",
    "/Rectangle 162.svg",
  ];

  const duplicatedImages = [...images, ...images];
  return (
    <div className="overflow-x-hidden flex flex-col gap-10 md:gap-20 pb-16 mt-10 md:mt-40  bg-[#595F66] sm:bg-[#595F66] md:bg-[#fff4ec] ">
      <div className="mt-4 ">
        <h1 className="text-white  md:text-black leading-[48px] text-[44px]  font-bold text-center md:text-6xl ">
          Our Partners
        </h1>
      </div>
      <div className="">
        <div
          className={
            "logos-slide  w-fit    md:mx-auto  md:grid md:w-fit md:animate-none md:grid-cols-4  items-center md:gap-12"
          }
        >
          {duplicatedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="w-fit bg-white rounded-2xl p-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
