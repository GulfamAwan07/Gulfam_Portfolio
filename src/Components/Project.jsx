import { setIn } from "formik";
import React, { useState, useEffect } from "react";
const FaGithub = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Project = () => {
  // DGO Restaurant project images
  const pics = ["./Restaurant.png", "./dgo2.PNG", "./dgo3.PNG"];
  const [picsIndex, setPicsIndex] = useState(0);

  // Blog project images
  const photo = ["./Blog1.PNG", "./Blog2.PNG", "./Blog3.PNG"];
  const [photoIndex, setPhotoIndex] = useState(0);

  // Ebey project images
  const images = ["./Ebey1.png", "./site2.png", "./site3.PNG"];
  const [imagesIndex, setImagesIndex] = useState(0);

  const aiImg = [
    "./ms1.png",
    "./ms2.png",
    "./ms3.png",
    "./ms4.png",
    "./ms5.png",
    "./ms6.png",
  ];

  const staking = ["./s2.png", "./s3.png", "./s4.png", "./s5.png", "./s1.png"];
  const river = ["./r1.png", "./r2.png", "./r3.png"];
  const metamask = ["./mm1.png", "./mm2.png", "./mm3.png", "./mm4.png"];

  const [stakingIndex, setStakingIndex] = useState(0);
  const [riverIndex, setRiverIndex] = useState(0);
  const [metamaskIndex, setMetamaskIndex] = useState(0);
  const [aiIndex, setAiIndex] = useState(0);
  const tabs = ["Web2", "Web3", "AI"];
  const [active, setActive] = useState("Web2");

  useEffect(() => {
    const timer = setInterval(() => {
      setPicsIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [pics.length]);

  useEffect(() => {
    const time = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % photo.length);
    }, 2700);
    return () => clearInterval(time);
  }, [photo.length]);

  useEffect(() => {
    const time = setInterval(() => {
      setImagesIndex((prevValue) => (prevValue + 1) % images.length);
    }, 2900);
    return () => clearInterval(time);
  }, [images.length]);

  useEffect(() => {
    const time = setInterval(() => {
      setAiIndex((prevValue) => (prevValue + 1) % aiImg.length);
    }, 2900);
    return () => clearInterval(time);
  }, [aiImg.length]);

  useEffect(() => {
    const time = setInterval(() => {
      setStakingIndex((prevValue) => (prevValue + 1) % staking.length);
    }, 2900);
    return () => clearInterval(time);
  }, [staking.length]);

  useEffect(() => {
    const time = setInterval(() => {
      setRiverIndex((prevValue) => (prevValue + 1) % river.length);
    }, 2900);
    return () => clearInterval(time);
  }, [river.length]);

  useEffect(() => {
    const time = setInterval(() => {
      setMetamaskIndex((prevValue) => (prevValue + 1) % metamask.length);
    }, 2900);
    return () => clearInterval(time);
  }, [metamask.length]);

  return (
    <div className="mt-12 px-3 sm:px-4 lg:px-8">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8">
        Projects
      </h1>

      <div className="w-full flex justify-center items-center px-4 mt-4">
        <div className="relative p-[2px] rounded-full overflow-hidden group">
          {/* Rotating Gradient Border */}
          <div className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(#f9a8d4,#93c5fd,#c4b5fd,#86efac,#fde68a,#f9a8d4)]"></div>

          {/* Content */}
          <div
            className="
      relative
      flex items-center gap-2
      backdrop-blur-xl bg-black/20
      rounded-full
      p-2
      overflow-x-auto
      scrollbar-hide
      max-w-full
    "
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`
          whitespace-nowrap
          px-7 py-2.5
          rounded-full
          text-sm sm:text-base
          font-semibold
          transition-all duration-300
          
          cursor-pointer
          ${
            active === tab
              ? "bg-gradient-to-r from-red-500 to-blue-400 text-black font-semibold shadow-md"
              : "hover:bg-red-600/20 text-white"
          }
        `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-first responsive grid */}
      <div className="grid mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {active === "Web2" && (
          <>
            {/* Ebey Shopping Site */}
            <div className="w-full">
              <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                  src={images[imagesIndex]}
                  alt="Ebey Project"
                />

                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)] custom-scroll">
                  <h1 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                    Ebey Shopping Site
                  </h1>

                  <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                    <p className="text-gray-700 font-sans text-justify px-4">
                      I crafted the landing page for ebey.site with a clean and
                      modern UI.
                    </p>

                    <div className="text-center">
                      <h2 className="text-gray-900 font-semibold mb-1">
                        Tech Stack
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        • React.js • JavaScript • CSS • JS Libraries
                      </p>
                    </div>

                    <div className="text-center">
                      <h2 className="font-semibold text-gray-900 mb-1">
                        Description
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-justify px-4">
                        I crafted the landing page for ebey.site, featuring a
                        clean, modern UI and smooth user experience. It's
                        designed to be visually appealing and fully responsive
                        across devices.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://github.com/GulfamAwan07/Ebey.pk-site-UI.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>

            {/* Blog App */}
            <div className="w-full">
              <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                  src={photo[photoIndex]}
                  alt="Blog App"
                />

                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)] custom-scroll">
                  <h1 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                    Blog App
                  </h1>

                  <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                    <p className="text-gray-700 font-sans text-justify px-4">
                      A modern Full Stack Blog App with multiple Amazing
                      features.
                    </p>

                    <div className="text-center">
                      <h2 className="text-gray-900 font-semibold mb-1">
                        Tech Stack
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        • Next.js • React.js • REDUX • JWT Auth • SupaBase • JS
                        Libraries
                      </p>
                    </div>

                    <div className="text-center">
                      <h2 className="font-semibold text-gray-900 mb-1">
                        Description
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-justify px-4">
                        A full-stack blog application with user authentication,
                        content management, and modern UI. Features include user
                        registration, post creation, and responsive design for
                        optimal user experience.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://github.com/alfabolt-training/web-intern-GulfamAwan07.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>

            {/* DGO Portfolio */}
            <div className="w-full md:col-span-2 xl:col-span-1">
              <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                  src={pics[picsIndex]}
                  alt="DGO Project"
                />

                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)] custom-scroll">
                  <h2 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                    DGO Portfolio
                  </h2>

                  <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                    <p className="text-gray-700 font-sans text-justify px-4">
                      I designed the frontend of DGO, a modern Restaurant
                      Portfolio.
                    </p>

                    <div className="text-center">
                      <h2 className="text-gray-900 font-semibold mb-1">
                        Tech Stack
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        • React.js • JavaScript • Tailwindcss • JS Libraries
                      </p>
                    </div>

                    <div className="text-center">
                      <h2 className="font-semibold text-gray-900 mb-1">
                        Description
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-justify px-4">
                        I designed the frontend for DGO, a sleek and modern
                        restaurant portfolio website. The interface features a
                        clean layout, rich visuals, and smooth user interactions
                        to showcase the brand's identity. Built with performance
                        and responsiveness in mind, it delivers an engaging
                        experience across all devices.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://github.com/GulfamAwan07/DGO-Portfolio-Site.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>
          </>
        )}

        {active === "AI" && (
          <>
            <div className="w-full">
              <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                  src={aiImg[aiIndex]}
                  alt="Ebey Project"
                />

                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)] custom-scroll">
                  <h1 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                    MediSense
                  </h1>

                  <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                    <p className="text-gray-700 font-sans text-justify px-4">
                      I designed and developed the MediSense - Medical Report
                      Summarizer with dashboard to save records and a chatbot to
                      define medical tough terminologies.
                    </p>

                    <div className="text-center">
                      <h2 className="text-gray-900 font-semibold mb-1">
                        Tech Stack
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        • React.js • Tailwind CSS • Python • Supabase • LLM
                        Integrations • Vercel • Railways
                      </p>
                    </div>

                    <div className="text-center">
                      <h2 className="font-semibold text-gray-900 mb-1">
                        Description
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-justify px-4">
                        MediSense is an AI-powered medical report summarizer
                        designed to simplify complex medical reports into
                        easy-to-understand insights for patients. The platform
                        features a secure dashboard for storing and managing
                        medical records efficiently. It also includes an
                        intelligent chatbot that explains difficult medical
                        terminologies in simple language, improving
                        accessibility and patient understanding. Built with
                        modern web technologies, the system focuses on
                        user-friendly healthcare assistance and seamless report
                        management.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://github.com/GulfamAwan07/MediSense"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>
          </>
        )}

        {active === "Web3" && (
          <>
            <div className="w-full">
              <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                  src={staking[stakingIndex]}
                  alt="staking project"
                />

                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)] custom-scroll">
                  <h1 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                    Staking TON
                  </h1>

                  <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                    <p className="text-gray-700 font-sans text-justify px-4">
                      I designed and developed the portfolio site and staking
                      app where users can stake and unstake TON.
                    </p>

                    <div className="text-center">
                      <h2 className="text-gray-900 font-semibold mb-1">
                        Tech Stack
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        • React.js • Tailwind CSS • TON Connect Libs • JS
                        Libraries
                      </p>
                    </div>

                    <div className="text-center">
                      <h2 className="font-semibold text-gray-900 mb-1">
                        Description
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-justify px-4">
                        Designed and developed a modern portfolio website
                        integrated with a TON-based staking application,
                        enabling users to securely stake and unstake TON tokens.
                        Built responsive and interactive frontend interfaces
                        with a focus on smooth user experience and performance.
                        Implemented wallet connectivity, staking workflows, and
                        real-time transaction handling for seamless blockchain
                        interaction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <a
                  href="https://github.com/GulfamAwan07/Ebey.pk-site-UI.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                    <FaGithub />
                  </div>
                </a> */}
              </div>
            </div>

            <div className="w-full">
              <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                  src={metamask[metamaskIndex]}
                  alt="Metamask Clone"
                />

                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)] custom-scroll">
                  <h1 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                    Metamask Clone
                  </h1>

                  <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                    <p className="text-gray-700 font-sans text-justify px-4">
                      I cloned the Metamask extension, deeply copied the all
                      design and apply send and receive transactions logics
                      using real blockchain.
                    </p>

                    <div className="text-center">
                      <h2 className="text-gray-900 font-semibold mb-1">
                        Tech Stack
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        • React.js • Tailwind CSS • Reown • Solana@web3 •
                        manifest
                      </p>
                    </div>

                    <div className="text-center">
                      <h2 className="font-semibold text-gray-900 mb-1">
                        Description
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-justify px-4">
                        Developed a fully functional clone of the MetaMask
                        browser extension by closely replicating its UI/UX and
                        core wallet functionalities. Implemented real
                        blockchain-based send and receive transaction logic,
                        enabling secure crypto transfers and wallet
                        interactions. Focused on pixel-perfect design
                        reproduction, responsive layouts, and seamless Web3
                        integration to simulate a real wallet experience.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://github.com/GulfamAwan07/MetaMask-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full">
              <div className="group relative w-full h-[380px] sm:h-[420px] border-2 hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 border-gray-300 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  className="w-auto h-[200px] object-contain bg-white border-b-2 border-gray-300 rounded-t-2xl mx-auto"
                  src={river[riverIndex]}
                  alt="Rivermind"
                />

                <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-200px)] custom-scroll">
                  <h1 className="text-lg sm:text-xl text-center text-gray-900 font-bold mb-2">
                    Rivermind
                  </h1>

                  <div className="flex-1 overflow-auto text-xs sm:text-sm space-y-2">
                    <p className="text-gray-700 font-sans text-justify px-4">
                      I designed and developed the rivermind site, where user
                      can invest mmv coin in FILM use EVM Chain.
                    </p>

                    <div className="text-center">
                      <h2 className="text-gray-900 font-semibold mb-1">
                        Tech Stack
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        • React.js • Tailwind CSS • Reown
                      </p>
                    </div>

                    <div className="text-center">
                      <h2 className="font-semibold text-gray-900 mb-1">
                        Description
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-justify px-4">
                        Designed and developed the RiverMind investment
                        platform, enabling users to invest MMV coins into FILM
                        using EVM-compatible blockchain networks. Built
                        responsive and user-friendly interfaces with secure
                        wallet integration and smooth blockchain transaction
                        handling. Implemented core Web3 functionalities
                        including token interaction, investment workflows, and
                        real-time transaction processing for a seamless
                        decentralized investment experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <a
                  href="https://github.com/GulfamAwan07/Ebey.pk-site-UI.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-2xl sm:text-3xl border-2 border-gray-600 bg-gradient-to-r from-red-500 to-blue-300 p-1 rounded-full text-black hover:text-gray-800">
                    <FaGithub />
                  </div>
                </a> */}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="h-0.5 mt-10 bg-gradient-to-r from-red-500 to-blue-400"></div>
    </div>
  );
};

export default Project;
