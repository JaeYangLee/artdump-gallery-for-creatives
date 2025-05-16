import React from "react";
import ArtDumpsterBrandNameLogo from "../assets/ArtDumpsterBrandNameLogo";

function ArtDumpNavBar() {
  return (
    <>
      {/* Body */}
      <div className="bg-[#F8FAFC]">
        {/* NavBar */}
        <div className="fixed top-0 pr-12 pl-12 flex flex-row items-center w-full h-[56px] border shadow-md z-50">
          {/* Right Section */}
          <div className="w-1/3 text-[14px] border-transparent hover:cursor-pointer hover:-translate-y-[4px] transition-all duration-300 ease-linear">
            <ArtDumpsterBrandNameLogo />
          </div>

          {/* Middle Section */}
          <div className="w-1/3 p-4 flex flex-row justify-center items-center gap-8 font-barlow font-medium text-[14px] text-[#372F3D]">
            <div className="px-2 py-2 transform flex flex-col items-center border border-transparent rounded hover:bg-[#372F3D] hover:text-[#F8FAFC] hover:cursor-pointer hover:w-auto hover:h-auto hover:border hover:-translate-y-[2px] transition-all duration-300 ease-linear active:bg-[#2C2631] active:text-[#959697]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>

              <button>Home</button>
            </div>
            <div className="px-2 py-2 transform flex flex-col items-center border border-transparent rounded hover:bg-[#372F3D] hover:text-[#F8FAFC] hover:cursor-pointer hover:w-auto hover:h-auto hover:border hover:-translate-y-[2px] transition-all duration-300 ease-linear active:bg-[#2C2631] active:text-[#959697]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
              </svg>

              <button>My dumpster</button>
            </div>
            <div className="px-2 py-2 transform flex flex-col items-center border border-transparent rounded hover:bg-[#372F3D] hover:text-[#F8FAFC] hover:cursor-pointer hover:w-auto hover:h-auto hover:border hover:-translate-y-[2px] transition-all duration-300 ease-linear active:bg-[#2C2631] active:text-[#959697]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <button>Add artwork</button>
            </div>
            <div className="px-2 py-2 transform flex flex-col items-center border border-transparent rounded hover:bg-[#372F3D] hover:text-[#F8FAFC] hover:cursor-pointer hover:w-auto hover:h-auto hover:border hover:-translate-y-[2px] transition-all duration-300 ease-linear active:bg-[#2C2631] active:text-[#959697]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>

              <button>Profile</button>
            </div>
          </div>
          {/* Left Section */}
          <div className="w-1/3 flex justify-end text-[14px] font-barlow font-medium text-[#372F3D]">
            <div className="px-2 py-2 transform flex flex-col items-center border border-transparent rounded hover:bg-[#372F3D] hover:text-[#F8FAFC] hover:cursor-pointer hover:w-auto hover:h-auto hover:border hover:-translate-y-[2px] transition-all duration-300 ease-linear active:bg-[#2C2631] active:text-[#959697]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <button>Settings</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtDumpNavBar;
