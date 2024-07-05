// import Cleaning from "../components/Cleaning";
import { Link } from "react-router-dom";
import ChooseUs from "../components/ChooseUs";
import CleaningServices from "../components/CleaningServices";
import Header from "../components/Header";
import Faq from "../components/home/Faq";
import Partners from "../components/home/Partners";
import Statistics from "../components/home/Statistics";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <div className=" mx-auto">
      <Header />
      <ChooseUs />
      <CleaningServices />
      <div className="md:hidden ">
        <Partners />
      </div>
      <div className="md:hidden">
        <Testimonial />
      </div>
      <div className="w-full text-center mt-20 bg-[#FFF4EC] md:bg-[#2F2F2F] md:text-white py-14">
        <h1 className=" text-xl md:text-[52px] font-bold">
          Do you need any of our services?
        </h1>
        <p className="mt-4 text-sm font-sans text-center md:text-xl px-12 ">
          Kip-clean Cleaning and plumbing is your one-stop for all your
          household needs. From fixing a leaky faucet to cleaning your carpets,
          we've got you covered.
        </p>
        <p className="text-lg font-medium"></p>
        <Link to={"/service"}>
          <button className="mt-8 border-[1.5px] border-[#CC5500]  rounded-full p-4 px-8 font-medium text-sm md:text-lg hover:bg-[#CC5500] hover:text-white">
            Book a service
          </button>
        </Link>
      </div>

      <div className="hidden md:flex flex-col">
        <Testimonial />
        <Partners />
      </div>
      <Faq />
      <Statistics />
    </div>
  );
};

export default Home;
