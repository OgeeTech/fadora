import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-white tracking-[0.2em] uppercase mb-4 drop-shadow-lg"
        >
          Fedora
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="text-lg md:text-2xl text-white font-bold tracking-wide max-w-2xl drop-shadow-md"
        >
          Elegant Photography & Timeless Memories
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#f3f4f6",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-10 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-sm"
        >
          Book Now
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white font-bold text-xs tracking-widest uppercase mb-2 drop-shadow-md">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 text-white drop-shadow-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
