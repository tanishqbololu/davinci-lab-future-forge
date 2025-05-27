
const Curriculum = () => {
  const subjects = [
    {
      title: "Robotics & Automation",
      description: "Build and program intelligent robots using sensors, motors, and AI algorithms.",
      icon: "🤖",
      color: "from-primary to-green-600"
    },
    {
      title: "Artificial Intelligence",
      description: "Explore machine learning, computer vision, and AI model development.",
      icon: "🧠",
      color: "from-accent2 to-blue-600"
    },
    {
      title: "3D Design & Printing",
      description: "Create digital models and bring them to life with 3D printing technology.",
      icon: "🎯",
      color: "from-accent1 to-yellow-600"
    },
    {
      title: "Internet of Things",
      description: "Connect devices and sensors to create smart, interconnected systems.",
      icon: "🌐",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Drone & Aeromodelling",
      description: "Design, build, and program autonomous flying vehicles and aircraft.",
      icon: "🚁",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "AR/VR Development",
      description: "Create immersive virtual and augmented reality experiences.",
      icon: "🥽",
      color: "from-cyan-500 to-teal-600"
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-6xl mb-6 text-gray-900">
              What Students Will <span className="text-primary">Create</span>
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Hands-on projects that combine creativity, engineering, and cutting-edge technology to solve real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {subject.icon}
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-4 text-gray-900 group-hover:text-gray-800">
                    {subject.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {subject.description}
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

export default Curriculum;
