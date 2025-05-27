
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-6xl mb-8 text-gray-900">
            What is <span className="text-primary">Da Vinci Lab</span>?
          </h2>
          
          <p className="font-inter text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
            Da Vinci Lab transforms classrooms into innovation hubs where students design, 
            prototype, and experiment with emerging technologies. We provide future-ready 
            STEAM education that bridges the gap between theoretical knowledge and practical application.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Innovation Hubs</h3>
              <p className="font-inter text-gray-600">Transform traditional classrooms into cutting-edge innovation spaces.</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 hover:bg-accent2/5 transition-colors">
              <div className="w-16 h-16 bg-accent2 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Hands-On Learning</h3>
              <p className="font-inter text-gray-600">Students learn by building, creating, and experimenting with real technology.</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 hover:bg-accent1/5 transition-colors">
              <div className="w-16 h-16 bg-accent1 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Future Ready</h3>
              <p className="font-inter text-gray-600">Prepare students for careers in emerging technologies and innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
