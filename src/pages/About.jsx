import axra from "../assets/axra.png";
import beautydiary from "../assets/beautydairy.png";
import vjun from "../assets/vjun.png";

export default function About() {
  const frontendSkills = [
    "React",
    "React Native",
    "Tailwind CSS",
    "TypeScript",
    "NEXT JS",
  ];

  const backendSkills = [
    "Node JS",
    "Express JS",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "PHP",
    "Laravel",
  ];

  const softSkills = [
    {
      title: "Communication",
      description: `Being able to convey information clearly and listen to others.`,
    },
    {
      title: "Teamwork",
      description: `Collaborating well with others to achieve common goals.`,
    },
    {
      title: "Problem-Solving",
      description: `Being able to think critically and find solutions to challenges.`,
    },
    {
      title: "Adaptability",
      description: `Adjusting to new situations or changes in a work environment.`,
    },
    {
      title: "Time Management",
      description: `Managing time effectively to prioritize tasks and meet deadlines.`,
    },
  ];

  const educations = [
    {
      title: "Physics Specialized Major",
      school: "Dagon University ( 2020 )",
    },
    {
      title: "Passed 10th Standard",
      school: "B.E.H.S ( 2 ) Yankin ( 2017 - 2018 )",
    },
  ];

  const workExperiences = [
    {
      img: axra,
      url: `https://www.axratech.com/`,
      title: "Project Team Lead at AXRA TECH ( 2024 - Present )",
      description: `Testing software and coordinating projects between developers and clients to ensure timely completion.`,
      exp: `1 Year +`,
    },
    {
      img: vjun,
      url: `https://www.facebook.com/share/1FL3j3dLbe/`,
      title: "Application Admin at V.Jun Myanmar ( 2023 - 2024 )",
      description: `Managing V.Jun application dashboard and collaborating with developer team to proceed application development.`,
      exp: `6 Months`,
    },
    {
      img: beautydiary,
      url: `https://www.beautydiary.shop/`,
      title: "Ecommerce Webite Assistant at Beauty Diary ( 2023 - 2023 )",
      description: `Managing Beauty Diary website dashboard and planning content strategy to improve sales on website.`,
      exp: `4 Months`,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20 px-5"
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col space-y-8">
        {/* title */}
        <h1 className="[@media(max-width:375px)]:text-3xl [@media(max-width:375px)]:mb-3 text-4xl text-center font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h1>

        {/* tech-stacks */}
        <div className="[@media(max-width:375px)]:p-5 rounded-xl border-blue-500 border p-8 hover:translate-y-1 hover:shadow-[2px_2px_8px_rgba(59,130,246,0.2)] transition-all ease-in">
          <p className="[@media(max-width:375px)]:xs-text text-gray-300 mb-5 md:mb-0">
            An enthusiastic full-stack developer passionate about crafting
            innovative and remarkable projects through :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* frontend */}
            <div className="[@media(max-width:375px)]:p-0 rounded-xl p-6 hover:-translate-y-1 transition-all ease-in">
              <h3 className="[@media(max-width:375px)]:text-lg text-xl text-white font-bold mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {!!frontendSkills &&
                  frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="[@media(max-width:375px)]:xs-text bg-gradient-to-r from-blue-600/10 to-cyan-400/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:from-blue-600/20 hover:to-cyan-400/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
            {/* backend */}
            <div className="[@media(max-width:375px)]:p-0 rounded-xl p-6 hover:-translate-y-1 transition-all ease-in">
              <h3 className="[@media(max-width:375px)]:text-lg text-xl text-white font-bold mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {!!backendSkills &&
                  backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="[@media(max-width:375px)]:xs-text bg-gradient-to-r from-blue-600/10 to-cyan-400/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:from-blue-600/20 hover:to-cyan-400/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {/* Education */}
          <div className="space-y-7">
            {/* Schools */}
            <div className="[@media(max-width:375px)]:p-5 p-6 rounded-xl border-blue-500 border hover:-translate-y-1 hover:shadow-[2px_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="[@media(max-width:375px)]:text-lg text-xl font-bold [@media(max-width:375px)]:mb-5 mb-8">
                🏫 Education
              </h3>
              {!!educations &&
                educations.map((edu, key) => (
                  <ul key={key} className="list-disc list-inside text-gray-300">
                    <li className="[@media(max-width:375px)]:my-3 my-5 xs-text">
                      <strong className="bg-gradient-to-r from-blue-600/10 to-cyan-400/10 px-3 py-1 rounded-lg leading-8">
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                          {edu.title}
                        </span>
                      </strong>{" "}
                      -<span className="font-semibold"> {edu.school}</span>
                    </li>
                  </ul>
                ))}
            </div>
            {/* Soft Skills */}
            <div className="[@media(max-width:375px)]:p-5 p-6 rounded-xl border-blue-500 border hover:-translate-y-1 hover:shadow-[2px_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="[@media(max-width:375px)]:text-lg [@media(max-width:375px)]:mb-5 text-xl font-bold mb-8">
                💡 Soft Skills
              </h3>
              {!!softSkills &&
                softSkills.map((skill, key) => (
                  <ul
                    key={key}
                    className="[@media(max-width:375px)]:xs-text list-disc list-inside text-gray-300"
                  >
                    <li className="[@media(max-width:375px)]:my-3 my-5">
                      <strong className="bg-gradient-to-r from-blue-600/10 to-cyan-400/10 px-3 py-1 rounded-lg leading-8">
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                          {skill.title}
                        </span>
                      </strong>{" "}
                      :
                      <span className="font-semibold">
                        {" "}
                        {skill.description}
                      </span>
                    </li>
                  </ul>
                ))}
            </div>
          </div>
          {/* Work Experiences */}
          <div>
            <div className="[@media(max-width:375px)]:p-5 p-6 rounded-xl border-blue-500 border hover:-translate-y-1 hover:shadow-[2px_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="[@media(max-width:375px)]:text-lg [@media(max-width:375px)]:mb-5 text-xl font-bold mb-8">
                💼 Work Experiences
              </h3>
              <div className="flex flex-col space-y-4">
                {/* AXRA Tech */}
                {!!workExperiences &&
                  workExperiences.map((work, key) => (
                    <div
                      key={key}
                      className="bg-gradient-to-r from-blue-600/10 to-cyan-400/10 px-4 py-2 rounded-lg hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] border border-white/10"
                    >
                      <div className="flex justify-center items-center space-x-3 py-2 mb-2">
                        <img
                          src={work.img}
                          alt="company_logo"
                          className="[@media(max-width:375px)]:w-[60px] w-[70px] h-auto rounded-lg"
                        />
                        <div className="w-full">
                          <h4 className="[@media(max-width:375px)]:text-[13px] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold">
                            <a href={work.url} target="_blank">
                              {work.title}
                            </a>
                          </h4>
                          <span className="inline-block [@media(max-width:375px)]:text-[8px] text-[10px] md:text-[12px] font-bold bg-gradient-to-r from-blue-600/70 to-cyan-500/70 px-2 py-1 rounded-full mt-2">
                            Duration :{" "}
                            <span className="font-light">{work.exp}</span>
                          </span>
                        </div>
                      </div>
                      <p className="[@media(max-width:375px)]:xs-text text-gray-300 text-[14px] mb-1">
                        {work.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
