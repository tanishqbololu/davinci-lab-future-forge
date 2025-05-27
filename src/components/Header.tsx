
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-poppins font-bold text-2xl text-primary">
          Da Vinci Lab
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="font-inter text-gray-700 hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('curriculum')}
            className="font-inter text-gray-700 hover:text-primary transition-colors"
          >
            Curriculum
          </button>
          <button 
            onClick={() => scrollToSection('benefits')}
            className="font-inter text-gray-700 hover:text-primary transition-colors"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-inter text-gray-700 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('curriculum')}
            className="hidden sm:flex"
          >
            Explore Curriculum
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90"
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
