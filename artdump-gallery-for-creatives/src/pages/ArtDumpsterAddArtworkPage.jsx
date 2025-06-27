import { div } from "framer-motion/client";
import React from "react";
import ArtDumpsterArtworkUploadCard from "../components/ArtDumpsterArtworkUploadCard";

function ArtDumpsterAddArtworkPage() {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div className="pt-[56px]">
          <div className="p-2">
            <h1>Add an artwork!</h1>
          </div>
          <div></div>
        </div>
        <img
          src="./assets/grid-line-background-image.svg"
          alt="Background Image"
          className="fixed top-0 object-cover w-screen min-h-screen -z-1"
        />
      </div>
    </>
  );
}

export default ArtDumpsterAddArtworkPage;
