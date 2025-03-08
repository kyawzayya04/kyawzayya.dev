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
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
        setLoading(false);
      })
      .catch((err) => {
        alert("Oops! Something went wrong. Please try again.");
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20 px-5"
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col space-y-8">
        {/* Title */}
        <h1 className="[@media(max-width:375px)]:text-3xl [@media(max-width:375px)]:mb-3 text-4xl text-center font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {/* Get in Touch */}
          <div className="[@media(max-width:375px)]:p-5 p-8 border overflow-hidden border-blue-500 rounded-lg hover:-translate-y-1 hover:shadow-[2px_2px_8px_rgba(59,130,246,0.2)] transition ease-in">
            <h3 className="[@media(max-width:375px)]:text-xl text-2xl mb-5 font-semibold">
              Get in touch
            </h3>
            <p className="[@media(max-width:375px)]:xs-text text-sm text-gray-300/90 mb-7">
              I would love to hear and discuss how we can collaborate or assist
              you with anything you need!
            </p>
            {/* Contact Item */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-start items-center space-x-4">
                <div className="inline-block bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-[7px] rounded-md hover:from-blue-600/20 hover:to-cyan-500/20 transition ease-in">
                  <Phone size={20} className="text-blue-500" />
                </div>
                <p className="[@media(max-width:375px)]:xs-text text-sm text-gray-300/90">
                  +959 967 011 771
                </p>
              </div>
              <div className="flex justify-start items-center space-x-4">
                <div className="inline-block bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-[7px] rounded-md hover:from-blue-600/20 hover:to-cyan-500/20 transition ease-in">
                  <Mail size={20} className="text-blue-500" />
                </div>
                <p className="[@media(max-width:375px)]:xs-text text-sm text-gray-300/90">
                  kyawzayya.blem@gmail.com
                </p>
              </div>
              <div className="flex justify-start items-center space-x-4">
                <div className="inline-block bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-[7px] rounded-md hover:from-blue-600/20 hover:to-cyan-500/20 transition ease-in">
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <p className="[@media(max-width:375px)]:xs-text text-sm text-gray-300/90">
                  No.11, Site Pyoe Yay Padathar Street, Yankin, Yangon, Myanamr.
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
          {/* Contact Form */}
          <form
            action=""
            className="[@media(max-width:375px)]:p-5 flex flex-col space-y-5 p-8 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-lg hover:-translate-y-1 transition ease-in"
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
                className="[@media(max-width:375px)]:xs-text p-3 w-full rounded-full outline-none text-blue-600 font-medium caret-blue-500 placeholder-blue-500/60"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                // required
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="[@media(max-width:375px)]:xs-text peer p-3 w-full rounded-full outline-none text-blue-600 font-medium caret-blue-500 placeholder-blue-500/60"
              />
              {/* <p className="invisible peer-invalid:visible text-red-500 text-sm">
                Please provide a valid email address.
              </p> */}
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
                className="[@media(max-width:375px)]:xs-text block p-3 w-full rounded-3xl outline-none text-blue-600 caret-blue-500 placeholder-blue-500/60 font-medium scrollbar-hide"
              />
            </div>
            <div className="relative">
              {!loading && (
                <button
                  type="submit"
                  className="[@media(max-width:375px)]:xs-text w-full p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 active:translate-y-1 hover:shadow-[2px_2px_8px_rgba(255,255,255,0.2)] transition ease-in flex justify-center items-center space-x-3"
                >
                  <span>{loading ? "Sending" : "Send Message"}</span>
                  {loading && (
                    <svg
                      aria-hidden="true"
                      className="[@media(max-width:375px)]:w-4 [@media(max-width:375px)]:h-4 w-6 h-6 text-gray-200 animate-spin fill-blue-900"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  )}
                </button>
              )}
              {loading && (
                <a className="[@media(max-width:375px)]:xs-text w-full p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 active:translate-y-1 hover:shadow-[2px_2px_8px_rgba(255,255,255,0.2)] transition ease-in flex justify-center items-center space-x-3 select-none cursor-pointer">
                  <span>{loading ? "Sending" : "Send Message"}</span>
                  {loading && (
                    <svg
                      aria-hidden="true"
                      className="[@media(max-width:375px)]:w-4 [@media(max-width:375px)]:h-4 w-6 h-6 text-gray-200 animate-spin fill-blue-900"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  )}
                </a>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
