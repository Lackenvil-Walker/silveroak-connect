const Features = () => {
  const features = [
    {
      title: "We're Fast, Simple, and Compliant",
      description: "Our platform manages every aspect of your business needs across multiple jurisdictions worldwide. Case initiations, information collection, and necessary documentation are handled through a secure, easy-to-use portal. This comprehensive system maximizes efficiency, ensures compliance, and simplifies management."
    },
    {
      title: "A Stellar User Experience",
      description: "Complex business operations make serious demands on time and resources. SILVEROAK PARTNERS makes your experience as easy and efficient as it can be. Our technology provides clear status updates and vital information, ensuring that whatever your role is in the process, the information you need is at your fingertips."
    },
    {
      title: "Trust is Our Priority",
      description: "We understand that security and confidentiality are paramount. Our platform employs industry-leading security measures to protect your sensitive information. With SILVEROAK PARTNERS, you can trust that your data is safe, your processes are compliant, and your business objectives are our top priority."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            What Sets SILVEROAK PARTNERS Apart?
          </h3>
          
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;