import {
  Facebook,
  Github,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((result) => {
        alert("Message has sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        console.log(result);
      })
      .catch((err) => {
        alert("Oops! Something went wrong. Please try again.");
        console.log(err);
      });
    console.log("EmailJS User ID:", import.meta.env.VITE_EMAILJS_USER_ID);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20 px-5"
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col space-y-8">
        {/* Title */}
        <h1 className="text-4xl text-center font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {/* Get in Touch */}
          <div>
            <div className="p-8 border overflow-hidden border-blue-500 rounded-lg hover:-translate-y-1 hover:shadow-[2px_2px_8px_rgba(59,130,246,0.2)] transition ease-in">
              <h3 className="text-2xl mb-5 font-semibold">Get in touch</h3>
              <p className="text-sm text-gray-300/90 mb-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              {/* Contact Item */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-start items-center space-x-4">
                  <div className="inline-block bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-[7px] rounded-md hover:from-blue-600/20 hover:to-cyan-500/20 transition ease-in">
                    <Phone size={20} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-300/90">+959 967 011 771</p>
                </div>
                <div className="flex justify-start items-center space-x-4">
                  <div className="inline-block bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-[7px] rounded-md hover:from-blue-600/20 hover:to-cyan-500/20 transition ease-in">
                    <Mail size={20} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-300/90">
                    kyawzayya.blem@gmail.com
                  </p>
                </div>
                <div className="flex justify-start items-center space-x-4">
                  <div className="inline-block bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-[7px] rounded-md hover:from-blue-600/20 hover:to-cyan-500/20 transition ease-in">
                    <MapPin size={20} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-300/90">
                    No.11, Site Pyoe Yay Padathar Street, Yankin, Yangon,
                    Myanamr.
                  </p>
                </div>
              </div>
              {/* Social Item */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/kyawzayya04"
                  target="_blank"
                  className="bg-gray-200 p-2 rounded-full"
                >
                  <Github className="text-blue-500 hover:rotate-[360deg] transition duration-300 ease-in" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kyaw-zay-ya-125b74256/"
                  target="_blank"
                  className="bg-gray-200 p-2 rounded-full"
                >
                  <LinkedinIcon className="text-blue-500 hover:rotate-[360deg] transition duration-300 ease-in" />
                </a>
                <a
                  href="https://www.facebook.com/share/1KCUR2B7Jp/"
                  target="_blank"
                  className="bg-gray-200 p-2 rounded-full"
                >
                  <Facebook className="text-blue-500 hover:rotate-[360deg] transition duration-300 ease-in" />
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form
            action=""
            className="flex flex-col space-y-5 p-8 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-lg hover:-translate-y-1 transition ease-in"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="p-3 w-full rounded-full outline-none text-blue-600 font-medium caret-blue-500 placeholder-blue-500/60"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="p-3 w-full rounded-full outline-none text-blue-600 font-medium caret-blue-500 placeholder-blue-500/60"
              />
            </div>
            <div className="relative">
              <textarea
                rows={5}
                type="message"
                name="message"
                id="message"
                required
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="p-3 w-full rounded-3xl scrollbar-hide outline-none text-blue-600 caret-blue-500 placeholder-blue-500/60 font-medium"
              />
            </div>
            <div className="relative">
              <button
                type="submit"
                className="w-full p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 active:translate-y-1 hover:shadow-[2px_2px_8px_rgba(255,255,255,0.2)] transition ease-in"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
