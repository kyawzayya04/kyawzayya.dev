import library from "../assets/library.png";
import foodygoody from "../assets/foodygoody.png";

export default function Projects() {
  const projects = [
    {
      img: library,
      url: "https://library-app-e8fce.web.app/",
      title: "Blog Channel",
      description: `An amazing place where you can store and manage your blogs.`,
      categories: ["React", "Tailwind CSS", "FireStore"],
    },
    {
      img: foodygoody,
      url: "https://kyawzayya04.github.io/Foody_Goody_Asia/",
      title: "Foody Goody",
      description: `Explore restaurants and scan your menu to fill your belly in time.`,
      categories: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20 px-5"
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col space-y-8">
        {/* title */}
        <h1 className="text-4xl text-center font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {!!projects &&
            projects.map((project, key) => (
              <div
                key={key}
                className="flex flex-col justify-between rounded-xl border-blue-500 border p-8 hover:-translate-y-1 hover:shadow-[2px_2px_8px_rgba(59,130,246,0.2)] transition ease-in"
              >
                <div className="overflow-hidden h-[200px] rounded-lg mb-5">
                  <img
                    src={project.img}
                    alt="library_app"
                    className="w-full h-[200px] object-cover border border-white/30 rounded-lg hover:scale-105 transition ease-in"
                  />
                </div>
                <h3 className="text-xl bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent font-bold mb-4">
                  {project.title}
                </h3>
                <p className="mb-3 text-gray-300/90">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.categories.map((category, key) => (
                    <span
                      key={key}
                      className="inline-block bg-gradient-to-r from-blue-600/10 to-cyan-400/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:from-blue-600/20 hover:to-cyan-400/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-default"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div></div>
                  <a
                    href={project.url}
                    target="_blank"
                    className="px-6 py-2 bg-gradient-to-r from-blue-600/80 to-cyan-500/80 rounded-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition ease-in"
                  >
                    View <span className="ml-2"> &#8599;</span>
                  </a>
                </div>
              </div>
            ))}
        </div>
        <p className="text-gray-400 text-center text-sm">
          More projects will be coming soon...
        </p>
      </div>
    </section>
  );
}
