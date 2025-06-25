import React, { useState } from "react";

function ArtDumpArtworkDisplayModal({
  isArtworkDisplayModalOpen,
  onArtworkDisplayModalClose,
}) {
  if (!isArtworkDisplayModalOpen) return null;
  return (
    <>
      {/* Backdrop Container */}
      <div
        className="fixed top-0 flex items-center justify-center w-screen min-h-screen p-2 xl:p-8 bg-black/70 z-60 font-barlow"
        onClick={onArtworkDisplayModalClose}
      >
        <div
          className="xl:pt-0 pt-8 relative flex items-center justify-center w-screen h-[580px]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Child Container 1 */}
          <div className="absolute flex flex-col items-center w-full h-full">
            {/* Child Container 2 */}
            <div className="p-2 border-b border-black/20 w-full h-14 bg-[#F8FAFC]">
              <header className="flex flex-row items-center justify-between w-full h-full">
                <h1 className="text-base font-medium">Project Title</h1>
                <div className="flex flex-row items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    alt="Artwork Settings Button"
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
            </div>
            {/* Child Container 3 */}
            <div className="flex flex-col items-center w-full h-full md:flex-row">
              {/* Child Container 4 */}
              <div className="w-full bg-[#161618] h-[60%] md:w-[70%] md:h-full">
                <img
                  src="public/assets/sasuke-retrieval-arc.jpeg"
                  alt="ArtWork Image"
                  className="object-contain w-full h-full"
                />
              </div>
              {/* Child Container 5 */}
              <div className="flex flex-col md:justify-between w-full h-[40%] md:w-[30%] md:h-full bg-[#F8FAFC]">
                <div className="m-2 w-auto h-[40%] md:min-h-[60%] p-2 border rounded-lg border-[#372F3D]/40">
                  <p className="text-xs italic light text-[#372F3D]/70">
                    "Artwork description..."
                  </p>
                </div>
                <div>
                  <h2 className="p-2 text-sm font-medium">Status</h2>
                  <hr className="w-auto opacity-30"></hr>
                  <ul className="p-2 text-xs font-medium">
                    <li>Published:</li>
                    <li>Medium:</li>
                    <li>Tools:</li>
                    <li>Genre:</li>
                  </ul>
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
