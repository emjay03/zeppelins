import React, { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import image from "../img/Logo.png";
import hireme from "../img/Hire Me.png";
import closedoor from "../img/closedoor.png";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
function Header() {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };
  return (
    <>
      <nav
        className={`${
          isNavSticky ? "sticky top-0 z-10" : ""
        } bg-white md:sticky md:top-0 md:z-10`}
      >
        <div className="flex justify-between items-center xl:px-0 px-4 py-5 lg:max-w-[1020px] mx-auto">
          <div className="flex justify-center items-center gap-3">
            <img src={image} alt="logo" />
            <span>
              <img src={hireme} alt="hireme" />
            </span>
          </div>
          {/* Desktop navigation */}
          <ul className="hidden lg:flex gap-4 font-Montserrat font-medium text-[#424242]">
            <li className="cursor-pointer">
              <Link to="/portfolio"><span className="hover:text-[#5A47AB]">PORTFOLIO</span></Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/blog"><span className="hover:text-[#5A47AB]">BLOG</span></Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/cv"><span className="hover:text-[#5A47AB]">CV</span></Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/store"><span className="hover:text-[#5A47AB]">STORE</span></Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/freelance"><span className="hover:text-[#5A47AB]">FREELANCE</span></Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about"><span className="hover:text-[#5A47AB]">ABOUT ME</span></Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/contact"><span className="hover:text-[#5A47AB]">CONTACT</span></Link>
            </li>
          </ul>
          {/* Mobile navigation */}
          <div className="lg:hidden">
            <BiMenu
              className="cursor-pointer"
              size={40}
              onClick={toggleMobileNav}
            />

            {isMobileNavOpen && (
              <div className="  mobile-nav bg-white  h-full    fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ">
                <div className="flex justify-center items-center gap-3 absolute top-5 left-4  ">
                  <img src={image} alt="logo" />
                  <span>
                    <img src={closedoor} alt="closedoor" />
                  </span>
                </div>
                <BiMenuAltRight
                  size={40}
                  onClick={toggleMobileNav}
                  className=" absolute top-5 right-4    cursor-pointer"
                />
                <div className="py-8"></div>
                <div className=" px-10   w-full ">
                  <ul className="  w-full h-full flex flex-col justify-center   gap-4 font-Montserrat text-lg">
                    <li>
                      <Link to="/portfolio" onClick={closeMobileNav}>
                        <span className="text-[#424242] font-medium cursor-pointer hover:text-[#5A47AB]">
                          {" "}
                          PORTFOLIO
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" onClick={closeMobileNav}>
                        <span className="text-[#424242] font-medium cursor-pointer hover:text-[#5A47AB]">
                          {" "}
                          BLOG
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cv" onClick={closeMobileNav}>
                        <span className="text-[#424242] font-medium cursor-pointer hover:text-[#5A47AB]">
                          {" "}
                          CV
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/store" onClick={closeMobileNav}>
                        <span className="text-[#424242] font-medium cursor-pointer hover:text-[#5A47AB]">
                          {" "}
                          STORE
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/freelance" onClick={closeMobileNav}>
                        <span className="text-[#424242] font-medium cursor-pointer hover:text-[#5A47AB]">
                          {" "}
                          FREELANCE
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        onClick={closeMobileNav}
                        className={`text-[#424242] font-bold cursor-pointer`}
                      >
                        <span className="text-[#424242] font-medium cursor-pointer hover:text-[#5A47AB]">
                          {" "}
                          ABOUT ME
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={closeMobileNav}>
                        <span className="text-[#424242] font-medium cursor-pointer hover:text-[#5A47AB]">
                          {" "}
                          CONTACT
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
