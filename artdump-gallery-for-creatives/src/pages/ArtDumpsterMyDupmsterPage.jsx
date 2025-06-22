import React from "react";
import ArtDumpsterArtworkCard from "../components/ArtDumpsterArtworkCard";

function ArtDumpsterMyDupmsterPage() {
  return (
    <>
      <div className="w-screen min-h-screen pt-[56px] font-barlow">
        <header className="p-4">
          <div className="flex flex-row gap-1 text-[#372F3D] text-4xl">
            <h1>My</h1>
            <h1 className="font-bold">Dumpster!</h1>
          </div>
        </header>
        <div>
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
