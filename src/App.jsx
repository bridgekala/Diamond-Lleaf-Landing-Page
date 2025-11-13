import Form from "./components/Form";
import HeroSection from "./components/HeroSection";
import Offers from "./components/Offers";
import OurCollections from "./components/OurCollections";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <HeroSection />
      <OurCollections />
      <Offers />
      <Testimonials />
      <Form/>
    </>
  );
}

export default App;
