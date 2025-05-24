import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function UploadImageSuccessModal({
  isUploadImageSuccessModalOpen,
  OnUploadImageSuccessModalClose,
}) {
  if (!isUploadImageSuccessModalOpen) return null;

  return (
    <>
      {/* Body Overlay */}
      <div className="fixed inset-0 z-60 bg-black/60 flex flex-col items-center justify-center font-barlow">
        <AnimatePresence>
          {/* Modal Container */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-[420px] h-[480px] flex flex-col justify-center items-center bg-[#F8FAFC] shadow-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#9747FF"
              className="w-[200px] h-[200px]"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="font-bold text-[#372F3D] text-[24px]">
              Upload Succesful
            </h1>
            <h2 className="text-[#372F3D] text-[18px]">
              Your artwork has been added beautifully!
            </h2>
            <button
              onClick={OnUploadImageSuccessModalClose}
              className="mt-24 p-2 w-[239px] bg-[#9747FF] font-bold text-[#F8FAFC] border border-transparent rounded-2xl shadow-md hover:bg-[#7939cc] active:bg-[#5b2b99]"
            >
              OK
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default UploadImageSuccessModal;
