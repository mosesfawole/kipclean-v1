import { useState } from "react";
import Faqs from "../Faqs";

const Faq = () => {
  const questions = [
    {
      qstn: "How often should I schedule cleaning appointments?",
      icon: "icn.png",
      ans: "Depends on household size, activity level, and needs. Discuss with us for the optimal schedule.",
    },
    {
      qstn: "What cleaning services do you offer?",
      icon: "icn.png",
      ans: "Standard, deep, move-in/out cleaning, with additional services available.",
    },
    {
      qstn: "Do I need to provide cleaning equipment?",
      icon: "icn.png",
      ans: "No, we bring all necessary equipment and cleaning supplies.",
    },
    {
      qstn: "Are your cleaners insured and bonded?",
      icon: "icn.png",
      ans: "Yes, we carry liability and worker's compensation insurance.",
    },
    {
      qstn: "How do I schedule a cleaning appointment?",
      icon: "icn.png",
      ans: "Call us, book online, or email us with your preferred date and time.",
    },
    {
      qstn: "Do I need to be home during the cleaning?",
      icon: "icn.png",
      ans: "No, we offer key pick-up/drop-off or lockbox access. You can be present if you prefer.",
    },
  ];

  const [showAns, setShowAns] = useState(Array(questions.length).fill(false));

  const toggleAnswer = (index) => {
    setShowAns((prev) => {
      const newShowAns = [...prev];
      newShowAns[index] = !newShowAns[index];
      return newShowAns;
    });
  };

  return (
    <div className="flex flex-col items-start gap-16 px-10 md:px-20 py-8 mt-20 md:flex-row">
      <div className=" w-full  md:w-[60%]">
        <h1 className="text-2xl md:text-4xl font-bold text-[#CC5500]">
          Kip-Clean
        </h1>
        <p className="pt-10 text-base sm:text-base md:text-lg  font-sans font text-left">
          We pride ourselves on our professionalism and reliability. Our team of
          trained cleaning professionals is dedicated to delivering consistently
          high-quality results with every visit. You can trust us to show up on
          time, treat your home with the utmost respect, and complete the
          cleaning tasks efficiently and thoroughly. With our regular cleaning
          service, you can enjoy peace of mind knowing that your home is in good
          hands.
        </p>
      </div>
      {/*  */}
      <div className=" w-full md:w-[50%] md:border-l md:pl-20">
        <h1 className="text-2xl  md:text-start md:text-4xl font-medium text-orange">
          Frequently Asked Questions
        </h1>

        <Faqs />
      </div>
    </div>
  );
};

export default Faq;
