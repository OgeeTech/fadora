import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "The Sanctuary",
    category: "Wedding",
    img: "/Wed.jpeg",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 2,
    title: "Silent Vigil",
    category: "Portrait",
    img: "/moody.jpeg",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Urban Pulse",
    category: "Street",
    img: "/street.jpeg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Tuscany Fade",
    category: "Landscape",
    img: "/nature.jpeg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "The Dance",
    category: "Wedding",
    img: "/couple.jpeg",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 6,
    title: "Steel & Shadow",
    category: "Architecture",
    img: "/architecture.jpeg",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 7,
    title: "First Breath",
    category: "Newborn",
    img: "/newborn.jpeg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    title: "Descent",
    category: "portrait",
    img: "/portrait.jpeg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 9,
    title: "Coastal Drift",
    category: "Landscape",
    img: "/ocean.jpeg",
    span: "md:col-span-1 md:row-span-1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="w-full min-h-screen bg-black pt-32 pb-20 px-6 md:px-12 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-4">
          Capturing Essence
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6">
          The Portfolio
        </h2>
        <div className="w-24 h-[2px] bg-white mx-auto"></div>
      </motion.div>

      {/* 2. Fancy Irregular Grid Container */}
      {/* We use grid-cols-1 on mobile, grid-cols-2 on tablet, grid-cols-4 on desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 grid-flow-row-dense"
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 0.98 }} // Box scales slightly down on hover
            transition={{ duration: 0.4 }}
            className={`group relative overflow-hidden bg-gray-900 rounded-sm cursor-pointer ${item.span} 
              ${index % 3 === 0 ? "mt-8 md:mt-0" : ""} /* Slight vertical offsets for asymmetry */
              ${index % 5 === 0 ? "md:-mt-6 lg:mt-0" : ""}
            `}
          >
            {/* Aspect Ratio Box - forces varying box sizes */}
            <div
              className={`w-full ${item.span.includes("row-span-2") ? "aspect-[3/4]" : "aspect-square"} sm:aspect-auto sm:h-full`}
            >
              {/* The Image - Enforce Black & White */}
              <motion.img
                src={item.img}
                alt={item.title}
                loading="lazy"
                whileHover={{ scale: 1.1 }} // Image scales UP inside the box
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover transition-all duration-300 filter grayscale group-hover:grayscale-0" // B&W by default, color on hover optional
              />

              {/* Fancy Hover Overlay - Transitions on group-hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                <motion.span
                  className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.category}
                </motion.span>
                <motion.h3
                  className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-wider drop-shadow-md"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <div className="w-10 h-[1px] bg-white mt-4 transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
