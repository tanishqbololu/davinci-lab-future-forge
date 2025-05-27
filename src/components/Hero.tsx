
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              Build the 
              <span className="text-primary"> Future</span>.
              <br />
              One Prototype at a Time.
            </h1>
          </div>
          
          <div className="animate-slide-up">
            <p className="font-inter text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Where students turn ideas into intelligent machines, models, and immersive experiences through hands-on STEAM education.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              onClick={() => scrollToSection('curriculum')}
            >
              Explore Curriculum
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-2"
              onClick={() => scrollToSection('contact')}
            >
              Get a Demo
            </Button>
          </div>

          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <img 
                src="/api/placeholder/800/400" 
                alt="Students working with robots and technology in Da Vinci Lab"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
