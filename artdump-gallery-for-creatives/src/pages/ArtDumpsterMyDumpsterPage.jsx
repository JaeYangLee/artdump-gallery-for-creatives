import React, { useState } from "react";
import ArtDumpNavBar from "../components/ArtDumpNavBar";
import ArtDumpArtworkCard from "../components/ArtDumpArtworkCard";

function ArtDumpsterMyDumpsterPage() {
  return (
    <>
      {/* NavBar */}
      <div className="fixed top-0 left-0 w-full h-[56px] bg-[#F8FAFC] z-50">
        <ArtDumpNavBar />
      </div>
      <div className="pl-8 pt-[64px]">
        {/* Header or Page Title */}
        <div className="p-0 m-0 flex flex-row items-center gap-1 w-[397px] -z-10">
          <h1 className="font-barlow font-semibold text-[#372F3D] text-[56px] text-shadow-md">
            My
          </h1>
          <h1 className="font-barlow font-extrabold text-[#372F3D] text-[56px] text-shadow-md">
            Dumpster*!
          </h1>
        </div>
      </div>
      {/* ArtworkGallery Parent Container */}
      <div className="pl-8 w-full h-full">
        <ArtDumpArtworkCard />
      </div>
      {/* Grid Background SVG */}
      <img
        src="/src/assets/Grid Line Background.svg"
        className="fixed pt-[56px] top-0 left-0 w-screen h-screen object-cover -z-10 opacity-60"
        alt="background"
      />
    </>
  );
}

export default ArtDumpsterMyDumpsterPage;
