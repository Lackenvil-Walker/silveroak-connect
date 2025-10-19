import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ImmigrationAssessment from "@/components/ImmigrationAssessment";
import Innovation from "@/components/Innovation";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Header />
      <Hero />
      <About />
      <Services />
      <ImmigrationAssessment />
      <Innovation />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
