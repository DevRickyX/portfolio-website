import React, { useState } from "react";
import { Send } from "lucide-react";
import { contactInfo } from "../../data/contact";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          requirements: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mb-20 text-center">
          <span className="text-sm font-semibold tracking-wider uppercase text-emerald-400">
            Get In Touch
          </span>
          <h2 className="mt-4 mb-6 text-5xl font-black lg:text-6xl">
            <span className="text-transparent bg-gradient-to-r from-white to-emerald-200 bg-clip-text">
              Let's Create
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-white/70">
            Ready to transform your ideas into exceptional digital solutions?
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-3xl font-bold text-white">
              Start Your Project
            </h3>
            <p className="mb-12 text-lg leading-relaxed text-white/70">
              Whether you need a cutting-edge web application, innovative mobile
              app, or scalable backend infrastructure, I'm here to bring your
              vision to life with modern technology and exceptional design.
            </p>

            <div className="space-y-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400">
                      {contact.title}
                    </h4>
                    <p className="text-lg text-white/70">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative p-8 border bg-white/5 backdrop-blur-sm border-white/10 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-3 font-medium text-white/80">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 text-white transition-all duration-300 border bg-white/5 border-white/20 rounded-xl placeholder-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block mb-3 font-medium text-white/80">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 text-white transition-all duration-300 border bg-white/5 border-white/20 rounded-xl placeholder-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-3 font-medium text-white/80">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 pr-12 text-white transition-all duration-300 border appearance-none cursor-pointer bg-white/5 border-white/20 rounded-xl focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                    >
                      <option value="" className="bg-gray-900">
                        Select project type
                      </option>
                      <option value="web" className="bg-gray-900">
                        Web Application
                      </option>
                      <option value="mobile" className="bg-gray-900">
                        Mobile App
                      </option>
                      <option value="fullstack" className="bg-gray-900">
                        Full Stack Solution
                      </option>
                      <option value="consultation" className="bg-gray-900">
                        Technical Consultation
                      </option>
                      <option value="other" className="bg-gray-900">
                        Other
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-white/50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-3 font-medium text-white/80">
                    Project Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 text-white transition-all duration-300 border resize-none bg-white/5 border-white/20 rounded-xl placeholder-white/50 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                    placeholder="Describe your project requirements, goals, timeline, and any specific technologies you'd like to use..."
                  ></textarea>
                </div>

                {submitStatus === "success" && (
                  <div className="px-4 py-3 text-center text-green-400 border bg-green-500/10 border-green-500/20 rounded-xl">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="px-4 py-3 text-center text-red-400 border bg-red-500/10 border-red-500/20 rounded-xl">
                    ❌ Failed to send message. Please try again or contact me
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                      : "bg-gradient-to-r from-emerald-500 to-green-400 text-black hover:from-green-400 hover:to-emerald-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-b-2 border-gray-300 rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
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
