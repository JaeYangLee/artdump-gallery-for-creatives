import React from "react";
import ArtDumpsterArtworkCard from "../components/ArtDumpsterArtworkCard";

function ArtDumpsterMyDupmsterPage() {
  return (
    <>
      <div className="w-screen min-h-screen pt-[56px] font-barlow">
        <header className="p-4">
          <div className="flex flex-row gap-1 text-[#372F3D] text-4xl lg:text-6xl xl:text-5xl">
            <h1>My</h1>
            <h1 className="font-bold">Dumpster!</h1>
          </div>
        </header>
        <div className="flex flex-col flex-wrap items-center justify-center gap-0 md:flex-row md:justify-center lg:justify-center lg:flex-row xl:justify-center ">
          <ArtDumpsterArtworkCard />
          <ArtDumpsterArtworkCard />
          <ArtDumpsterArtworkCard />
          <ArtDumpsterArtworkCard />
          <ArtDumpsterArtworkCard />
          <ArtDumpsterArtworkCard />
        </div>
        <img
          src="public/assets/grid-line-background-image.svg"
          alt="Background Image"
          className="fixed top-0 object-cover w-screen min-h-screen -z-1"
        />
      </div>
    </>
  );
}

export default ArtDumpsterMyDupmsterPage;
