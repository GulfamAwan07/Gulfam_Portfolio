import React, { useEffect, useRef } from "react";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const professions = [
      "Software Developer",
      "Front-End Developer",
      "Programmer",
      "Web Developer",
    ];
    let index = 0;

    const changeText = () => {
      if (textRef.current) {
        textRef.current.classList.remove("opacity-100");
        textRef.current.classList.add("opacity-0");

        setTimeout(() => {
          index = (index + 1) % professions.length;
          textRef.current.textContent = professions[index];
          textRef.current.classList.remove("opacity-0");
          textRef.current.classList.add("opacity-100");
        }, 500);
      }
    };

    const interval = setInterval(changeText, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center  justify-between px-6">
        <div className="max-w-xl text-center  lg:text-left md:mx-24 mt-10">
          <h1 className="font-bold   md:text-2xl mt-1 text-gray-800 text-lg leading-snug">
            Hi, I'm Gulfam Awan
          </h1>

          <h3 className="md:text-4xl sm:text-3xl font-bold mt-2">
            <span
              ref={textRef}
              className="text-3xl md:text-4xl transition-opacity opacity-100 text-red-500 duration-500"
            >
              Software Developer
            </span>
          </h3>
        </div>

        <div className="relative w-[300px] h-[300px] flex mt-14 mx-20 items-center justify-center">
          <img
            className="w-36 h-36 rounded-full object-cover border-4 border-gray-400 z-10"
            src="./pic.jpg"
            alt="Profile"
          />

          {/* Circular Text */}
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
