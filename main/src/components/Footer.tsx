const Footer = () => {
  return (
    <footer className="bg-primary/95 text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Silveroak Immigration Consultants</h3>
            <p className="text-primary-foreground/80">
              Delivering innovative business solutions worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#assessment" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Immigration Assessment
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Information</h4>
            <p className="text-primary-foreground/80 mb-2">
              Phone: <a href="tel:0788868980" className="text-accent hover:text-accent/80 transition-colors font-semibold">0788868980</a>
            </p>
            <p className="text-primary-foreground/80 mb-2">
              Email: <a href="mailto:info@silveroakpartners.com" className="text-accent hover:text-accent/80 transition-colors">info@silveroakpartners.com</a>
            </p>
            <p className="text-primary-foreground/80">
              Address: Rivonia Spaces - 377 Rivonia Blvd
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Silveroak Immigration Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
