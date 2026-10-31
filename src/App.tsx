import Topbar from "./components/Topbar";
import { FileUser, MoveRight, Mail } from "lucide-react";
import GitHubActivity from "./components/GitHubActivity";
import { useTheme } from "./components/useTheme";
import type { IconType } from "react-icons";
import {
  FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPhp, FaMobileAlt, FaServer, FaGitAlt, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiFirebase, SiDart, SiVite, SiPwa,
  SiExpress, SiMysql, SiCloudinary, SiFlutter, SiPhpmyadmin,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

type Level = "Learning" | "Familiar" | "Comfortable";

type Skill = { name: string; Icon?: IconType; color?: string; level?: Level };
type SkillGroup = { title: string; items: Skill[] };

const levelStyles: Record<Level, string> = {
  Learning: "bg-amber-400",
  Familiar: "bg-sky-400",
  Comfortable: "bg-emerald-400",
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", level: "Familiar" },
      { name: "JavaScript", Icon: FaJs, color: "#F7DF1E", level: "Familiar" },
      { name: "HTML", Icon: FaHtml5, color: "#E34F26", level: "Comfortable" },
      { name: "CSS", Icon: FaCss3Alt, color: "#1572B6", level: "Comfortable" },
      { name: "PHP", Icon: FaPhp, color: "#777BB4", level: "Learning" },
      { name: "Dart", Icon: SiDart, color: "#0175C2", level: "Learning" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", Icon: FaReact, color: "#61DAFB", level: "Familiar" },
      { name: "Vite", Icon: SiVite, color: "#646CFF", level: "Familiar" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", level: "Familiar" },
      { name: "Progressive Web Apps (PWA)", Icon: SiPwa, color: "#5A0FC8", level: "Learning" },
      { name: "Responsive Design", Icon: FaMobileAlt, level: "Familiar" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", Icon: FaNodeJs, color: "#5FA04E", level: "Familiar" },
      { name: "Express", Icon: SiExpress, level: "Familiar" },
      { name: "REST APIs", Icon: TbApi, level: "Familiar" },
      { name: "Firebase Cloud Functions", Icon: SiFirebase, color: "#FFCA28", level: "Learning" },
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      { name: "Firebase Authentication", Icon: SiFirebase, color: "#FFCA28", level: "Familiar" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1", level: "Familiar" },
      { name: "Cloud Firestore", Icon: SiFirebase, color: "#FFCA28", level: "Familiar" },
      { name: "Cloudinary", Icon: SiCloudinary, color: "#3448C5", level: "Familiar" },
      { name: "Hostinger", Icon: FaServer, level: "Familiar" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", Icon: SiFlutter, color: "#54C5F8", level: "Learning" },
      { name: "Dart", Icon: SiDart, color: "#0175C2", level: "Learning" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git/GitHub", Icon: FaGitAlt, color: "#F05032", level: "Familiar" },
      { name: "VS Code", Icon: VscVscode, color: "#007ACC", level: "Comfortable" },
      { name: "Figma", Icon: FaFigma, color: "#F24E1E", level: "Comfortable" },
      { name: "phpMyAdmin", Icon: SiPhpmyadmin, color: "#6C78AF", level: "Familiar" },

    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Flexible and Adaptable" },
      { name: "Quick Learner" },
      { name: "Problem Solving" },
      { name: "Teamwork and Collaboration" },
      { name: "Time Management" },
      { name: "Attention to Detail" },
    ],
  },
  {
    title: "Spoken Languages",
    items: [{ name: "Filipino" }, { name: "English" }],
  },
];

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Topbar theme={theme} toggle={toggle} />
      <div className="h-auto p-0 sm:p-8 border border-line mx-2 lg:mx-0">
        {/* TOP NAME */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-10 gap-6 md:gap-10 text-text-body">
          <div>
            <img
              src="profile.jpg"
              className="rounded-full border border-slate-300 aspect-square object-cover h-40 sm:h-52 md:h-72"
              alt="user"
            />
          </div>

          <div className="space-y-2 flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-3xl md:text-4xl lg:text-5xl font-roboto font-bold">
              Hi, I'm Casey.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#56D364]">
              Aspiring Full-Stack Developer.
            </p>
            <p className="text-base lg:text-xl">
              4th-year BSIT student passionate about building modern,
              <br className="hidden md:block" /> responsive and functional web
              experiences.
            </p>

            <div className="mt-6 lg:mt-10 flex flex-wrap justify-center md:justify-start items-center gap-3">
              <button className="hover:cursor-pointer inline-flex items-center gap-2 text-base lg:text-lg py-1 px-3 bg-heading border border-heading font-normal rounded-full font-google-sans text-page">
                Get in touch
                <MoveRight size={19} />
              </button>

              <a
                href="/resume.pdf"
                download="Casey-Resume.pdf"
                className="group relative hover:bg-body hover:cursor-pointer inline-flex items-center gap-2 text-base lg:text-lg py-1 px-3 bg-transparent border border-text-body font-google-sans font-normal rounded-full"
              >
                <FileUser size={19} />
                Resume/CV
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1 text-sm text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
                  Download Resume
                </span>
              </a>

              <div className="flex w-full md:w-auto justify-center md:justify-start gap-3">
                <a
                  href="https://github.com/Kakaiii21"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="group relative hover:bg-body inline-flex items-center justify-center h-9 w-9 rounded-full border border-text-body hover:cursor-pointer"
                >
                  <FaGithub size={19} />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1 text-sm text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
                    View GitHub
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/casey-undefined-396b62446/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="group relative hover:bg-body inline-flex items-center justify-center h-9 w-9 rounded-full border border-text-body hover:cursor-pointer"
                >
                  <FaLinkedin size={19} />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1 text-sm text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
                    View LinkedIn
                  </span>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=caseypdellamas@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                  className="group relative hover:bg-body inline-flex items-center justify-center h-9 w-9 rounded-full border border-text-body hover:cursor-pointer"
                >
                  <Mail size={19} />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1 text-sm text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
                    Send Email
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Activity */}
        <div className="mt-10 mx-2 lg:mt-20 lg:mx-16 font-roboto">
          <p className="text-body">Featured</p>
          <p className="text-text-body lg:text-2xl font-google-sans font-bold">
            GitHub Activity
          </p>
          <GitHubActivity theme={theme} />
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full h-full border border-line py-8 lg:py-16 flex mx-2 lg:mx-0">
        <div className="mx-2 mt-5 lg:mx-24 font-roboto">
          <p className="text-body">About</p>
          <p className="text-text-body lg:text-2xl font-google-sans font-bold">About Me</p>
          <div className="mt-6 space-y-10">
            <p>I'm currently a 4th-year Bachelor of Science in Information Technology student who is interested in exploring the world of web development.</p>
            <p>I enjoy learning how websites and web applications work, from creating user-friendly interfaces to understanding the logic and systems behind them. I'm currently developing my skills in both frontend and backend technologies and looking forward to discovering more along the way.</p>
            <p>As someone who is still beginning my journey in the field, I believe that every project and learning opportunity is a chance to grow. I'm open to learning new technologies, gaining hands-on experience, and improving my abilities as I work toward becoming a well-rounded web developer.</p>
          </div>
        </div>
      </div>

      {/* Skills And Tools Section */}
      <div className="w-full h-full border border-line py-8 lg:py-16 flex mx-2 lg:mx-0">
        <div className="flex-1 mx-2 mt-5 lg:mx-24 font-roboto">
          <p className="text-body">Skills</p>
          <p className="text-text-body lg:text-2xl font-google-sans font-bold">
            Skills & Tools
          </p>

          <p className="mt-2 text-body">
            I'm still growing as a developer. These are the tools I've used in my
            projects, marked by how confident I am with each.
          </p>

          {/* Legend */}
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-body">
            {(Object.keys(levelStyles) as Level[]).map((level) => (
              <span key={level} className="inline-flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${levelStyles[level]}`} />
                {level}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-8">
            {skillGroups.map(({ title, items }) => (
              <div key={title}>
                <p className="text-body mb-3">{title}</p>

                <div className="flex flex-wrap gap-3">
                  {items.map(({ name, Icon, color, level }) => (
                    <div
                      key={name}
                      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-text-body transition-transform duration-200 hover:-translate-y-1"
                    >
                      {Icon && <Icon size={20} color={color} />}
                      <span className="font-google-sans">{name}</span>
                      {level && (
                        <>
                          <span
                            aria-hidden="true"
                            className={`h-2 w-2 rounded-full ${levelStyles[level]}`}
                          />
                          <span className="sr-only">{level}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;