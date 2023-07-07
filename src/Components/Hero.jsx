import React from "react";
import image from "../img/Logo.png";
import hireme from "../img/Hire Me.png";
import grpimg from "../img/grp-img.png";
import twiiter from "../img/twitter.png";
import linkedin from "../img/linked_in.png";
import medium from "../img/medium.png";
function Hero() {
  return (
    <div className="w-full h-full m-auto">
      <nav className="w-full flex justify-between items-center py-5">
        <div className="flex justify-center items-center gap-3">
          <img src={image} alt="logo" />
          <span>
            <img src={hireme} alt="hireme" />
          </span>
        </div>
        <ul className="flex gap-4 font-Montserrat font-medium text-[#424242]">
          <li className="cursor-pointer">
            <a>PORTFOLIO</a>
          </li>
          <li className="cursor-pointer">
            <a>BLOG</a>
          </li>
          <li className="cursor-pointer">
            <a>CV</a>
          </li>
          <li className="cursor-pointer">
            <a>STORE</a>
          </li>
          <li className="cursor-pointer">
            <a>FREELANCE</a>
          </li>
          <li className="cursor-pointer">
            <a>ABOUT ME</a>
          </li>
          <li className="cursor-pointer">
            <a>CONTACT</a>
          </li>
        </ul>
      </nav>
      <main className="w-full h-full py-20 items-center  flex justify-center">
        <div className="flex flex-row items-center gap-6">
          <div className="w-full font-Montserrat">
            <h1 className=" text-[#D05270] font-bold text-[52px]">
              Blog Posts
            </h1>
            <h2 className="text-[#424242] text-[52px]">
              I think so, this is it.{" "}
            </h2>
            <p className="text-[18px]">
              Design begins after I begin to think about how to present an
              experience most successfully, whether a button I put in can solve
              a problem. The only point in design is not ui design, if the user
              does not have a good experience at the end of the product, the
              design will be considered unsuccessful in my opinion.
            </p>
            <div className="flex justify-center items-center gap-1 w-full py-6">
              <button className="w-full bg-[#1DA1F2] flex justify-center items-center py-3 text-white gap-2 text-[12px]">
                <img src={twiiter} alt="twitter" />
                TWITTER
              </button>
              <button className="w-full bg-[#1275B1] flex justify-center items-center py-3 text-white gap-2 text-[12px]">
                <img src={linkedin} alt="linkedin" />
                LINKEDIN
              </button>
              <button className="w-full bg-[#000000] flex justify-center items-center py-3 text-white gap-2 text-[12px]">
                <img src={medium} alt="medium" />
                MEDIUM
              </button>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <img src={grpimg} alt="grp-images" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
