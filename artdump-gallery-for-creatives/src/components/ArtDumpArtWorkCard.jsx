import React from "react";

function ArtDumpArtWorkCard() {
  return (
    <>
      <div className="pl-5">
        <div className="flex flex-col justify-center items-center  bg-[#372F3D] w-[248px] h-[220px] rounded-2xl shadow-xl/20">
          <div className="w-[202px] h-[146px] bg-[#FEBCC4] rounded-2xl"></div>
          <div className="pl-8 pt-2 flex flex-col self-start text-[#FEBCC4]">
            <p className="font-bold">Project Title</p>
            <p className="font-light italic">00/00/00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDumpArtWorkCard;
