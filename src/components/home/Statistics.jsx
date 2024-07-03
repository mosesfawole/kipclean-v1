import useCountUp from "./useCountUp";
import useInView from "./useInView";

const Statistics = () => {
  const stats = [
    { rating: "15+", text: "Expert Team" },
    { rating: "4.7", text: "Google Rating out of 1500 Reviews" },
    { rating: "56+", text: "Cleaning Completed" },
    { rating: "24+", text: "Happy Clients" },
  ];
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center md:items-stretch w-full md:mt-20 mb:10 md:mb-20"
    >
      <h1 className="hidden md:block text-2xl font-medium text-[#121212] md:text-[52px] text-center">
        Our Statistics
      </h1>
      <p className="hidden md:block text-center p-4 mt-4 md:text-xl text-[#424242]">
        Don't take our words for it, view our numbers below
      </p>
      <div className=" bg-inherit  md:bg-secondary mt-8 ">
        {" "}
        <div className="grid  grid-cols-1 gap-10 py-8 px-[4rem] md:px-[6rem] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  ">
          {stats.map((stat, index) => (
            <NumberCard
              key={index}
              rating={stat.rating}
              text={stat.text}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const NumberCard = ({ rating, text, inView }) => {
  const numericValue = extractNumber(rating);
  const count = useCountUp(numericValue, 2000, inView); // 2000ms duration for counting up
  const suffix = rating.replace(/[0-9]/g, ""); // Extract non-numeric part

  return (
    <div className="flex flex-col  items-center px-2 py-16 text-center border-[1.5px] border-[#CC5500] rounded-[40px]   w-[282px] h-[256px] md:w-full  text-[#2F2F2F]">
      <h2 className="text-[52px]  font-bold">
        {count}
        {suffix}
      </h2>
      <p className="text-xl font-medium text-center max-w-[10rem] text-whiteText">
        {text}
      </p>
    </div>
  );
};

const extractNumber = (str) => {
  return parseInt(str.replace(/\D/g, ""), 10);
};

export default Statistics;
