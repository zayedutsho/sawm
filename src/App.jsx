import "./App.css";
import Client from "./comp/Client";
import Design from "./comp/Design";
import Faqs from "./comp/Faqs";
import Footer from "./comp/Footer";
import Hero from "./comp/Hero";
import HeroTwo from "./comp/HeroTwo";
import Services from "./comp/Services";

function App() {
  return (
    <>
      <Hero />

      {/* <Servic></Servic> */}
      <HeroTwo />
      <Services />
      <Client />
      <Design />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
