import NavbarMega from "./components/NavbarMega";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ScrollingPromoBanner from "./components/ScrollingPromoBanner";
import Banner from "./components/Banner";
import ConsultationProcess from "./components/ConsultationProcess";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

//==================================================================
export default function App() {
  //==================================================================
  return (
    <div className="scrollbar p-1 bg-background-section text-primary-text">
      <NavbarMega />
      <HeroSection />
      {/* <ScrollingPromoBanner /> */}
      <ServicesSection />
      <Banner
        message="New features launching this month! Book your free consultation now."
        actionText="Book Now"
        // onAction={() => console.log("Banner CTA clicked!")}
      />
      <WhyChooseUs />
      <ConsultationProcess />
      <NewsSection />



      <Footer />
    </div>
  );
}
//==================================================================
