import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Slideshow from "./components/image-slider";
import WhyRoseCommunication from "./components/why";
import OurExpertise from "./components/experties";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slideshow></Slideshow>
      <WhyRoseCommunication></WhyRoseCommunication>
      <OurExpertise></OurExpertise>
      <Hero></Hero>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
