import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Globe, Shield } from "lucide-react";

const Innovation = () => {
  const innovations = [
    {
      icon: Lightbulb,
      title: "Cutting-Edge Solutions",
      description: "We leverage the latest technologies and methodologies to deliver innovative solutions that keep you ahead of the curve."
    },
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      description: "Our data-driven approach identifies opportunities for sustainable growth and competitive advantage in your market."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With expertise across multiple jurisdictions, we provide seamless support for your international operations."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive compliance and security measures protect your business interests at every step."
    }
  ];

  return (
    <section id="innovation" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Innovation That Drives Results
            </h3>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              At SILVEROAK PARTNERS, we combine industry expertise with innovative thinking to deliver 
              solutions that transform your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
