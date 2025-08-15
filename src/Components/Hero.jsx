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
    <div className=" text-black bg-[url('/image/myPic.png')] w-screen h-screen bg-cover bg-center py-16 px-4 sm:px-10 lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-1 text-[#ff85a1] md:mt-20 leading-snug">Hi, I am</h1>
          <h1 className="mt-2 font-bold text-3xl md:text-4xl  text-[#ff5c8a] sm:text-3xl ">
            Gulfam Awan
          </h1>

          <h3 className="md:text-4xl sm:text-3xl px-2 font-bold mt-2">
            {" "}
            <span
              ref={textRef}
              className="text-3xl md:text-4xl mt-0transition-opacity opacity-100 text-[#ff477e] duration-500"
            >
              Software Developer
            </span>
          </h3>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;
