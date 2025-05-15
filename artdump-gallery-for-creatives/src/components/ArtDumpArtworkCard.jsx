import React from "react";

function ArtDumpArtworkCard(
  projectThumbnail,
  projectTitle,
  projectStatus,
  datePublished,
  projectColorStatus
) {
  return (
    <>
      {/* Artwork Card Container */}
      <div className="m-2 w-[430.46px] h-[379.8px] bg-[#F8FAFC] text-[#372F3D] transition-all duration-300 ease-in-out hover:text-[#F8FAFC] shadow-xl/20">
        {/* Image Thumbnail */}
        <img
          src="src/assets/shikamaruImageSample.jpg"
          alt="Artwork Thumbnail"
          className="absolute object-cover w-[432px] h-[300px] transition-all duration-300 ease-in-out hover:h-[379.8px] hover:z-0"
        />
        {/* Artwork Basic Details */}
        <div className="p-[315px] flex flex-row justify-between px-4 pb-0">
          <p className="font-barlow text-[14px] font-bold z-50">
            Project Title
          </p>
          <p className="font-barlow text-[14px] font-bold z-50">Status</p>
        </div>
        <div className="p-1 flex flex-row justify-between px-4 pb-0 z-50">
          <p className="font-barlow text-[14px] font-light italic z-50">
            Published on: 00/00/0000
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 18 18"
            fill="none"
            className="mr-3 z-50"
          >
            <circle cx="9" cy="9" r="9" fill="#60CB62" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ArtDumpArtworkCard;
