import React from "react";
import ArtDumpNavBar from "../components/ArtDumpNavBar";
import ArtDumpArtWorkCard from "../components/ArtDumpArtWorkCard";
import ArtDumpArtistStats from "../components/ArtDumpArtistStats";

function ArtDumpDashBoardPage() {
  return (
    <>
      {/* Body */}
      <div className="min-h-screen">
        {/* Body Gradient */}
        <div className="min-h-screen bg-gradient-to-br from-rose-200 to-rose-400">
          <ArtDumpNavBar />
          <h1 className="pt-20 pl-5 text-[48px] font-bold text-[#372F3D]">
            WELCOME, JIAN LEE!
          </h1>
          <h2 className="pt-2 pl-5 text-[36px] font-semibold text-[#372F3D]">
            Recent Upload
          </h2>
          <ArtDumpArtWorkCard />
          <h2 className="pt-2 pl-5 text-[36px] font-semibold text-[#372F3D]">
            Artist Stats
          </h2>
          <ArtDumpArtistStats artistStatTitle="Total artworks" artistStat="4" />
          <ArtDumpArtistStats
            artistStatTitle="Most used category"
            artistStat=""
          />
          <ArtDumpArtistStats artistStatTitle="Most used tool" artistStat="" />
        </div>
      </div>
    </>
  );
}

export default ArtDumpDashBoardPage;
