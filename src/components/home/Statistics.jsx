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
      <div className=" bg-inherit p-10 md:bg-secondary mt-8 ">
        {" "}
        <div className="flex  flex-wrap gap-10 mx-auto ">
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
    <div className="flex flex-col   md gap-10  items-center mx-auto  py-16 text-center border-[1.5px] border-[#CC5500] rounded-[40px] w-2/3 md:w-1/3 lg:w-1/5   text-[#2F2F2F]">
      <h2 className="text-[52px]  font-bold">
        {count}
        {suffix}
      </h2>
      <p className="text-xl font-medium text-center  text-whiteText">{text}</p>
    </div>
  );
};

const extractNumber = (str) => {
  return parseInt(str.replace(/\D/g, ""), 10);
};

export default Statistics;
