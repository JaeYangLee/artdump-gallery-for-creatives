import React, { useState } from "react";

function ArtDumpArtworkDisplayModal({
  isArtworkDisplayModalOpen,
  onArtworkDisplayModalClose,
}) {
  const [isArtworkDisplayOpen, onArtworkDisplayClose] = useState(false);
  if (!isArtworkDisplayOpen) return null;
  return (
    <>
      <div
        className="w-screen min-h-screen bg-black/50"
        onClick={() => onArtworkDisplayClose(true)}
      >
        <div className="bg-white w-100 h-100">
          <h1>ArtWork Modal</h1>
        </div>
      </div>
    </>
  );
}

export default ArtDumpArtworkDisplayModal;
