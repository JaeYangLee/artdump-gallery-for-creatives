import React, { useState } from "react";

function ArtDumpArtworkDisplayModal({
  isArtworkDisplayModalOpen,
  onArtworkDisplayModalClose,
}) {
  if (!isArtworkDisplayModalOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 z-50 flex items-center justify-center w-screen min-h-screen bg-black/50"
        onClick={onArtworkDisplayModalClose}
      >
        <div
          className="flex flex-col items-center justify-center bg-white w-100 h-100"
          onClick={onArtworkDisplayModalClose}
        >
          <h1>ArtWork Modal</h1>
        </div>
      </div>
    </>
  );
}

export default ArtDumpArtworkDisplayModal;
