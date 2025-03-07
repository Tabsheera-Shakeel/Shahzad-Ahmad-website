import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Side - Profession Details */}
      <div className="lg:w-1/2 space-y-8 text-center lg:text-left lg:pr-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide leading-tight text-orange-400">
          About Me
        </h1>
        <p className="text-lg md:text-xl font-semibold text-gray-300">
          You should meet me first
        </p>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          <span className="text-orange-400 font-bold">Shahzad Mirza</span> is a <span className="text-orange-400 font-bold">digital marketing trainer</span> and <span className="text-orange-400 font-bold">business coach</span> from Lahore, Pakistan, with <span className="text-orange-400 font-bold">23+ years of experience</span>. His journey began in <span className="text-orange-400 font-bold">2000</span> with his first computer, leading him to master <span className="text-orange-400 font-bold">web design and development</span> by <span className="text-orange-400 font-bold">2002</span>.
        </p>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          In <span className="text-orange-400 font-bold">2012</span>, he founded <span className="text-orange-400 font-bold">Designs Valley</span>, which grew into a team of <span className="text-orange-400 font-bold">46 professionals</span>, offering services in <span className="text-orange-400 font-bold">web development and SEO</span>. He also co-founded <span className="text-orange-400 font-bold">Next Age Solutions</span>, a top <span className="text-orange-400 font-bold">digital marketing training center</span> in Lahore.
        </p>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          Now, his focus is on <span className="text-orange-400 font-bold">mentoring local talent</span>, helping aspiring professionals build careers in <span className="text-orange-400 font-bold">web development</span> and <span className="text-orange-400 font-bold">digital marketing</span>.
        </p>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          With a passion for <span className="text-orange-400 font-bold">growth and innovation</span>, Shahzad Mirza continues to shape the digital landscape as a <span className="text-orange-400 font-bold">trainer, leader, and entrepreneur</span>.
        </p>
      </div>

      {/* Right Side - Image Grid with Spacing */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4 mt-10 lg:mt-0 w-full max-w-2xl">
        <div className="relative w-full h-36 md:h-44">
          <Image src="/brown.jpeg" alt="Image 1" fill className="object-cover rounded-lg" />
        </div>
        <div className="relative w-full h-36 md:h-44">
          <Image src="/white.jpg" alt="Image 2" fill className="object-cover rounded-lg" />
        </div>
        <div className="relative w-full h-44 md:h-52 col-span-2">
          <Image src="/prod.jpg" alt="Final Image" fill className="object-cover rounded-lg" />
        </div>
        <div className="relative w-full h-36 md:h-44">
          <Image src="/grind.jpg" alt="Image 1" fill className="object-cover rounded-lg" />
        </div>
        <div className="relative w-full h-36 md:h-44">
          <Image src="/ahmad-photo2.jpg" alt="Image 2" fill className="object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;