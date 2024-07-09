import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const address = "No 2, Adewunmi layout, Oke Ayo, Ibadan, Oyo State";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const phoneNumber = "+2347013404146";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  return (
    <div className=" bg-[#2f2f2f] text-white p-8 md:p-20 ">
      <div className="md:flex gap-4  items-baseline">
        <div className=" flex flex-1">
          <h1 className=" mb-10  md:mb-0 text-3xl  md:text-5xl font-bold w-full mr-8 md:mr-10  ">
            Kip-Clean
          </h1>
        </div>
        <div className="grid  grid-cols-2 sm:grid md:flex lg;grid md:mr-20  gap-16 justify-between ">
          <div className="order-2 md:order-1 w-full">
            <h1 className="text-xl font-bold md:text-3xl ">Support</h1>
            <ul className="flex flex-col font-sans  gap-4 pt-4 ">
              <li>
                <Link className="custom-link" to={"/about"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="custom-link" to={"/services"}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="custom-link" to={""}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="custom-link" to={"/contact"}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="order-1 md:order-2 w-full ">
            <h1 className="text-xl font-bold md:text-3xl ">Services</h1>
            <ul className="flex flex-col font-sans  gap-4 pt-4 md:text-base">
              <Link className="custom-link" to="/Services">
                <li>Regular Cleaning</li>
              </Link>
              <Link className="custom-link" to="/Services">
                <li>Deep Cleaning</li>
              </Link>
              <Link className="custom-link" to="/Services">
                <li>Office Cleaning</li>
              </Link>
              <Link className="custom-link" to="/Services">
                <li>Plumbing Installation</li>
              </Link>
              <Link className="custom-link" to="/Services">
                <li>Pipe Repair and Replacement</li>
              </Link>
              <Link className="custom-link" to="/Services">
                <li>Water Heater Services</li>
              </Link>
            </ul>
          </div>
          {/*  */}
          <div className="order-3 w-full ">
            <h1 className="text-xl font-bold md:text-3xl">Contact Us</h1>
            <ul className="flex flex-col font-sans gap-4 md:gap-9 pt-4 ">
              <li>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  {address}
                </a>
              </li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <li>{phoneNumber}</li>
              </a>
              <a href="mailto:Kip-Clean@gmail.com" className="">
                <li>Kip-Clean@gmail.com</li>
              </a>
              <div className="flex gap-4 ">
                <FaXTwitter className="custom-link cursor-pointer" />
                <FaYoutube className="custom-link cursor-pointer" />
                <FaInstagram className="custom-link cursor-pointer" />
                <FaFacebookF className="custom-link cursor-pointer" />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="block md:text-center ">
        <hr className="mt-7 mb-4 " />
        <p>{currentYear} Copyright. All rights reserved to kip-Clean</p>
      </div>
    </div>
  );
};

export default Footer;
