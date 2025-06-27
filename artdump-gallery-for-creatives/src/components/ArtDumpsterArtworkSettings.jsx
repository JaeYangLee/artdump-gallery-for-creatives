import React from "react";

function ArtDumpsterArtworkSettings({
  isArtDumpsterArtworkSettingsOpen,
  onArtDumpsterArtworkSettingsClose,
}) {
  if (!isArtDumpsterArtworkSettingsOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 flex items-center justify-center w-screen min-h-screen bg-black/70 z-60"
        onClick={onArtDumpsterArtworkSettingsClose}
      >
        <div className="relative flex items-center justify-center w-screen min-h-screen">
          <div
            className="absolute flex items-center justify-center w-[300px] h-[212px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute flex flex-col items-center justify-center w-full h-full gap-0 text-base font-medium text-[#2C2631]">
              <button className="w-full p-2 bg-[#F8FAFC] rounded-t-lg hover:cursor-pointer transform-all ease-in duration-200 hover:bg-[lightgray]">
                Edit
              </button>

              <button className="w-full p-2 bg-[#F8FAFC] border-t border-t-black/30 hover:cursor-pointer  transform-all ease-in duration-200 hover:bg-[lightgray]">
                Visibility
              </button>

              <button className="w-full p-2 bg-[#F8FAFC] border-t border-t-black/30 hover:cursor-pointer  transform-all ease-in duration-200 hover:bg-[lightgray]">
                Pin to top
              </button>

              <button className="w-full p-2 bg-[#F8FAFC] text-red-500 border-t hover:cursor-pointer  transform-all ease-in duration-200  border-t-black/30 hover:bg-[lightgray]">
                Delete
              </button>

              <button
                className="w-full p-2 bg-[#F8FAFC] rounded-b-lg border-t border-t-black/30 hover:cursor-pointer  transform-all ease-in duration-200 hover:bg-[lightgray]"
                onClick={onArtDumpsterArtworkSettingsClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDumpsterArtworkSettings;
