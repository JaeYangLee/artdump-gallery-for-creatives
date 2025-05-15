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
          {/* Left Section Container */}
          {/* Artwork container */}
          <div className="bg-[lightgray] w-[870px] h-full">
            <img
              src="src/assets/shikamaruImageSample.jpg"
              alt="Artwork Image"
              width="870px"
              height="895px"
              className="object-fill"
            />
          </div>
          {/* Right Section Container */}
          {/* project details container */}
          <div className="">
            {/* Header */}
            <div className="p-4 flex flex-row items-center gap-60">
              <h1 className="font-barlow text-[28px] text-[#372F3D] font-bold">
                Project Title
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 28 28"
                fill="#372F3D"
                className=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.25 14C5.25 13.0335 6.0335 12.25 7 12.25C7.9665 12.25 8.75 13.0335 8.75 14C8.75 14.9665 7.9665 15.75 7 15.75C6.0335 15.75 5.25 14.9665 5.25 14ZM12.25 14C12.25 13.0335 13.0335 12.25 14 12.25C14.9665 12.25 15.75 13.0335 15.75 14C15.75 14.9665 14.9665 15.75 14 15.75C13.0335 15.75 12.25 14.9665 12.25 14ZM19.25 14C19.25 13.0335 20.0335 12.25 21 12.25C21.9665 12.25 22.75 13.0335 22.75 14C22.75 14.9665 21.9665 15.75 21 15.75C20.0335 15.75 19.25 14.9665 19.25 14Z"
                  fill="#0F172A"
                />
              </svg>
            </div>
            <hr className="w-[480px]" />
            {/* Project Description Container */}
            <div className="p-4">
              {/* Project Description */}
              <div className="flex justify-center border rounded-xl w-[440px] h-[560px]">
                <p className="p-4 font-barlow font-light italic text-[14px]">
                  "This digital portrait captures a quiet, introspective moment,
                  inspired by soft afternoon light and muted tones. I focused on
                  rendering subtle facial expressions and delicate brush strokes
                  to give the piece an emotional depth. Created using Procreate,
                  this artwork was part of my ongoing study in lighting and
                  facial anatomy. I experimented with textured brushes to add a
                  painterly feel while keeping the overall look clean and
                  modern."
                </p>
              </div>
            </div>

            {/* project status & icon */}
            <div className="pt-8 p-2 flex flex-row items-center gap-85">
              <h2 className="pl-4 font-barlow font-medium text-[24px] text-[#372F3D]">
                Status
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="flex justify-center items-center"
              >
                <circle cx="9" cy="9" r="9" fill="#737373" />
              </svg>
            </div>
            <hr className="w-[480px]" />

            {/* project details */}
            <div className="pl-8 p-6 flex flex-col justify-center font-barlow text-[20px]">
              <ul>
                <div className="flex flex-row items-center gap-2">
                  <li className="font-medium">• Published:</li>
                  <li>00/00/0000</li>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <li className="font-medium">• Medium:</li>
                  <li>Digital</li>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <li className="font-medium">• Genre:</li>
                  <li>Portrait</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDumpsterProjectDisplayModal;
