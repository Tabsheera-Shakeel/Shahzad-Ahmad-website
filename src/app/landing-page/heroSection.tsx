"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-black overflow-hidden px-6 lg:px-0 min-h-screen">
      {/* Animated Background Blob */}
      <div
        className={`absolute bottom-16 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-orange-500 blur-[120px] transition-all duration-700 ${
          flash ? "opacity-80 scale-125" : "opacity-50 scale-100"
        }`}
      ></div>

      {/* Header (Centered on all screens) */}
      <div className="relative -top-4 flex flex-col items-center text-white text-center space-y-5 pt-24 mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide leading-tight">
          Shahzad Ahmad Mirza
        </h1>
        <p className="text-lg md:text-xl font-medium text-orange-400">
          Digital Marketing Trainer & Business Coach
        </p>
      </div>

      {/* My Blogs Button (Visible only on small screens) */}
      <div className="relative sm:hidden mt-3 z-50 flex items-center gap-2 cursor-pointer">
        <Link
          href="https://shahzadmirza.com/blog/"
          className="text-white font-medium text-lg flex items-center gap-2 hover:text-orange-400 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>My Blogs</span>
        </Link>
      </div>

      {/* Profile Image */}
      <div className="relative w-[220px] md:w-[280px] lg:w-[320px] h-auto mt-6">
        <Image
          src="/ahmad1.png"
          alt="Shahzad Ahmad Mirza"
          width={300}
          height={250}
          className="w-full h-auto object-cover rounded-b-none transform hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Experience and Expertise Cards */}
      <div className="absolute -bottom-12 sm:bottom-16 w-full flex justify-between sm:mt-24 px-6 md:px-16 lg:px-32">
        {/* Experience Card */}
        <div className="bg-white text-blue-900 p-6 md:p-8 rounded-lg shadow-2xl w-72 md:w-80 text-center transition-transform duration-500 hover:scale-105 hover:-rotate-3 -rotate-3">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-orange-400 pb-3 mb-4">
            Experience
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            5+ years in Digital Marketing, specializing in SEO, Social Media Strategy, and Brand Growth.
          </p>
        </div>

        {/* Expertise Card */}
        <div className="bg-white text-blue-900 p-6 md:p-8 rounded-lg shadow-2xl w-72 md:w-80 text-center transition-transform duration-500 hover:scale-105 hover:rotate-3 rotate-3">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-orange-400 pb-3 mb-4">
            Expertise
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            SEO & PPC  
            Social Media Ads  
            Email Marketing  
            Business Growth Strategies  
            Personal Branding  
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;