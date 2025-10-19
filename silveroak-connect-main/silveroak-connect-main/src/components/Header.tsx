import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
              Silveroak Immigration Consultants
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              Our Services
            </a>
            <a href="#assessment" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              Immigration Assessment
            </a>
            <a href="#about" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              About Us
            </a>
            <a href="#contact" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              asChild
            >
              <a href="tel:0788868980" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0788868980
              </a>
            </Button>
          </nav>

          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-6 space-y-4">
            <a 
              href="#services" 
              className="block text-primary-foreground hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Services
            </a>
            <a 
              href="#assessment" 
              className="block text-primary-foreground hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Immigration Assessment
            </a>
            <a 
              href="#about" 
              className="block text-primary-foreground hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="block text-primary-foreground hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              asChild
            >
              <a href="tel:0788868980" className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                0788868980
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
