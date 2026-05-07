import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center ">
        <h1 className="text-4xl mt-14 sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl text-center font-bold">
          About Me
        </h1>
      </div>
      <p className="max-w-3xl mx-auto text-justify sm:text-lg leading-relaxed sm:leading-loose w-full px-4 sm:px-0 mt-5">
        I am a <span className="font-bold text-red-500">Frontend Engineer</span>{" "}
        specializing in high-performance, cinematic web applications within the
        <span className="font-semibold text-blue-500"> AI and Web3</span>{" "}
        ecosystems. My work sits at the intersection of complex decentralized
        logic and intuitive user experiences, with a core focus on{" "}
        <span className="font-semibold">Next.js and React</span>.
        <br />
        <br />
        With a background in Software Engineering and professional experience at{" "}
        <a href="..." className="text-blue-500 hover:underline font-semibold">
          Alfabolt ↗
        </a>{" "}
        and{" "}
        <a
          href="/documents/M Gulfam Experience Letter.pdf"
          className="text-blue-500 hover:underline font-semibold"
        >
          Kaizen Global ↗
        </a>
        , I architect production-ready platforms that bridge the gap between
        ambitious technical requirements and scalable reality. Whether it’s
        <span className="font-medium text-gray-900 dark:text-white">
          {" "}
          engineering multi-chain staking protocols (TON, Solana, EVM)
        </span>{" "}
        or
        <span className="font-medium text-gray-900 dark:text-white">
          {" "}
          deploying AI-driven data pipelines
        </span>
        , I prioritize engineering rigor and performance optimization.
      </p>
      <div className="flex justify-center items-center md:gap-96 gap-10 mt-12">
        <a
          href="/documents/Gulfam-CV.pdf"
          className="mt-4 w-fit border-2 px-10 py-3 rounded-3xl text-white bg-gradient-to-r from-red-500 to-blue-300 text-md font-bold hover:scale-105"
        >
          Resume
        </a>

        <Link
          to="/Contact"
          className="mt-4 w-fit border-2 px-10 py-3 rounded-3xl text-white bg-gradient-to-r from-red-500 to-blue-300 text-md font-bold hover:scale-105"
        >
          Hire Me
        </Link>
      </div>

      <div className="h-0.5 mt-10 bg-gradient-to-r from-red-500 to-blue-400"></div>
    </div>
  );
};
export default About;
