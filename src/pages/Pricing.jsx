import Office from "../components/pricing/Office";
import Plumbing from "../components/pricing/Plumbing";
import PricingHeader from "../components/pricing/PricingHeader";
import Residential from "../components/pricing/Residential";

const Pricing = () => {
  return (
    <div className="p-8  ">
      <PricingHeader />
      <div
        className="grid grid-cols-1  items-center justify-center gap-0 mt-12 
			md:gap-8 md:grid-cols-3 md:items-start md:justify-evenly "
      >
        <div className="">
          <Residential />
        </div>
        <div className="">
          <Office />
        </div>
        <div className="">
          <Plumbing />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
