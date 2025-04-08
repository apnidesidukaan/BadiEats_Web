import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import JobsPosted from "../components/JobsPosted";
import NavbarMega from "../components/NavbarMega";
import OurLocation from "../components/OurLocation";
import TeamSection from "../components/TeamSection";
//===================================================================
export default function Home() {
  //===================================================================
  return (
    <div className=" p-2 bg-[#ffff]">
      <NavbarMega />
      {/* <HeroSection /> */}
      <AboutUs />
      <TeamSection />
      <OurLocation />
      <Footer />
    </div>
  );
}
//===================================================================
