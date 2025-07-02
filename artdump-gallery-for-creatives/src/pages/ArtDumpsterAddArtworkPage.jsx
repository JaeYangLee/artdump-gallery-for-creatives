import React from "react";
import ArtDumpsterArtworkUploadCard from "../components/ArtDumpsterArtworkUploadCard";

function ArtDumpsterAddArtworkPage() {
  return (
    <>
      <div className="pt-[56px] font-barlow text-[#372F3D]">
        <header className="p-2">
          <h1 className="text-3xl font-bold text-shadow-md">Add an artwork!</h1>
        </header>

        <div className="">
          <div className="flex flex-col md:flex-row md:items-start p-2 min-w-screen h-full bg-[#F8FAFC]">
            {/* Upload Section */}
            <div className="flex flex-col items-center justify-center w-full bg-gray-200">
              <div className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed h-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="m-2 opacity-60 size-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg>

                <h2>Drop files to upload</h2>
                <h2>
                  or{" "}
                  <a className="text-purple-500 hover:underline hover:cursor-pointer">
                    browse
                  </a>
                </h2>
              </div>
            </div>
            {/* Project Detail Section */}
            <form className="flex flex-col justify-start gap-2 p-2 pt-4 text-sm text-[#372F3D]">
              <div className="flex flex-col">
                <label htmlFor="projectTitle" className="font-bold">
                  Project Title
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter project title..."
                  className="p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="projectTitle" className="font-bold">
                  Description
                </label>
                <textarea
                  required
                  type="text"
                  rows="5"
                  placeholder="Enter project description..."
                  className="p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="projectTitle" className="font-bold">
                  Medium
                </label>
                <select required id="">
                  <option value="">Medium</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="projectTitle" className="font-bold">
                  Tools
                </label>
                <select required id="">
                  <option value="">Medium</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="projectTitle" className="font-bold">
                  Genre
                </label>
                <select required id="">
                  <option value="">Medium</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>

      <img
        src="./assets/grid-line-background-image.svg"
        alt="Background Image"
        className="fixed top-0 object-cover w-screen min-h-screen -z-1"
      />
    </>
  );
}

export default ArtDumpsterAddArtworkPage;
