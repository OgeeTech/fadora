import { motion } from "framer-motion";

// Mock Services Data
const services = [
  {
    id: "01",
    title: "Weddings & Elopements",
    description:
      "Documenting your most intimate moments with a cinematic, storytelling approach. We focus on raw emotions, candid interactions, and timeless elegance to ensure your memories last generations.",
    price: "Starting at $2,500",
    features: [
      "Up to 10 Hours Coverage",
      "Second Photographer",
      "High-Res Digital Gallery",
      "Engagement Session",
    ],
    img: "/1.jpeg",
    reverse: false,
  },
  {
    id: "02",
    title: "Portrait & Editorial",
    description:
      "Striking, high-contrast portraiture designed to capture your authentic essence. Whether for personal branding, editorial publication, or fine art, we craft images that demand attention.",
    price: "Starting at $600",
    features: [
      "2 Hour Studio or Location",
      "Creative Direction",
      "30 Retouched Images",
      "Multiple Looks",
    ],
    img: "/2.jpeg",
    reverse: true,
  },
  {
    id: "03",
    title: "Commercial & Branding",
    description:
      "Elevate your brand's visual identity with sleek, professional imagery. We work intimately with brands to create tailored visual assets that communicate luxury, quality, and mood.",
    price: "Custom Quoted",
    features: [
      "Brand Consultation",
      "Half or Full Day Rates",
      "Commercial Usage Rights",
      "Prop & Set Styling",
    ],
    img: "/3.jpeg",
    reverse: false,
  },
];

const Services = () => {
  return (
    <div
      id="service"
      className="w-full min-h-screen bg-black pt-32 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-32"
      >
        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-4">
          Our Expertise
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-lg">
          The Services
        </h2>
        <div className="w-24 h-[2px] bg-white mx-auto"></div>
      </motion.div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col gap-12 lg:gap-24 items-center ${
              service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Image Container */}
            <div className="w-full lg:w-1/2 relative group overflow-hidden">
              <div className="aspect-[4/5] w-full">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover filter grayscale" // Keeps the B&W aesthetic
                />
              </div>
              {/* Giant Background Number for Editorial Feel */}
              <div
                className={`absolute top-4 ${service.reverse ? "left-4" : "right-4"} text-9xl font-black text-white/10 select-none pointer-events-none z-10`}
              >
                {service.id}
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-6 drop-shadow-md">
                {service.title}
              </h3>

              <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Pricing & Features */}
              <div className="border-l-2 border-white/20 pl-6 mb-10">
                <p className="text-white font-bold tracking-widest uppercase mb-4 text-sm">
                  {service.price}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-gray-500 flex items-center gap-3 text-sm tracking-wide"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 rounded-sm"
                >
                  Inquire Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
