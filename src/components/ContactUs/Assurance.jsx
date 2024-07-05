const Assurance = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-8 bg-secondary mx-auto px-[12 %] md:px-[20%] ">
      <h1 className="text-2xl font-medium text-center md:text-5xl ">
        Assurance of Responsibility for Any Damage During Service
      </h1>
      <p className="mt-8 text-let">
        At Kip_Clean, we're committed to exceptional service and respecting your
        property. Accidents may happen, but we promise:
      </p>
      <div>
        <ol className="flex flex-col gap-4  list-decimal ">
          <li className="font-medium text-orange">
            Immediate notification:
            <span className="pl-1 font-normal text-[#2F2F2F]">
              We'll promptly inform you of any damage
            </span>
          </li>
          <li className="font-medium text-orange">
            Assessment and repair:
            <span className="pl-1 font-normal text-[#2F2F2F]">
              We take full responsibility for fixing any damage
            </span>
          </li>
          <li className="font-medium text-orange">
            Transparent communication:
            <span className="pl-1 font-normal text-[#2F2F2F]">
              We'll keep you in the loop every step of the way
            </span>
          </li>
          <li className="font-medium text-orange">
            Customers Satisfaction Guarantee:
            <span className="pl-1 font-normal text-[#2F2F2F]">
              Your satisfaction is our priority
            </span>
          </li>
          <li className="font-medium text-orange">
            Immediate notification:
            <span className="pl-1 font-normal text-[#2F2F2F]">
              We'll promptly inform you of any damage
            </span>
          </li>
          <h3 className="text-start text-[#2F2F2F]">
            We hope that this assurance provides you with peace of mind as you
            entrust us with the care of your property. Should you have any
            questions or concerns, please do not hesitate to contact us at
            Kip-Clean@gmail.com. Thank you for choosing Kip_Clean. We look
            forward to serving you with excellence.
          </h3>
        </ol>
        {/*  */}
      </div>
    </div>
  );
};

export default Assurance;
