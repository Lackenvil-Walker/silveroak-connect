import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      
      <div className="container mx-auto px-4 relative z-10 py-32 md:py-40">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Explore the Future of Business Solutions
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Silveroak Immigration Consultants delivers expert immigration assistance and permit processing 
            with comprehensive prechecks to ensure a 100% success rate for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
