import React from "react";

function ArtDumpsterArtworkCard() {
  return (
    <>
      <div className="p-4">
        <div className=" group pb-2 flex flex-col items-center justify-end w-[288px] md:w-[328px] h-[300px] md:h-[320px] lg:h-[340px] lg:w-[308px] xl:w-[408px] xl:h-[380px] bg-[#F8FAFC] shadow-xl shadow-black/30 hover:text-[#F8FAFC]">
          <div className="relative w-full h-full">
            <div class="absolute w-[288px] h-[300px] md:w-[328px] md:h-[320px] lg:h-[340px] lg:w-[308px] xl:w-[408px] xl:h-[380px] inset-0 bg-gradient-to-t from-black/80 to-transparent z-60 opacity-0 transition-all duration-200 ease-in group-hover:opacity-100"></div>
            <img
              src="public/assets/sasuke-retrieval-arc.jpeg"
              alt="artwork thumbnail"
              className="absolute z-50 object-fit object-cover w-full h-full transition-all duration-240 ease-in group-hover:h-[300px] md:group-hover:h-[320px] lg:group-hover:h-[340px]"
            />
          </div>
          <div className="flex flex-row items-start p-2 text-xs md:text-sm lg:text-sm z-70 gap-28 lg:gap-24 md:gap-32">
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
