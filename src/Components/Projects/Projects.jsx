import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold animate-slideUp mb-4">Projects</h1>
      <div className="h-1 w-20 bg-gradient-to-r from-[#465697] to-[#6b82c4] rounded-full mb-12 animate-slideUp"></div>
      <div className="py-12 px-8 flex flex-wrap lg:flex-nowrap gap-8 justify-center lg:justify-start">
        <ProjectCard
          title="AgriFund"
          main="A comprehensive agricultural funding platform that connects farmers with investors and financial institutions, streamlining the process of securing agricultural loans and investments."
          image="agrifund"
        />
        <ProjectCard
          title="Extension Manager"
          main="An agricultural management tool designed to help farmers organize, control, and optimize their farming operations, providing features for crop planning, resource management, and data-driven decision-making."
          image="extension"
        />
        <ProjectCard
          title="StitchHub"
          main="An innovative e-commerce platform for custom tailoring and fashion design, connecting customers with skilled tailors and allowing seamless collaboration on bespoke clothing projects."
          image="stitchHub"
        />
      </div>
    </div>
  );
};

export default Projects;
