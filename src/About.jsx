import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-black pt-32 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Column: The Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="absolute -top-8 -left-8 w-full h-full border border-white/10 z-0 hidden md:block"></div>

          <div className="relative z-10 aspect-[3/4] w-full overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
              src="/profile.png"
              alt="Portrait of the Artist"
              className="w-full h-full object-cover filter grayscale"
            />

            {/* Overlay Text on Image */}
            <div className="absolute bottom-6 left-6 text-white font-bold uppercase tracking-widest text-xs drop-shadow-md">
              Est. 2026
            </div>
          </div>
        </motion.div>

        {/* Right Column: The Story */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-4">
              The Visionary
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8 drop-shadow-lg">
              Behind <br /> The Lens
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-gray-400 font-light leading-relaxed text-lg"
          >
            <p>
              Founded by Tolulope Owokede in the heart of Guernsey, Fedora was
              born out of a relentless passion for visual storytelling and the
              cinematic arts. We believe that a photograph is more than just a
              captured second in time—it is a piece of legacy.
            </p>
            <p>
              Our aesthetic is rooted in high-contrast, black-and-white imagery
              that strips away the distractions of color to reveal raw emotion,
              authentic texture, and profound depth. We don't just document
              events; we craft editorial narratives that elevate your most
              important moments into timeless works of art.
            </p>
            <p>
              Whether it is the quiet anticipation before a wedding vow or the
              striking intensity of a studio portrait, our approach remains the
              same: meticulous attention to detail, a mastery of light and
              shadow, and a commitment to creating images that you will feel
              forever.
            </p>
          </motion.div>

          {/* Signature or Sign-off */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12"
          >
            <div className="text-3xl text-white font-black uppercase tracking-[0.3em] opacity-80">
              T. Owokede
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">
              Lead Photographer & Founder
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
