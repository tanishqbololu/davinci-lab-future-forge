
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    email: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours to schedule your demo.",
    });

    // Reset form
    setFormData({
      name: '',
      school: '',
      email: '',
      role: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-6xl mb-6 text-gray-900">
              Ready to <span className="text-primary">Transform</span> Your Classroom?
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us to schedule a demo and see how Da Vinci Lab can revolutionize STEAM education at your institution.
            </p>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-inter font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="school" className="block font-inter font-medium text-gray-700 mb-2">
                    School/Institution *
                  </label>
                  <Input
                    id="school"
                    name="school"
                    type="text"
                    required
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your school name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block font-inter font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block font-inter font-medium text-gray-700 mb-2">
                    I am a *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="teacher">Teacher</option>
                    <option value="principal">Principal/Admin</option>
                    <option value="coordinator">STEAM Coordinator</option>
                    <option value="parent">Parent</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full"
                  rows={4}
                  placeholder="Tell us about your school's needs and how we can help..."
                />
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-12 py-4"
                >
                  Schedule Your Demo
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
