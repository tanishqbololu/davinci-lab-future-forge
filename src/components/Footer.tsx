
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-poppins font-bold text-2xl text-primary mb-4">
              Da Vinci Lab
            </div>
            <p className="font-inter text-gray-300 leading-relaxed">
              Transforming education through hands-on STEAM learning and emerging technologies.
            </p>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 font-inter text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Robotics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">3D Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IoT Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AR/VR</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 font-inter text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 font-inter text-gray-300">
              <p>Email: info@davincilab.edu</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Innovation Hub, Tech City</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">📘</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">🐦</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">📸</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">🔗</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="font-inter text-gray-400">
            © 2024 SuperTeacher - Da Vinci Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
