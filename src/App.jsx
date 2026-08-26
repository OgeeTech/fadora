import AboutPage from "./About";
import ContactPage from "./Contact";
import Footer from "./Footer";
import HeroSection from "./Hero";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Services from "./Services";

const App = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <Portfolio />
      <Services />
      <AboutPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default App;
