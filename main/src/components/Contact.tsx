import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-12">
            Contact us today to discover how SILVEROAK PARTNERS can help you achieve your goals.
          </p>
          
          <Card className="p-8 md:p-12 bg-card/95 backdrop-blur">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">Call Us</h4>
                <a 
                  href="tel:0788868980" 
                  className="text-accent hover:text-accent/80 font-semibold text-xl transition-colors"
                >
                  0788868980
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">Email Us</h4>
                <a 
                  href="mailto:info@silveroakpartners.com" 
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  info@silveroakpartners.com
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">Visit Us</h4>
                <p className="text-foreground/70">
                  Rivonia Spaces<br />
                  377 Rivonia Blvd
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:0788868980">
                  Schedule a Consultation
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
