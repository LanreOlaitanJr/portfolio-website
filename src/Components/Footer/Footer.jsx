import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Footer" className="w-full">
      <div className="mx-auto max-w-6xl bg-gradient-to-r from-[#2c3350] via-[#374674] to-[#465697] p-8 md:p-12 rounded-2xl text-white shadow-lg overflow-hidden animate-slideUp">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="md:w-2/5">
            <h2 className="text-3xl md:text-5xl font-bold">Let's build something together</h2>
            <p className="mt-3 text-sm md:text-base text-slate-200">
              I'm open to freelance opportunities and collaborations. Reach out and let's make great products.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:olanrewajuadetona@gmail.com"
                aria-label="Email"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-full transition transform hover:-translate-y-1 btn-glow"
              >
                <MdOutlineEmail size={18} />
                <span className="text-sm">Email Me</span>
              </a>

              <a
                href="https://www.linkedin.com/in/olanrewaju-adetona-654462318/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-full transition transform hover:-translate-y-1 btn-glow"
              >
                <CiLinkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-col md:flex-row gap-3">
              <a
                href="https://github.com/LanreOlaitanJr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 py-2 px-4 rounded-2xl transition hover:scale-105 btn-glow"
              >
                <FaGithub size={20} />
                <span className="text-sm">github.com/LanreOlaitanJr</span>
              </a>
            </div>

            <p className="text-xs text-slate-200 mt-4 md:mt-0">© {new Date().getFullYear()} Olanrewaju Adetona — Web Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
