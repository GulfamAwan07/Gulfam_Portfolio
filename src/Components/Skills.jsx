import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { SiBlockchaindotcom } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";

const Skills = () => {
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 60,
        damping: 40,
      },
    },
  };

  return (
    <div className="px-4 sm:px-6 lg:px-20 mt-20">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl text-center font-bold"
          variants={textVariants}
        >
          Skills
        </motion.h1>

        <motion.div
          variants={textVariants}
          className="flex w-full flex-col md:flex-row items-center md:gap-12 gap-6 mt-14"
        >
          <div className="flex w-full gap-2 flex-col justify-center  items-center ">
            <div className="flex justify-center items-center border-2 border-gray-400 h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-red-500 to-blue-300">
              <FaCode className="size-10" />
            </div>

            <div className="flex justify-center items-center">
              <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
                HTML &nbsp; | &nbsp; CSS &nbsp; | &nbsp; Tailwind CSS | &nbsp;
                JavaScript | &nbsp; Python
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex flex-col md:flex-row items-center md:gap-12 gap-6 mt-14"
        >
          <div className="flex w-full gap-2 flex-col justify-center  items-center ">
            <div className="flex justify-center items-center border-2 border-gray-400 h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-red-500 to-blue-300">
              <FaReact className="size-10" />
            </div>

            <div className="flex justify-center items-center">
              <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
                React.js &nbsp; | &nbsp; Next.js &nbsp;
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex flex-col md:flex-row items-center md:gap-12 gap-6 mt-14"
        >
          <div className="flex w-full gap-2 flex-col justify-center items-center ">
            <div className="flex justify-center items-center border-2 border-gray-400 h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-red-500 to-blue-300">
              <SiBlockchaindotcom className="size-10" />
            </div>

            <div className="flex justify-center items-center">
              <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
                Web3 &nbsp; | &nbsp; dApps &nbsp; | &nbsp; EVM | &nbsp; Solana |
                &nbsp; TON
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex flex-col md:flex-row items-center md:gap-12 gap-6 mt-14"
        >
          <div className="flex w-full gap-2 flex-col justify-center items-center ">
            <div className="flex justify-center items-center border-2 border-gray-400 h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-red-500 to-blue-300">
              <LuBrainCircuit className="size-10" />
            </div>

            <div className="flex justify-center items-center">
              <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
                LLM Integration &nbsp; | &nbsp; Prompt Engineering &nbsp; |
                &nbsp; OpenClaw
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex flex-col md:flex-row items-center md:gap-12 gap-6 mt-14"
        >
          <div className="flex w-full gap-2 flex-col justify-center  items-center ">
            <div className="flex justify-center items-center border-2 border-gray-400 h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-red-500 to-blue-300">
              <VscTools className="size-10" />
            </div>

            <div className="flex justify-center items-center">
              <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
                GitHub &nbsp; | &nbsp; Vercel &nbsp; | &nbsp; Netlify | &nbsp;
                Supabase
              </h2>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="h-0.5 mt-10 bg-gradient-to-r from-red-500 to-blue-400"></div>
    </div>
  );
};

export default Skills;
