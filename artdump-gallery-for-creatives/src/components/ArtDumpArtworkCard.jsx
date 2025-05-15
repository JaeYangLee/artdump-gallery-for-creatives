import React from "react";

function ArtDumpArtworkCard() {
  return (
    <>
      {/* Artwork Card Container */}
      <div className="m-2 w-[430.46px] h-[379.8px] bg-[#F8FAFC] shadow-xl/20">
        {/* Image Thumbnail */}
        <img
          src="src/assets/shikamaruImageSample.jpg"
          alt="Artwork Thumbnail"
          className="object-cover w-[432px] h-[300px]"
        />
        <div className="p-4 flex flex-row justify-between px-4 pb-0">
          <p className="font-barlow text-[#372F3D] text-[14px] font-bold">
            Project Title
          </p>
          <p className="font-barlow text-[#372F3D] text-[14px] font-bold">
            Status
          </p>
        </div>
        <div className="p-1 flex flex-row justify-between px-4 pb-0">
          <p className="font-barlow text-[#372F3D] text-[14px] font-light italic">
            Published on: 00/00/0000
          </p>
        </div>
      </div>
    </>
  );
}

export default ArtDumpArtworkCard;
