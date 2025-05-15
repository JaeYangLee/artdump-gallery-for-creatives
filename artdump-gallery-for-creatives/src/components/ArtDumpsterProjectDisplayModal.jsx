import React from "react";

function ArtDumpsterProjectDisplayModal() {
  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  };
  return (
    <>
      {/* body */}
      <div>
        {/* Container */}
        <div className="flex flex-row w-[1350px] h-[895px] bg-[#F8FAFC]">
          {/* Left Section */}
          {/* Artwork container */}
          <div className="bg-[lightgray] w-[870px] h-[895px]">
            <img
              src="src/assets/shikamaruImageSample.jpg"
              alt=""
              width="870px"
              height="895px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDumpsterProjectDisplayModal;
