import React from "react";

import grpimg from "../img/grp-img.png";

import Header from "./Header";
import { BsTwitter, BsMedium } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
function Hero() {
  return (
    <>
      <Header />
      <div className="max-w-[1020px]  h-full m-auto">
        <main className="w-full h-full xl:px-0 px-4  py-[120px] items-center  flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full font-Montserrat">
              <h1 className=" text-[#D05270] font-bold text-[52px]">
                Blog Posts
              </h1>
              <h2 className="text-[#424242] text-[52px]">
                I think so, this is it.{" "}
              </h2>
              <p className="text-[18px]">
                Design begins after I begin to think about how to present an
                experience most successfully, whether a button I put in can
                solve a problem. The only point in design is not ui design, if
                the user does not have a good experience at the end of the
                product, the design will be considered unsuccessful in my
                opinion.
              </p>
              <div className="flex justify-center items-center gap-2 w-full py-6">
                <button className="w-full bg-[#1DA1F2] flex justify-center items-center py-3 text-white gap-2 text-[12px]">
                  <BsTwitter size={20} />
                  TWITTER
                </button>
                <button className="w-full bg-[#1275B1] flex justify-center items-center py-3 text-white gap-2 text-[12px]">
                  <AiFillLinkedin size={20} />
                  LINKEDIN
                </button>
                <button className="w-full bg-[#000000] flex justify-center items-center py-3 text-white gap-2 text-[12px]">
                  <BsMedium size={20} />
                  MEDIUM
                </button>
              </div>
            </div>
            <div className="hidden md:flex w-full  justify-end">
              <img src={grpimg} alt="grp-images" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Hero;
