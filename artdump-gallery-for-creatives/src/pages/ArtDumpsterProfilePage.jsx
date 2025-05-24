import React from "react";
import { Link } from "react-router-dom";
import ArtDumpNavBar from "../components/ArtDumpNavBar";

function ArtDumpsterProfilePage() {
  return (
    <>
      {/* Nav Bar */}
      <div className="fixed top-0 left-0 w-full h-[56px] bg-[#F8FAFC] z-50">
        <ArtDumpNavBar />
      </div>
      {/* Body */}
      <div className="p-2">
        {/* Header */}
        <div className="pl-8 pt-[64px] font-barlow font-semibold text-[#372F3D] text-[56px] text-shadow-md z-50">
          Profile
        </div>
        {/* Container */}
        <div className="m-16 mt-0 mb-0 w-[1298px] h-[570px] flex flex-row items-center bg-[#F8FAFC] font-barlow shadow-xl">
          {/* Right Section */}
          <div className="p-10 flex flex-col justify-center items-center w-[40%] h-full bg-[#EEF0F2]">
            <img
              src="src/assets/shikamaruImageSample.jpg"
              alt="User Profile Picture"
              className="w-[200px] h-[200px] border border-transparent rounded-full object-cover"
            />
            <h2 className="pt-2 text-[20px] font-bold">Artist Name</h2>
            <h2 className="text-[20px]">Real Name</h2>
            {/* User Details */}
            <div>
              {/* User Email */}
              <div className="pt-10 flex flex-row justify-start items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#372F3D"
                  className="w-[30px] h-[30px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <h2>email@email.com</h2>
              </div>
              {/* Use Location */}
              <div className="pt-2 flex flex-row justify-start items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[30px] h-[30px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <h2>Location, Location City</h2>
              </div>
            </div>
            <button className="mt-25 p-2 w-full bg-[#E5E6E9] font-medium border border-[#372F3D]/20 rounded-md shadow-md hover:bg-[#c8c9cc] active:bg-[#a0a1a3]">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      {/* Grid Background SVG */}
      <img
        src="/src/assets/Grid Line Background.svg"
        className="fixed pt-[56px] top-0 left-0 w-screen h-screen object-cover -z-10 opacity-60"
        alt="background"
      />
    </>
  );
}

export default ArtDumpsterProfilePage;
