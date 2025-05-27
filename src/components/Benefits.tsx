
const Benefits = () => {
  const benefits = [
    {
      title: "Complete Learning Kit",
      description: "Everything needed to start building: sensors, microcontrollers, 3D printing materials, and more.",
      icon: "📦"
    },
    {
      title: "AI-Powered LMS Access",
      description: "Personalized learning experiences with intelligent tutoring and progress tracking.",
      icon: "🎓"
    },
    {
      title: "DIY Robotics Modules",
      description: "Step-by-step guides to build robots, drones, and automated systems from scratch.",
      icon: "🔧"
    },
    {
      title: "Expert Training",
      description: "Professional development for educators with ongoing support and certification.",
      icon: "👨‍🏫"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and community forum access.",
      icon: "🛟"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-6xl mb-6 text-gray-900">
              What You <span className="text-primary">Get</span>
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              A complete ecosystem designed to support educators and students in their innovation journey.
            </p>
          </div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`flex items-center gap-8 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 1 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-green-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-2xl mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="font-inter text-lg text-gray-600 leading-relaxed">
                    {benefit.description}
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

export default Benefits;
