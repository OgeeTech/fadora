import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-black pt-32 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column: Contact Info & Branding */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest block mb-4">
              Inquire
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-8 drop-shadow-lg">
              Let's Create <br /> Together
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Bio & Location */}
            <div>
              <p className="text-xl text-white font-light tracking-wide mb-2">
                Professional photographer based in{" "}
                <span className="font-bold">Guernsey</span>.
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">
                Available to travel worldwide.
              </p>
            </div>

            {/* Specialties List */}
            <div className="py-8 border-y border-white/10">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                Specializing In
              </p>
              <ul className="grid grid-cols-2 gap-4 text-white uppercase tracking-wider text-sm font-bold">
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-white rounded-full"></span>{" "}
                  Portraits
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-white rounded-full"></span>{" "}
                  Birthdays
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-white rounded-full"></span>{" "}
                  Weddings
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-white rounded-full"></span> Events
                </li>
              </ul>
            </div>

            {/* Direct Email */}
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
                For Direct Bookings
              </p>
              <a
                href="mailto:fedoramedia95@gmail.com"
                className="text-xl md:text-2xl text-white font-light hover:text-gray-300 transition-colors duration-300"
              >
                fedoramedia95@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Minimalist Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="w-full lg:w-1/2 flex items-center"
        >
          <form className="w-full bg-gray-900/50 p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl backdrop-blur-sm flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white text-white py-3 outline-none transition-colors placeholder-gray-500 text-sm tracking-wide"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white text-white py-3 outline-none transition-colors placeholder-gray-500 text-sm tracking-wide"
                  required
                />
              </div>
            </div>

            {/* Event Type / Subject */}
            <div className="relative group">
              <select
                id="service"
                className="w-full bg-transparent border-b border-gray-600 focus:border-white text-white py-3 outline-none transition-colors text-sm tracking-wide appearance-none cursor-pointer"
                defaultValue=""
                required
              >
                <option value="" disabled className="text-gray-900">
                  Select Inquiry Type
                </option>
                <option value="weddings" className="text-gray-900">
                  Weddings
                </option>
                <option value="portraits" className="text-gray-900">
                  Portraits
                </option>
                <option value="birthdays" className="text-gray-900">
                  Birthdays
                </option>
                <option value="events" className="text-gray-900">
                  Events
                </option>
                <option value="other" className="text-gray-900">
                  Other
                </option>
              </select>
            </div>

            {/* Message Field */}
            <div className="relative group">
              <textarea
                id="message"
                placeholder="Tell me about your vision..."
                rows="4"
                className="w-full bg-transparent border-b border-gray-600 focus:border-white text-white py-3 outline-none transition-colors placeholder-gray-500 text-sm tracking-wide resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full py-4 bg-white text-black font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 rounded-sm"
            >
              Send Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
