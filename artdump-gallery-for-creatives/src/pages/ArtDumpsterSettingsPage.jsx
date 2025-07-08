import React from "react";

function ArtDumpsterSettingsPage() {
  return (
    <>
      <h1 className="pt-[60px] font-barlow font-bold text-4xl p-2 text-[#372F3D]">
        Settings
      </h1>
      <div className="relative flex flex-col justify-center items-center p-2 font-barlow text-[#372F3D]">
        <div className="w-[280px] min-h-full bg-[#F8FAFC] shadow-lg shadow-black/20">
          <ul className="p-4 font-medium gap-4 flex flex-col justify-center items-start">
            <li className="flex flex-row items-center gap-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
                  clip-rule="evenodd"
                />
              </svg>

              <a href="">Theme</a>
            </li>
            <li className="flex flex-row items-center gap-2 border-t border-black/20 w-full p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <a href="">About Us</a>
            </li>
          </ul>
        </div>
      </div>
      <img
        src="public/assets/grid-line-background-image.svg"
        alt="Background Image"
        className="fixed top-0 object-cover w-screen min-h-screen -z-1"
      />
    </>
  );
}

export default ArtDumpsterSettingsPage;
