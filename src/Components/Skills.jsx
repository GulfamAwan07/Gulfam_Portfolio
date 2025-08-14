import { motion } from "framer-motion";

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

       
        <motion.div variants={textVariants} className="flex flex-col md:flex-row items-center md:gap-12 gap-6 mt-14">
          <div className="h-28 w-28 md:h-32 md:w-32 border-2 flex justify-center border-gray-400 items-center rounded-full bg-gradient-to-r from-red-500 to-blue-300">
            <h1 className="text-xl md:text-2xl font-bold">Languages</h1>
          </div>
          <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
            • HTML &nbsp; | &nbsp; • CSS &nbsp; | &nbsp; • Tailwindcss | &nbsp; • JavaScript | &nbsp; • C++
          </h2>
        </motion.div>

       
        <motion.div variants={textVariants} className="flex flex-col md:flex-row items-center md:gap-12 gap-6 mt-14">
          <div className="h-28 w-28 md:h-32 md:w-32 border-2 border-gray-400 flex justify-center items-center rounded-full bg-gradient-to-r from-red-500 to-blue-300">
            <h1 className="text-xl md:text-2xl font-bold">Frontend</h1>
          </div>
          <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
            • Next.js &nbsp; | &nbsp; • React.js | &nbsp; • Redux.js
          </h2>
        </motion.div>

       
        <motion.div variants={textVariants} className="flex flex-col md:flex-row items-center md:gap-12 gap-6 mt-14">
          <div className="h-28 w-28 md:h-32 md:w-32 border-2 border-gray-400 flex justify-center items-center rounded-full bg-gradient-to-r from-red-500 to-blue-300">
            <h1 className="text-xl md:text-2xl font-bold">Tools</h1>
          </div>
          <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
             &nbsp; • Git | &nbsp; • GitHub | &nbsp; • Vercel | &nbsp; • Supabase
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
