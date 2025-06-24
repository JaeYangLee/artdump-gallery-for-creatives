import React, { useState } from "react";

function ArtDumpArtworkDisplayModal({
  isArtworkDisplayModalOpen,
  onArtworkDisplayModalClose,
}) {
  if (!isArtworkDisplayModalOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 z-50 flex items-center justify-center w-screen min-h-screen p-2 bg-black/80 font-barlow"
        onClick={onArtworkDisplayModalClose}
      >
        <div
          className="mt-8 flex flex-col items-center bg-white max-w-screen h-[593px]"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex justify-between items-center w-full p-2 border-b border-[#372F3D]/40">
            <h1 className="text-base font-medium text-[#372F3D]">
              Project Title
            </h1>
            <div className="flex flex-row gap-2 text-[#372F3D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                alt="Settings Icon"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                alt="X icon"
                className="size-6"
                onClick={onArtworkDisplayModalClose}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </header>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center item-center w-full h-[309px] bg-black">
              <img
                src="public/assets/sasuke-retrieval-arc.jpeg"
                alt="Artwork Image"
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <div className="flex flex-col items-center justify-center p-4 font-barlow font-light text-[#372F3D]/70 italic">
                <section className="p-2 pb-0 border rounded-lg border-black/30 placeholder:text-xs w-full h-[50px] text-xs">
                  Artwork description...
                </section>
              </div>
              <div className="flex flex-row items-center justify-start">
                <p className="p-2 text-base font-medium">Status</p>
                <p>O</p>
              </div>
              <hr className="w-full text-black/30" />
              <div className="flex flex-col items-start justify-center gap-2 p-4">
                <div>
                  <p className="text-xs font-medium">• Published:</p>
                </div>
                <div>
                  <p className="text-xs font-medium">• Medium:</p>
                </div>
                <div>
                  <p className="text-xs font-medium">• Tools:</p>
                </div>
                <div>
                  <p className="text-xs font-medium">• Genre:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDumpArtworkDisplayModal;
