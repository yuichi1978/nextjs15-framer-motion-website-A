import Hero from "@/app/sections/Hero";
import Navbar from "@/app/sections/Navbar";
import Portfolio from "@/app/sections/Portfolio";
import Stack from "@/app/sections/Stack";
import Services from "@/app/sections/Services";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

export default function HomePage() {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <Hero />
      <Portfolio />
      <Stack />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
