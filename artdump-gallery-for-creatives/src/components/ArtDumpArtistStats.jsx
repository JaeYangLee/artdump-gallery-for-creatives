import React from "react";

function ArtDumpArtistStats({ artistStatTitle, artistStat }) {
  return (
    <div className="pl-5 pt-2">
      <div className="flex flex-col justify-center items-center w-[309px] h-[35px] text-[#FEBCC4] bg-[#372F3D]  rounded-2xl shadow-xl/20">
        <div className="pl-4 mr-auto flex flex-row justify-between gap-4">
          <p className="text-[#FEBCC4] font-semibold">{`• ${artistStatTitle}:`}</p>
          <p className="text-[#FEBCC4] font-light italic ">{artistStat}</p>
        </div>
      </div>
    </div>
  );
}

export default ArtDumpArtistStats;
