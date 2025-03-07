import Image from "next/image";
import HeroSection from "./landing-page/heroSection";
import Navbar from "./landing-page/header";
import AboutSection from "./about/page";
import ServicesPage from "./services/page";
import WhyChooseMe from "./chooseMe/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesPage/>
      <WhyChooseMe/>
      <Contact/>
    </div>
   
  );
}
