/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import profile1 from "../assets/profile1.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center text-white px-10"
    >
      <div className="text-center">
        <div className="lg:flex lg:max-w-6xl justify-center items-center mx-auto gap-10 lg:gap-20">
          {/* profile image */}
          <img
            src={profile1}
            className="max-w-[250px] md:max-w-[300px] h-auto object-contain mx-auto mb-10 lg:mb-0 custom-border border-[2.3px] border-blue-600"
            alt="profile_img"
          />

          {/* description */}
          <div>
            <h1 className="text-4xl lg:text-6xl lg:text-left font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent lg:pr-4 pb-1 mb-6">
              Hi, I'm Kyaw Zay Ya.
            </h1>
            <p className="max-w-sm md:max-w-xl text-sm md:text-lg mx-auto lg:text-left font-light mb-10">
              I'm a junior developer who is passionate about creating innovative
              web and mobile applications. My goal is to build impactful
              platforms that enable user collaboration and help them achieve
              success with high-end performance.
            </p>
            <div className="flex justify-center lg:justify-start items-center text-gray-200 space-x-3 lg:space-x-4">
              <Link
                to={`./project`}
                className="px-4 py-3 rounded-lg font-medium transition bg-gradient-to-r from-blue-600 to-cyan-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ease-in"
              >
                View Projects
              </Link>
              <Link
                to={`./contact`}
                className="px-4 py-3 rounded-lg font-medium transition border border-blue-600 bg-transparent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ease-in"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
