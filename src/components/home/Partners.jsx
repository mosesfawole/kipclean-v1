const Partners = () => {
  const images = [
    "/unilever.png",
    "/cussons.png",
    "/clorox.png",
    "/waw.png",
    "/sunlight.png",
    "/givanas.png",
    "/nittol.png",
    "/mamuda.png",
  ];

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
            "logos-slide w-fit  md:mx-auto  md:grid md:w-fit md:animate-none md:grid-cols-4  items-center md:gap-12"
          }
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt="" className="w-fit" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
