import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiSass, SiTypescript } from "react-icons/si";
import gomycode from "../../assets/go_my_code_logo.jpg";
import springcore from "../../assets/springcoreafrica_logo.jpg";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold animate-slideUp">Experience</h1>
      <div className="flex flex-wrap items-center justify-between gap-8">
        <div className="flex flex-wrap md:w-1/2 gap-6 md:p-12 py-10 justify-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#E34F26] transition-all duration-300 cursor-pointer animate-scaleIn">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#1572B6] transition-all duration-300 cursor-pointer animate-scaleIn">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#61DAFB] transition-all duration-300 cursor-pointer animate-scaleIn">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#F7DF1E] transition-all duration-300 cursor-pointer animate-scaleIn">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#F24E1E] transition-all duration-300 cursor-pointer animate-scaleIn">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#47A248] transition-all duration-300 cursor-pointer animate-scaleIn">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#3C873A] transition-all duration-300 cursor-pointer animate-scaleIn">
            <FaNodeJs color="#3C873A" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#06B6D4] transition-all duration-300 cursor-pointer animate-scaleIn">
            <SiTailwindcss color="#06B6D4" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#CC6699] transition-all duration-300 cursor-pointer animate-scaleIn">
            <SiSass color="#CC6699" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#3178C6] transition-all duration-300 cursor-pointer animate-scaleIn">
            <SiTypescript color="#3178C6" size={50} />
          </span>
        </div>
        <div className="md:w-1/2">
          <div className="flex gap-6 bg-slate-950 bg-opacity-35 mt-4 rounded-lg p-4 items-center animate-slideUp hover:bg-opacity-60 transition-all duration-300">
            <img src={gomycode} alt="Gomycode" className="w-16 h-16 object-contain rounded-md" />
            <span className="text-white">
              <h2 className="leading-tight">Instructor — Gomycode</h2>
              <p className="text-sm leading-tight font-thin">Jan 2022 - Aug 2023</p>
              <ul className="text-sm p-2">
                <li>- Taught frontend fundamentals and mentored students</li>
                <li>- Built curriculum and workshops</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-6 bg-slate-950 bg-opacity-35 mt-4 rounded-lg  p-4 items-center animate-slideUp hover:bg-opacity-60 transition-all duration-300" style={{animationDelay: '0.08s'}}>
            <img src={springcore} alt="Springcore Africa" className="w-16 h-16 object-contain rounded-md" />
            <span className="text-white">
              <h2 className="leading-tight">Developer — Springcore Africa</h2>
              <p className="text-sm leading-tight font-thin">Sept 2020 - Dec 2021</p>
              <ul className="text-sm p-2">
                <li>- Developed backend services and integrations</li>
                <li>- Improved CI/CD and deployment workflows</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
