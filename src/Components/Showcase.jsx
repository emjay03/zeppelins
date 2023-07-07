import React, { useState } from "react";
import Project1 from "../img/Project1.png";
import Project2 from "../img/Project2.png";
function Showcase() {
  const [activeFilter, setActiveFileter] = useState("All");
  const handleFilterClick = (filter) => {
    setActiveFileter(filter);
  };
  return (
    <div className="w-full h-full">
      <div className="py-10">
        <ul className="flex gap-7 font-Montserrat text-lg font-bold ">
          <li>
            <a
              className="text-[#424242] cursor-pointer"
              onClick={() => handleFilterClick("All")}
            >
              All
            </a>
          </li>
          <li>
            <a
              className="text-[#424242] cursor-pointer"
              onClick={() => handleFilterClick("All Design")}
            >
              All Design
            </a>
          </li>
          <li>
            <a
              className="text-[#424242] cursor-pointer"
              onClick={() => handleFilterClick("UX Design")}
            >
              UX Design
            </a>
          </li>
          <li>
            <a
              className="text-[#424242] cursor-pointer"
              onClick={() => handleFilterClick("Product Design")}
            >
              Product Design
            </a>
          </li>
          <li>
            <a
              className="text-[#424242] cursor-pointer"
              onClick={() => handleFilterClick("Articles")}
            >
              Articles
            </a>
          </li>
          <li>
            <a
              className="text-[#424242] cursor-pointer"
              onClick={() => handleFilterClick("Tutorial")}
            >
              Tutorial
            </a>
          </li>
          <li>
            <a
              className="text-[#424242] cursor-pointer"
              onClick={() => handleFilterClick("News")}
            >
              News
            </a>
          </li>
        </ul>
        {/* first layer */}
      </div>
      <div
        className={`flex gap-5 justify-center font-Montserrat py-5 ${
          activeFilter === "All" || activeFilter === "All Design"
            ? "flex"
            : "hidden"
        }`}
      >
        {/* showcase left side project */}
        <div>
          <img src={Project1} alt="Project1" />
          <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
        {/* showcase right side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
      </div>
      {/* second layer */}
      <div
        className={`flex gap-5 justify-center font-Montserrat py-5 ${
          activeFilter === "All" || activeFilter === "UX Design"
            ? "flex"
            : "hidden"
        }`}
      >
        {/* showcase left side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
        {/* showcase right side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
      </div>
      <div
        className={`flex gap-5 justify-center font-Montserrat py-5 ${
          activeFilter === "All" || activeFilter === "Product Design"
            ? "flex"
            : "hidden"
        }`}
      >
        {/* showcase left side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
        {/* showcase right side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
      </div>
      <div
        className={`flex gap-5 justify-center font-Montserrat py-5 ${
          activeFilter === "All" || activeFilter === "Articles"
            ? "flex"
            : "hidden"
        }`}
      >
        {/* showcase left side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
        {/* showcase right side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
      </div>
      <div
        className={`flex gap-5 justify-center font-Montserrat py-5 ${
          activeFilter === "All" || activeFilter === "Tutorial"
            ? "flex"
            : "hidden"
        }`}
      >
        {/* showcase left side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
        {/* showcase right side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
      </div>
      <div
        className={`flex gap-5 justify-center font-Montserrat py-5 ${
          activeFilter === "All" || activeFilter === "News" ? "flex" : "hidden"
        }`}
      >
        {/* showcase left side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
        {/* showcase right side project */}
        <div>
          <img src={Project1} alt="Project1" />
        <div className="py-1"></div>
          <p className="font-semibold text-[#424242] text-base ">Nov 23 2020</p>
          <div className="py-1"></div>
          <h1 className="font-semibold text-[#D05270] text-lg">
            This way is wrong about UI Design
          </h1>
          <div className="py-1"></div>
          <p className="text-[#424242] text-base font-normal">
            A quick guide to assisting users in the challenging steps from
            learning about your podcast on the web. A quick guide to assisting
            users in the challenging steps from learning about your podcast on
            the web.
          </p>
          <div className="py-1"></div>
          <button className="text-[#D05270] underline">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
