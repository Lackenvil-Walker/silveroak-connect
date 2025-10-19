import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg border-border">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Unified, Comprehensive System
            </h3>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                We offer clients a <strong className="text-foreground">flexible, powerful platform</strong> that 
                improves and enriches program management, guards against costly errors and missteps, ensures 
                compliance, and integrates seamlessly with third-party vendors. Our clients appreciate our 
                sensible, streamlined approach that makes complicated business challenges as straightforward 
                as possible.
              </p>
              <p>
                Because Silveroak Immigration Consultants is built on the vast interconnected knowledge of our 
                professionals—their decades of experience earned through work across diverse industries—we 
                can adapt quickly to any emergent business challenge, from rapid market changes to global 
                disruptions, and everything in between.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
