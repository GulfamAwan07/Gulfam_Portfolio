import React, { useState, useEffect, useRef } from "react";
const Hero = () => {
  const professions = [
    "Software Developer",
    "Front-End Engineer",
    "Web3 Frontend Dev",
    "Programmer",
    "Web Developer",
  ];

  const [displayed, setDisplayed] = useState("");
  const [profIdx, setProfIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const charIdx = useRef(0);

  useEffect(() => {
    const current = professions[profIdx];
    const TYPE_SPEED = 80;
    const DELETE_SPEED = 40;
    const PAUSE = 1500;

    let timeout;

    if (!deleting) {
      if (charIdx.current < current.length) {
        timeout = setTimeout(() => {
          charIdx.current += 1;
          setDisplayed(current.slice(0, charIdx.current));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setDeleting(true), PAUSE);
      }
    } else {
      if (charIdx.current > 0) {
        timeout = setTimeout(() => {
          charIdx.current -= 1;
          setDisplayed(current.slice(0, charIdx.current));
        }, DELETE_SPEED);
      } else {
        setDeleting(false);
        setProfIdx((prev) => (prev + 1) % professions.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, profIdx]);
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center  justify-between px-6 overflow-hidden">
        <div className="max-w-xl text-center  lg:text-left md:mx-24 mt-10">
          <h1 className="font-bold   md:text-2xl mt-1 text-gray-800 text-xl leading-snug">
            Hi, I'm Gulfam Awan
          </h1>

          <h3 className="md:text-4xl sm:text-3xl font-bold mt-2">
            <span className="split text-3xl md:text-4xl transition-opacity opacity-100 text-red-500 duration-500">
              {displayed}
            </span>
          </h3>
        </div>

        <div className="relative w-[350px] h-[350px] flex mt-2 mx-20 items-center justify-center">
          <img
            className="w-36 h-36 rounded-full object-cover border-4 border-gray-400 z-10"
            src="./image/myPic.png"
            alt="Profile"
          />

          <svg
            viewBox="0 0 300 300"
            className="absolute w-[300px] h-[300px] animate-spin"
            style={{
              animation: "spin 10s linear infinite",
            }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 150,150 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
              />
            </defs>
            <text
              fill="black"
              fontSize="16"
              fontWeight="600"
              letterSpacing="4px"
              fontFamily="Arial, sans-serif"
            >
              <textPath href="#circlePath" startOffset="0%">
                ☆ SOFTWARE DEVELOPER ☆ PROBLEM SOLVER
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <h1 className="text-xl mx-6 font-semibold md:text-4xl md:font-bold animate-bounce">
          “I <span className="text-red-500">Don’t </span>{" "}
          <span className="text-blue-500">just write</span>{" "}
          <span className="text-green-500">Code</span>{" "}
          <span className="text-pink-500">━</span> I{" "}
          <span className="text-purple-500">Solve</span>{" "}
          <span className="text-orange-500">Problems.</span>”
        </h1>
      </div>

      <div className="h-0.5 mt-10 bg-gradient-to-r from-red-500 to-blue-400"></div>
    </div>
  );
};

export default Hero;
