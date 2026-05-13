import PropTypes from "prop-types";
import { useState } from "react";
import agriFund from "../../assets/agrifund-pic.jpg";
import extension from "../../assets/the-ext-man-pic.jpg";
import stitchHub from "../../assets/stitch-hub-pic.jpg";

const ProjectCard = ({ title, main, image }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const imageMap = {
    agrifund: agriFund,
    extension: extension,
    stitchHub: stitchHub,
  };

  const projectImage = imageMap[image] || agriFund;

  const handleDemoClick = () => {
    setModalMessage("Sorry the demo is only available on request. Please get in touch.");
    setShowModal(true);
  };

  const handleSourceClick = () => {
    setModalMessage("Sorry this is a private repository. Please contact me for access.");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="group relative w-80 animate-scaleIn">
        {/* Glowing background effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#465697] to-[#6b82c4] rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
        
        {/* Card container */}
        <div className="relative p-6 flex flex-col h-full bg-gradient-to-br from-[#0c0e19] to-[#1a1f2e] shadow-xl rounded-3xl border border-[#1f2937] group-hover:border-[#465697] transition-all duration-300">
          
          {/* Image container */}
          <div className="relative overflow-hidden rounded-2xl mb-4 h-48">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              src={projectImage} 
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e19] via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <h3 className="text-xl md:text-2xl font-bold leading-normal mb-3 text-white group-hover:text-[#6b82c4] transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-sm md:text-base leading-relaxed py-2 text-gray-300 flex-grow">
            {main}
          </p>

          {/* Buttons container */}
          <div className="mt-6 flex gap-3 flex-wrap">
            <button onClick={handleDemoClick} className="flex-1 min-w-[120px] relative group/btn px-4 py-3 text-sm md:text-base font-semibold text-white rounded-xl bg-gradient-to-r from-[#465697] to-[#5a6fb8] hover:from-[#5a6fb8] hover:to-[#6b82c4] transition-all duration-300 hover:shadow-lg hover:shadow-[#465697]/50 hover:scale-105 active:scale-95 overflow-hidden">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Demo</span>
            </button>
            
            <button onClick={handleSourceClick} className="flex-1 min-w-[120px] relative group/btn px-4 py-3 text-sm md:text-base font-semibold text-white rounded-xl border-2 border-[#465697] hover:border-[#6b82c4] bg-transparent hover:bg-[#465697]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#465697]/30 hover:scale-105 active:scale-95 overflow-hidden">
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Source</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#0c0e19] to-[#1a1f2e] border border-[#465697] rounded-2xl shadow-2xl shadow-[#465697]/50 max-w-sm w-full animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#1f2937]">
              <h2 className="text-xl font-bold text-white">Information</h2>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              <p className="text-gray-300 text-base leading-relaxed">
                {modalMessage}
              </p>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#1f2937] flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#465697] to-[#5a6fb8] hover:from-[#5a6fb8] hover:to-[#6b82c4] transition-all duration-300 hover:shadow-lg hover:shadow-[#465697]/50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
