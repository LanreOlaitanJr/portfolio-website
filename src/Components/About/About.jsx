import AboutImg from "../../assets/about-img.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section id="About" className="py-12">
      <div className="mx-auto max-w-6xl p-6 md:p-12 bg-black/30 rounded-2xl shadow-xl text-white animate-slideUp">
        <div className="md:flex md:items-start gap-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={AboutImg}
              alt="About"
              className="w-72 h-72 md:w-full md:h-[420px] object-cover rounded-2xl shadow-2xl animate-float"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="mt-3 text-slate-300">
              With 1+ years of professional experience, I create reliable frontends that emphasize performance, accessibility and thoughtfully crafted interfaces.
            </p>

            <div className="mt-6 grid gap-4">
              <article className="flex gap-4 items-start p-4 bg-white/5 rounded-lg hover:bg-white/6 transition transform hover:-translate-y-1" style={{animationDelay: '0.08s'}}>
                <IoArrowForward size={22} className="mt-1 text-[#6b82c4]" />
                <div>
                  <h3 className="text-lg font-semibold">Frontend Developer</h3>
                  <p className="text-sm text-slate-300">React, Tailwind, component-driven UI, and performance optimizations.</p>
                </div>
              </article>

              <article className="flex gap-4 items-start p-4 bg-white/5 rounded-lg hover:bg-white/6 transition transform hover:-translate-y-1" style={{animationDelay: '0.24s'}}>
                <IoArrowForward size={22} className="mt-1 text-[#6b82c4]" />
                <div>
                  <h3 className="text-lg font-semibold">Performance & DX</h3>
                  <p className="text-sm text-slate-300">Optimizing load times and improving developer workflows for faster delivery.</p>
                </div>
              </article>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="#Projects" className="inline-block bg-[#465697] hover:scale-105 transition transform text-white py-2 px-4 rounded-full btn-glow">See Projects</a>
              <a href="#Footer" className="inline-block border border-white/20 text-white py-2 px-4 rounded-full hover:bg-white/5 transition">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
