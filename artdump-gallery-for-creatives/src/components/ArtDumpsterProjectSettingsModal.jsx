import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ArtDumpsterProjectSettings({
  isProjectSettingsModalOpen,
  onProjectSettingsModalClose,
}) {
  if (!isProjectSettingsModalOpen) return null;
  return (
    <>
      <div
        onClick={onProjectSettingsModalClose}
        className="fixed inset-0 z-70 bg-black/80 flex flex-col items-center justify-center"
      >
        <AnimatePresence>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="p-0 border border-transparent rounded-2xl flex flex-col justify-center items-center gap-8 font-barlow text-[18px] font-medium text-[#372F3D] bg-[#F8FAFC] w-[440px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
            }}
          >
            <div className="flex flex-col justify-center items-center w-full">
              <button className="p-2 border-b border-[#372F3D]/40 w-full active:bg-[#dfe1e3] active:rounded-t-2xl">
                Edit
              </button>
              <button className="p-2 border-b border-[#372F3D]/40 w-full active:bg-[#dfe1e3] active:border-b">
                Visibility
              </button>
              <button className="p-2 border-b border-[#372F3D]/40 w-full active:bg-[#dfe1e3] active:border-b">
                Pin to top
              </button>
              <button className="p-2 border-b border-[#372F3D]/40 w-full text-red-500 active:bg-[#dfe1e3] active:border-b">
                Delete
              </button>
              <button
                onClick={onProjectSettingsModalClose}
                className="p-2 w-full active:bg-[#dfe1e3] active:rounded-b-2xl"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default ArtDumpsterProjectSettings;
