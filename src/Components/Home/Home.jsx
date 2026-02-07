import avatarImg from "../../assets/hero-img.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-8 p-5 md:p-10 lg:p-20">
      <div className="w-full md:w-2/4 flex flex-col justify-center animate-slideUp">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-normal tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis">
          <TextChange />
        </h1>
        <p className="text-sm md:text-lg lg:text-xl tracking-tight mt-4 md:mt-6 animate-slideUp" style={{animationDelay: '0.1s'}}>
          I take complex backend logics and wrap it in a frontend that people actually want to use. Expert in React, Tailwind, and making things go fast.
        </p>
        <a href="#Footer" className="inline-block mt-6 md:mt-8 text-white py-2 px-4 md:py-3 md:px-6 text-sm md:text-base lg:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-fit animate-slideUp btn-glow" style={{animationDelay: '0.2s'}}>
          Contact Me
        </a>
      </div>
      <div className="w-full md:w-2/4 flex justify-center items-center">
        <img 
          className="max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain animate-float" 
          src={avatarImg} 
          alt="Hero avatar" 
        />
      </div>
    </div>
  );
};

export default Home;
