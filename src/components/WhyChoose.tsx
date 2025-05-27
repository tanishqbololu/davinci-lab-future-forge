
const WhyChoose = () => {
  const benefits = [
    {
      title: "Future-Ready Learning",
      description: "Curriculum designed for tomorrow's careers in AI, robotics, and emerging tech.",
      icon: "🎯",
      color: "bg-primary"
    },
    {
      title: "Hands-On Engagement", 
      description: "Students learn by doing, building real projects and prototypes.",
      icon: "✋",
      color: "bg-accent2"
    },
    {
      title: "Creative Engineering",
      description: "Blend creativity with technical skills to solve real-world problems.",
      icon: "🎨",
      color: "bg-accent1"
    },
    {
      title: "Globally Relevant",
      description: "Skills and knowledge that are valued worldwide in the digital economy.",
      icon: "🌍",
      color: "bg-primary"
    },
    {
      title: "Cutting-Edge Technology",
      description: "Access to the latest tools in AI, robotics, VR/AR, and IoT.",
      icon: "⚡",
      color: "bg-accent2"
    },
    {
      title: "Skill Development",
      description: "Build critical thinking, problem-solving, and collaboration skills.",
      icon: "💪",
      color: "bg-accent1"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-6xl mb-6 text-gray-900">
              Why Choose <span className="text-primary">Da Vinci Lab</span>?
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering the next generation with skills, mindset, and tools for the future workplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
