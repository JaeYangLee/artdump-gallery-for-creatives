import React from "react";
import backgroundImage from "assets/grid-line-background-image.svg";

function ArtDumpsterHomePage() {
  return (
    <>
      <div
        className="w-screen min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="">
          <h1>Hello World!</h1>
        </div>
      </div>
    </>
  );
}

export default ArtDumpsterHomePage;
