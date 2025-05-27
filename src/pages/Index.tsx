
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Curriculum from "@/components/Curriculum";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Curriculum />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
