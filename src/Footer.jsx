const Footer = () => {
  return (
    <footer className="w-full bg-black py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest text-center">
          &copy; {new Date().getFullYear()} Fedora Media. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
