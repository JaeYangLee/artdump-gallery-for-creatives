import React from "react";
import ArtDumpNavBar from "../components/ArtDumpNavBar";

function ArtDumpsterMyDumpsterPage() {
  return (
    <>
      {/* NavBar */}
      <div>
        <ArtDumpNavBar />
      </div>
      <div className="pl-8 pt-[64px]">Hello World!</div>
      <div></div>
      {/* Grid Background SVG */}
      <img
        src="/src/assets/Grid.svg"
        className="fixed pt-[56px] top-0 left-0 w-screen h-screen object-cover -z-10"
        alt="background"
      />
    </>
  );
}

export default ArtDumpsterMyDumpsterPage;
