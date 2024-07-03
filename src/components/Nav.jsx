import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Nav = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const navLists = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", arrow: <IoIosArrowDown /> },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex md:items-center  justify-between px-8  py-4 max-w-[1440px] mx-auto">
      <div className="block md:flex mx-auto mb-10 md:mb-0 md:mx-0">
        <Link to="/">
          <img src="/logo.png" alt="" className="md:w-12 md:h-12 " />
        </Link>
      </div>
      <div className="items-center hidden gap-5 md:flex">
        <ul className="flex items-center gap-12">
          {navLists.map((navList, index) => (
            <li
              key={index}
              className="relative cursor-pointer"
              onMouseEnter={() => setActive(navList.name)}
            >
              <Link to={navList.path}>
                <div className="relative flex items-center gap-8 ">
                  <span
                    className={
                      active === navList.name
                        ? "text-[#CC5500]"
                        : "text-[#7D7D7D] transition duration-500"
                    }
                  >
                    {navList.name}
                  </span>
                  <div
                    className=" absolute right-[-40%]"
                    onClick={() => setDropDown((prevMode) => !prevMode)}
                  >
                    {navList.arrow ? navList.arrow : null}
                  </div>
                </div>

                {active === navList.name && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#CC5500]"></span>
                )}
              </Link>
            </li>
          ))}
          {/*  */}
          {dropDown && (
            <div className=" absolute right-[42%] z-50 top-16 p-4 bg-black text-gray-500">
              <Link to="/pricing">
                <h1>Pricing</h1>
              </Link>
              <Link to="/services">
                <h1>Services</h1>
              </Link>
            </div>
          )}
        </ul>
      </div>
      <button className="bg-[#CC5500] hidden md:flex text-white rounded-3xl text-sm font-normal px-4 py-2">
        Get a Quote
      </button>
      <div className="relative z-50 md:hidden mt-4">
        {menuOpen ? (
          <IoClose
            color="white"
            size={30}
            className="absolute text-white bg-white cursor-pointer "
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <img
            src="/menu.svg"
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
      {/* Hamburger menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 z-50 w-full h-[400px] shadow-lg bg-ash">
          <div className="absolute border border-white rounded-full cursor-pointer top-8 right-8">
            <IoClose
              color="white"
              size={25}
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col gap-8 px-4 py-16 text-center">
            {navLists.map((navList, index) => (
              <li
                key={index}
                className="text-white cursor-pointer"
                onClick={() => {
                  setActive(navList.name);
                  setMenuOpen(false);
                }}
              >
                <Link to={navList.path}>{navList.name}</Link>
              </li>
            ))}
            <li>
              <button className="bg-[#CC5500] text-white rounded-3xl text-sm font-normal px-4 py-2">
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
