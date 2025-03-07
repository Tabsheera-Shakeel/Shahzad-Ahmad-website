"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const reasons = [
  {
    title: "Expertise",
    description:
      "With a proven track record in digital marketing and a history of successful client outcomes, I bring real-world experience to your learning journey.",
  },
  {
    title: "Personalized Approach",
    description:
      "Every business is unique, and my coaching and training are tailored to your specific goals and challenges.",
  },
  {
    title: "Support",
    description:
      "I’m here to guide you not only during our sessions but also as you implement strategies. Your success is my priority.",
  },
];

const WhyChooseMe = () => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-black overflow-hidden px-6 lg:px-0 min-h-screen">
    
      <div
        className={`absolute bottom-16 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-orange-500 blur-[120px] transition-all duration-700 ${
          flash ? "opacity-80 scale-125" : "opacity-50 scale-100"
        }`}
      ></div>

      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-orange-400 text-center mt-12 mb-10"
      >
        WHY CHOOSE ME?
      </motion.h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotateY: index % 2 === 0 ? 12 : -12,
              rotateX: 8,
              transition: { duration: 0.3 },
            }}
            className="bg-gray-900 text-white p-6 h-72 w-80 rounded-2xl shadow-lg text-center border-2 border-orange-400 cursor-pointer transform transition-all"
          >
            <h2 className="text-2xl font-bold text-orange-400 mb-4">{reason.title}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseMe;
