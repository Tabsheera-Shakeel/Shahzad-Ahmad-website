"use client"; 
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Digital Marketing Training",
    description: "Learn the ins and outs of digital marketing through tailored training sessions. From SEO and social media to email campaigns and analytics, I’ll equip you with the skills to excel. Explore Training Programs",
    image: "https://shahzadmirza.com/wp-content/uploads/2023/08/digital-marketing-training-2.png",
  },
  {
    title: "Business Coaching",
    description: "Ready to take your business to the next level? My business coaching sessions provide personalized strategies to enhance your brand’s online presence and drive results. Book a Coaching Session",
    image: "https://shahzadmirza.com/wp-content/uploads/2023/08/business-coaching-2.png",
  },
  {
    title: "Ecommerce Business Launching",
    description: "Are you venturing into the world of ecommerce? Let me be your guide. From setting up your online store to crafting winning marketing strategies, I’ll ensure your ecommerce business takes off successfully.",
    image: "https://shahzadmirza.com/wp-content/uploads/2023/08/ecommerce-business-launching-1.png",
  },
  {
    title: "Web Development Consultancy",
    description: "Your website is your digital storefront. Get expert advice on optimizing user experience, mobile responsiveness, and overall design to leave a lasting impression on your visitors.",
    image: "https://shahzadmirza.com/wp-content/uploads/2023/08/web-development-consultancy-1.png",
  },
  {
    title: "Paid Advertising Campaigns",
    description: "Maximize your reach with targeted paid advertising campaigns. From creating compelling ad copy to optimizing bidding strategies, I’ll ensure your investment leads to meaningful results.",
    image: "https://shahzadmirza.com/wp-content/uploads/2023/08/paid-advertising-campaigns-1.png",
  },
  {
    title: "Influencer Marketing Consultancy",
    description: "Unlock the potential of influencer marketing. I’ll help you identify the right influencers for your niche and guide you through successful collaborations that drive engagement and brand loyalty.",
    image: "https://shahzadmirza.com/wp-content/uploads/2023/08/influencer-marketing-1.png",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
     <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 text-center mb-4">
  MY SPECIALITIES
</h1>
<p className="text-2xl md:text-3xl font-semibold text-white text-center">
  I HELP BUILD ONLINE BUSINESSES
</p>

      <div className="space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            
            <div className="w-full lg:w-1/2">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

          
            <div className="w-full lg:w-1/2 px-6 lg:px-12 mt-6 lg:mt-0">
              <h2 className="text-3xl font-bold text-orange-400 mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
