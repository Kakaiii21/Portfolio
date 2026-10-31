import Topbar from "./components/Topbar";
import { FileUser, MoveRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <Topbar />
      <main className="min-h-screen p-4 sm:p-8 border border-line">
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
      </main>
    </>
  );
}

export default App;