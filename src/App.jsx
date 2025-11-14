import Form from "./components/Form";
import PopupForm from "./components/PopupForm";
import HeroSection from "./components/HeroSection";
import Offers from "./components/Offers";
import OurCollections from "./components/OurCollections";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <PopupForm />
      <HeroSection />
      <OurCollections />
      <Offers />
      <Testimonials />
      <Form />
      <WhatsAppButton
        phone={"919999999999"}
        message={"Hi, I would like to chat about Diamond Lleaf."}
      />
    </>
  );
}

export default App;
