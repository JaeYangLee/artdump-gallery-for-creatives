import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function CancelValidatorModal({
  isCancelValidatorModalOpen,
  OnCancelValidatorModalClose,
}) {
  if (!isCancelValidatorModalOpen) return null;
  return (
    <>
      {/* Body Overlay */}
      <div
        onClick={OnCancelValidatorModalClose}
        className="fixed inset-0 z-60 bg-black/60 flex flex-col items-center justify-center font-barlow"
      >
        <AnimatePresence>
          {/* Modal Container*/}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="p-4 flex flex-col justify-center items-center w-[465px] h-[480px] bg-[#F8FAFC] font-barlow text-[#372F3D] shadow-xl"
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
              fill="currentColor"
              className="w-[200px] h-[200px] text-purple-500"
            >
              <path
                fill-rule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="font-bold text-[28px] text-red-500">
              Wait a moment!
            </h1>
            <p className="text-[18px]">
              Canceling now will discard any unsaved progress.
            </p>
            <p className="text-[18px]">Still want to go back?</p>
            <div className="mt-24 pr-8 pb-4 flex flex-row self-end gap-4">
              <button
                onClick={OnCancelValidatorModalClose}
                className="p-2 w-[120px] bg-[#EEF0F2] font-bold text-[#372F3D]/50 border-2 border-[#372F3D]/10 rounded-2xl shadow-md hover:bg-[rgb(200,202,204)] active:bg-[rgb(161,163,165)] active:text-[#EEF0F2]"
              >
                No
              </button>
              <button
                onClick={OnCancelValidatorModalClose}
                className="p-2 w-[120px] bg-purple-500 font-bold text-[#F8FAFC] border border-transparent rounded-2xl shadow-md hover:bg-[#7939cc] active:bg-[#5b2b99]"
              >
                Yes
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default CancelValidatorModal;
