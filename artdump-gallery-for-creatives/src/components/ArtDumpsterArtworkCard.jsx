import React from "react";

function ArtDumpsterArtworkCard() {
  return (
    <>
      <div className="p-4">
        <div className="pb-4 flex flex-col items-center justify-end max-w-[288px] md:w-[300px] xl:w-[400px] xl:h[400px] h-[300px] bg-[#F8FAFC] shadow-lg">
          <div className="relative bg-[black] w-full h-full">
            <img
              src="public/assets/Mite_Mitey.png"
              alt="artwork thumbnail"
              className="absolute object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex flex-row items-start pt-2 text-xs gap-28">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Project Title</p>
              <p>Created on: 00/00/00</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="font-bold">Status</p>
              <p>O</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDumpsterArtworkCard;
