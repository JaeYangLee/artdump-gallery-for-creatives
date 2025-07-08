import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ArtDumpsterMobilePopUpSideBar({
  isMobilePopUpSideBarOpen,
  onMobilePopUpSideBarClose,
}) {
  const navigate = useNavigate();

  const handleHomePage = () => {
    onMobilePopUpSideBarClose();
    navigate("/");
  };
  const handleMyDumpster = () => {
    navigate("/MyDumpster");
    onMobilePopUpSideBarClose();
  };
  const handleAddArtwork = () => {
    navigate("/AddArtwork");
    onMobilePopUpSideBarClose();
  };
  const handleSettingsPage = () => {
    navigate("/Settings");
    onMobilePopUpSideBarClose();
  };

  if (!isMobilePopUpSideBarOpen) return false;
  return (
    <>
      <div
        className="fixed z-50 flex items-start justify-end w-screen min-h-screen bg-black/50 md:hidden"
        onClick={onMobilePopUpSideBarClose}
      >
        <div
          className="relative pt-[56px] flex flex-col items-start gap-4  w-36 min-h-screen  bg-[#F8FAFC] shadow-lg shadow-black/20 text-[#372F3D] text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="flex flex-row items-center justify-start w-full gap-2 p-2 hover:bg-[#372F3D] hover:text-[#F8FAFC] hover:cursor-pointer active:bg-gray-300"
            onClick={handleHomePage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <a href="">Home</a>
          </div>
          <div
            className="flex flex-row items-center justify-start w-full gap-2 p-2 hover:bg-[#372F3D] hover:text-[#F8FAFC] hover:cursor-pointer active:bg-gray-300"
            hover:bg-gray-200
            onClick={handleMyDumpster}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
            </svg>

            <a href="">My Dumpster</a>
          </div>
          <div
            className="flex flex-row items-center justify-start w-full gap-2 p-2 hover:bg-[#372F3D] hover:text-[#F8FAFC] hover:cursor-pointer active:bg-gray-300"
            onClick={handleAddArtwork}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <a href="">Add Artwork</a>
          </div>

          <div
            className="absolute flex flex-row items-center justify-start w-full gap-2 p-2 bottom-8 hover:bg-[#372F3D] hover:text-[#F8FAFC] hover:cursor-pointer active:bg-gray-300"
            onClick={handleSettingsPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
            <a href="">Settings</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDumpsterMobilePopUpSideBar;
