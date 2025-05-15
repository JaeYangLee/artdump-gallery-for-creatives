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
      <div className="m-2 w-[430.46px] h-[379.8px] bg-[#F8FAFC] text-[#372F3D] transition-all duration-300 ease-in-out hover:text-[#F8FAFC] shadow-xl/20 relative overflow-hidden group">
        {/* Image Thumbnail with Gradient */}
        <div className="relative w-full h-[300px] transition-all duration-300 ease-in-out">
          <img
            src="src/assets/shikamaruImageSample.jpg"
            alt="Artwork Thumbnail"
            className="object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:h-[379.8px] -z-10"
          />
          {/* Gradient Overlay */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0  ease-in-out hover:opacity-100 transition-opacity duration-300 z-10"></div>

        {/* Artwork Basic Details */}
        <div className="px-4 pt-2 pb-0 flex flex-row justify-between z-20 relative">
          <p className="font-barlow text-[14px] font-bold">Project Title</p>
          <p className="font-barlow text-[14px] font-bold">Status</p>
        </div>
        <div className="px-4 pt-1 pb-0 flex flex-row justify-between z-20 relative">
          <p className="font-barlow text-[14px] font-light italic">
            Published on: 00/00/0000
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 18 18"
            fill="none"
            className="mr-3"
          >
            <circle cx="9" cy="9" r="9" fill="#60CB62" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default ArtDumpArtworkCard;
