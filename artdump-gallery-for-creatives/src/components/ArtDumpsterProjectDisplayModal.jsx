import React from "react";

function ArtDumpsterProjectDisplayModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <>
      {/* body */}
      <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 48 48"
          fill="none"
          onClick={onClose}
          className="fixed top-3 right-9"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9393 10.9393C11.5251 10.3536 12.4749 10.3536 13.0607 10.9393L24 21.8787L34.9393 10.9393C35.5251 10.3536 36.4749 10.3536 37.0607 10.9393C37.6464 11.5251 37.6464 12.4749 37.0607 13.0607L26.1213 24L37.0607 34.9393C37.6464 35.5251 37.6464 36.4749 37.0607 37.0607C36.4749 37.6464 35.5251 37.6464 34.9393 37.0607L24 26.1213L13.0607 37.0607C12.4749 37.6464 11.5251 37.6464 10.9393 37.0607C10.3536 36.4749 10.3536 35.5251 10.9393 34.9393L21.8787 24L10.9393 13.0607C10.3536 12.4749 10.3536 11.5251 10.9393 10.9393Z"
            fill="#F8FAFC"
          />
        </svg>
        {/* Modal Container */}
        <div className="flex flex-row bg-[#F8FAFC] w-[1350px] h-[620px]">
          {/* Right Section */}
          <div className="bg-[black] w-[870px]">
            <img
              src="src/assets/shikamaruImageSample.jpg"
              alt="Artwork Image"
              className="object-contain w-[870px] h-[620px]"
            />
          </div>
          {/* Left Section */}
          <div className="w-[480px]">
            {/* Project Title & Settings SVG*/}
            <div className="p-2 flex flex-row justify-between gap-74 items-center font-barlow text-[#372F3D] gap-auto">
              <h1 className="pl-3 font-bold text-[24px]">Project Title</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            <hr className="text-[#372F3D]/40 full" />
            {/* Project description*/}
            <div className="p-4 flex justify-center items-center ">
              <div className="p-4 border border-[#372F3D]/40 rounded-2xl w-[400px] h-[380px] font-barlow">
                <p className="font-light italic text-[#372F3D] text-[14px]">
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
            {/*Project Status*/}
            <div className="p-2 flex flex-row gap-4 items-center font-barlow text-[#372F3D] gap-auto">
              <h2 className="pl-4 font-medium text-[20px]">Status</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className=""
              >
                <circle cx="9" cy="9" r="9" fill="#737373" />
              </svg>
            </div>
            <hr className="text-[#372F3D]/40 full" />
            {/*Project Details*/}
            <div className="pl-4 p-2 flex gap-4 items-center font-barlow text-[#372F3D] gap-auto">
              <ul>
                <div className="flex flex-row items-center text-[14px] gap-2">
                  <li className="font-medium">• Published:</li>
                  <li className="font-light italic">00/00/0000</li>
                </div>
                <div className="flex flex-row items-center text-[14px] gap-2">
                  <li className="font-medium">• Medium:</li>
                  <li className="font-light italic">Digital Art</li>
                </div>
                <div className="flex flex-row items-center text-[14px] gap-2">
                  <li className="font-medium">• Tools:</li>
                  <li className="font-light italic">Clip Studio Paint</li>
                </div>
                <div className="flex flex-row items-center text-[14px] gap-2">
                  <li className="font-medium">• Genre:</li>
                  <li className="font-light italic">
                    Anime, Portrait, Character Design
                  </li>
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
