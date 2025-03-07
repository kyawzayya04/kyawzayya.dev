import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-0 left-0 z-10">
      {/* Desktop View */}
      <div className="z-10 bg-gray-950/30 backdrop-blur-xl text-white">
        <div className="flex max-w-[90%] md:max-w-[80%] mx-auto justify-between items-center p-5">
          {/* title */}
          <h1 className="text-2xl text-white font-bold lowercase">
            Kyaw Zay Ya
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              .Dev
            </span>
          </h1>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 tracking-wide">
            <Link
              to="/"
              onClick={() => scrollToTop()}
              className="hover:text-blue-400 hover:font-semibold hover:-translate-y-[2px] transition"
            >
              Home
            </Link>
            <Link
              to="/project"
              className="hover:text-blue-400 hover:font-semibold hover:-translate-y-[2px] transition"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-400 hover:font-semibold hover:-translate-y-[2px] transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-400 hover:font-semibold hover:-translate-y-[2px] transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div
        className={`z-10 w-full bg-gray-950/30 backdrop-blur-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="flex flex-col space-y-4 p-5 text-white">
          <Link
            to="/"
            className="hover:text-blue-600"
            onClick={() => {
              setIsOpen(false);
              scrollToTop();
            }}
          >
            Home
          </Link>
          <Link
            to="/project"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
