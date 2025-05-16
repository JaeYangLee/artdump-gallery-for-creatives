import React from "react";

function ArtDumpsterProjectDisplayModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <>
      {/* body */}
      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-8">
        {/* Container */}
        <div className="flex flex-row w-[90vw] h-[80vh] max-w-[1100px] max-h-[720px] bg-[#F8FAFC]">
          {/* Left Section Container */}
          {/* Artwork container */}
          <div className="w-2/3 h-full bg-[lightgray]">
            <img
              src="src/assets/shikamaruImageSample.jpg"
              alt="Artwork Image"
              width="870px"
              height="895px"
            />
          </div>
          {/* Right Section Container */}
          {/* project details container */}
          <div className="w-1/3 h-full overflow-y-auto p-6 bg-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-barlow text-xl text-[#372F3D] font-bold">
                Project Title
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="#372F3D"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.25 14C5.25 13.0335 6.0335 12.25 7 12.25C7.9665 12.25 8.75 13.0335 8.75 14C8.75 14.9665 7.9665 15.75 7 15.75C6.0335 15.75 5.25 14.9665 5.25 14ZM12.25 14C12.25 13.0335 13.0335 12.25 14 12.25C14.9665 12.25 15.75 13.0335 15.75 14C15.75 14.9665 14.9665 15.75 14 15.75C13.0335 15.75 12.25 14.9665 12.25 14ZM19.25 14C19.25 13.0335 20.0335 12.25 21 12.25C21.9665 12.25 22.75 13.0335 22.75 14C22.75 14.9665 21.9665 15.75 21 15.75C20.0335 15.75 19.25 14.9665 19.25 14Z"
                  fill="#0F172A"
                />
              </svg>
            </div>

            <hr className="mb-4" />

            {/* Project Description */}
            <div className="mb-6 border rounded-xl h-[260px] p-4 overflow-y-auto">
              <p className="font-barlow font-light italic text-sm">
                "This digital portrait captures a quiet, introspective moment,
                inspired by soft afternoon light and muted tones. I focused on
                rendering subtle facial expressions and delicate brush strokes
                to give the piece an emotional depth..."
              </p>
            </div>

            {/* Status Section */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-barlow font-medium text-lg text-[#372F3D]">
                Status
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle cx="9" cy="9" r="9" fill="#737373" />
              </svg>
            </div>

            <hr className="mb-4" />

            {/* Project Details */}
            <div className="font-barlow text-base space-y-2">
              <div className="flex gap-2">
                <span className="font-medium">• Published:</span>
                <span>00/00/0000</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">• Medium:</span>
                <span>Digital</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">• Genre:</span>
                <span>Portrait</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDumpsterProjectDisplayModal;
