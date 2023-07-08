import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Project1 from "../img/Project1.png";
import Project2 from "../img/Project2.png";
import Detail from "./Detail";

function Showcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <Router>
      <div className="max-w-[1020px] m-auto xl:px-0 px-4">
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full h-full  ">
                <div className="flex py-10  w-full overflow-x-auto   scrollbar-hidden ">
                  <ul className="flex gap-10 font-Montserrat text-sm md:text-lg font-semibold">
                    {/* Add the links */}
                    <li>
                      <Link to="/" onClick={() => handleFilterClick("All")}>
                        <span
                          className={` ${
                            activeFilter === "All"
                              ? "text-[#D05270] "
                              : "hover:text-[#D05270]  focus:text-[#D05270] "
                          } `}
                        >
                          All
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => handleFilterClick("All Design")}
                      >
                        <span
                          className={` ${
                            activeFilter === "All Design"
                              ? "text-[#D05270]  "
                              : "text-[#424242]  hover:text-[#D05270]  focus:text-[#D05270] "
                          } `}
                        >
                          All Design
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => handleFilterClick("UX Design")}
                      >
                        <span
                          className={` ${
                            activeFilter === "UX Design"
                              ? "text-[#D05270]  "
                              : "text-[#424242]  hover:text-[#D05270]  focus:text-[#D05270] "
                          } `}
                        >
                          {" "}
                          UX Design
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => handleFilterClick("Product Design")}
                      >
                        <span
                          className={` ${
                            activeFilter === "Product Design"
                              ? "text-[#D05270]  "
                              : "text-[#424242]  hover:text-[#D05270]  focus:text-[#D05270] "
                          } `}
                        >
                          Product Design
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => handleFilterClick("Articles")}
                      >
                        <span
                          className={` ${
                            activeFilter === "Articles"
                              ? "text-[#D05270]  "
                              : "text-[#424242]  hover:text-[#D05270]  focus:text-[#D05270] "
                          } `}
                        >
                          Articles
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => handleFilterClick("Tutorial")}
                      >
                        <span
                          className={` ${
                            activeFilter === "Tutorial"
                              ? "text-[#D05270]  "
                              : "text-[#424242]  hover:text-[#D05270]  focus:text-[#D05270] "
                          } `}
                        >
                          Tutorial
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Wrap the Routes and add conditional rendering */}

                <div
                  className={`flex   flex-col md:flex-row gap-5 justify-center font-Montserrat py-5 ${
                    activeFilter === "All" || activeFilter === "All Design"
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  <>
                    {/* showcase left side project */}

                    <div>
                      <img className="w-full" src={Project1} alt="Project1" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>

                    {/* showcase right side project */}

                    <div>
                      <img className="w-full" src={Project2} alt="Project2" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>
                  </>
                </div>
                <div
                  className={`flex flex-col md:flex-row gap-5 justify-center font-Montserrat py-5 ${
                    activeFilter === "All" || activeFilter === "UX Design"
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  <>
                    {/* showcase left side project */}

                    <div>
                      <img className="w-full" src={Project1} alt="Project1" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>

                    {/* showcase right side project */}

                    <div>
                      <img className="w-full" src={Project2} alt="Project2" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>
                  </>
                </div>
                <div
                  className={`flex flex-col md:flex-row gap-5 justify-center font-Montserrat py-5 ${
                    activeFilter === "All" || activeFilter === "Product Design"
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  <>
                    {/* showcase left side project */}

                    <div>
                      <img className="w-full" src={Project1} alt="Project1" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>

                    {/* showcase right side project */}

                    <div>
                      <img className="w-full" src={Project2} alt="Project2" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>
                  </>
                </div>
                <div
                  className={`flex flex-col md:flex-row gap-5 justify-center font-Montserrat py-5 ${
                    activeFilter === "All" || activeFilter === "Articles"
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  <>
                    {/* showcase left side project */}

                    <div>
                      <img className="w-full" src={Project1} alt="Project1" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>

                    {/* showcase right side project */}

                    <div>
                      <img className="w-full" src={Project2} alt="Project2" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>
                  </>
                </div>
                <div
                  className={`flex flex-col md:flex-row gap-5 justify-center font-Montserrat py-5 ${
                    activeFilter === "All" || activeFilter === "Tutorial"
                      ? "flex"
                      : "hidden"
                  }`}
                >
                  <>
                    {/* showcase left side project */}

                    <div>
                      <img className="w-full" src={Project1} alt="Project1" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>

                    {/* showcase right side project */}

                    <div>
                      <img className="w-full" src={Project2} alt="Project2" />
                      <div className="py-1"></div>
                      <p className="font-semibold text-[#424242] text-base">
                        Nov 23 2020
                      </p>
                      <div className="py-1"></div>
                      <h1 className="font-semibold text-[#D05270] text-lg">
                        This way is wrong about UI Design
                      </h1>
                      <div className="py-1"></div>
                      <p className="text-[#424242] text-base font-normal">
                        A quick guide to assisting users in the challenging
                        steps from learning about your podcast on the web. A
                        quick guide to assisting users in the challenging steps
                        from learning about your podcast on the web.
                      </p>
                      <div className="py-1"></div>
                      {/* Change the link to the detail page */}
                      <Link to="/detail" className="text-[#D05270] underline">
                        READ MORE
                      </Link>
                    </div>
                  </>
                </div>
              </div>
            }
          />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Showcase;
