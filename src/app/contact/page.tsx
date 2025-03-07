"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "your_user_id" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form after sending
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });
  };

  return (
    <section className="bg-gradient-to-r from-blue-900 to-black text-white py-16 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full bg-gray-800 p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-10">Contact Me</h2>

      
        {isSent && (
          <div className="bg-green-500 text-white p-4 text-center rounded-lg mb-6">
            🎉 Message Sent Successfully! I'll get back to you soon.
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-orange-400 text-center mb-4">Send a Message</h3>
            <div>
              <label className="block text-lg mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-3 rounded-md"
            >
              Send Message
            </button>
          </form>

          {/* Map Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-orange-400 text-center mb-4">Find Me</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13621.869456658283!2d74.28911204999999!3d31.4812934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d938cd88a9%3A0xa1630a94f3ed1b6b!2sAllama%20Iqbal%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1695476827649"
              width="100%"
              height="350"
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
