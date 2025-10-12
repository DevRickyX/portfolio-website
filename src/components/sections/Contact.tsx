import React from 'react';
import { Send } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';
import { contactInfo } from '../../data/contact';

export const Contact: React.FC = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit
  } = useContactForm();

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-5xl lg:text-6xl font-black mt-4 mb-6">
            <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Let's Create
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your ideas into exceptional digital solutions?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Start Your Project</h3>
            <p className="text-white/70 mb-12 text-lg leading-relaxed">
              Whether you need a cutting-edge web application, innovative mobile app, or scalable backend infrastructure, 
              I'm here to bring your vision to life with modern technology and exceptional design.
            </p>
            
            <div className="space-y-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {contact.title}
                    </h4>
                    <p className="text-white/70 text-lg">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 font-medium mb-3">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 font-medium mb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/80 font-medium mb-3">Project Type</label>
                  <div className="relative">
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 pr-12 bg-white/5 border border-white/20 rounded-xl text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-900">Select project type</option>
                      <option value="web" className="bg-gray-900">Web Application</option>
                      <option value="mobile" className="bg-gray-900">Mobile App</option>
                      <option value="fullstack" className="bg-gray-900">Full Stack Solution</option>
                      <option value="consultation" className="bg-gray-900">Technical Consultation</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/80 font-medium mb-3">Project Requirements</label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                    placeholder="Describe your project requirements, goals, timeline, and any specific technologies you'd like to use..."
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-center">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-center">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-emerald-500 to-green-400 text-black hover:from-green-400 hover:to-emerald-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-300"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
