import React from "react";
import ArtDumpsterArtworkUploadCard from "../components/ArtDumpsterArtworkUploadCard";

function ArtDumpsterAddArtworkPage() {
  return (
    <>
      <div className="pt-[56px] font-barlow text-[#372F3D]">
        <header className="p-2 lg:pt-3">
          <h1 className="text-3xl font-bold text-shadow-md md:text-4xl lg:text-5xl">
            Add an artwork!
          </h1>
        </header>

        <div className="relative max-w-screen max-h-screen lg:h-[520px] p-2 lg:p-4 xl:p-4 lg:pt-0 xl:pt-0">
          <div className="flex flex-col md:flex-row md:items-start p-2 lg:p-3 w-full h-auto xl:h-[82vh] bg-[#F8FAFC] shadow-lg shadow-black/30">
            {/* Upload Section */}
            <div className="flex flex-col items-center justify-center w-full bg-gray-200 h-80 md:w-300 md:h-124 lg:h-176 lg:w-380 xl:h-full">
              <div className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="m-2 opacity-60 size-10 lg:size-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg>

                <h2 className="lg:text-2xl">Drop files to upload</h2>
                <h2 className="lg:text-2xl">
                  or
                  <a className="pl-1 lg:pl-2 text-purple-500 hover:underline hover:cursor-pointer lg:text-2xl">
                    browse
                  </a>
                </h2>
              </div>
            </div>
            {/* Project Detail Section */}
            <form
              action="/submit"
              className="flex flex-col justify-start gap-2 p-2  lg:p-3 pt-4 text-sm text-[#372F3D] w-full"
            >
              <div className="flex flex-col lg:text-lg">
                <label htmlFor="projectTitle" className="font-bold ">
                  Project Title
                </label>
                <input
                  required
                  id="projectTitle"
                  type="text"
                  placeholder="Enter project title..."
                  className="p-2 bg-gray-200 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline valid:border-green-500"
                />
              </div>
              <div className="flex flex-col lg:text-lg">
                <label htmlFor="projectDescription" className="font-bold">
                  Description
                </label>
                <textarea
                  required
                  id="projectDescription"
                  type="text"
                  rows="5"
                  placeholder="Enter project description..."
                  className="p-2 bg-gray-200 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline  valid:border-green-500"
                />
              </div>
              <div className="flex flex-col lg:text-lg">
                <label htmlFor="projectMedium" className="font-bold">
                  Medium
                </label>
                <select
                  required
                  id="projectMedium"
                  className="p-2 text-[#372F3D] bg-gray-200 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline  valid:border-green-500"
                >
                  <option value="">Select a medium</option>
                  <option value="">Example 1</option>
                </select>
              </div>
              <div className="flex flex-col lg:text-lg">
                <label htmlFor="projectTool" className="font-bold">
                  Tools
                </label>
                <select
                  required
                  id="projectTool"
                  className="p-2 text-[#372F3D] bg-gray-200 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline  valid:border-green-500"
                >
                  <option value="">Select a tool</option>
                  <option value="">Example 1</option>
                </select>
              </div>
              <div className="flex flex-col lg:text-lg">
                <label htmlFor="projectGenre" className="font-bold">
                  Genre
                </label>
                <select
                  required
                  id="projectGenre"
                  className="p-2 text-[#372F3D] bg-gray-200 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline  valid:border-green-500"
                >
                  <option value="">Select a genre</option>
                  <option value="">Example 1</option>
                </select>
              </div>
              <div className="flex flex-row items-end justify-end gap-2 lg:text-lg lg:pt-8 xl:pt-4">
                <button
                  type="submit"
                  className="p-2 font-bold text-white bg-purple-500 border border-transparent rounded-lg "
                >
                  Submit
                </button>
                <button className="p-2 border border-gray-300 rounded-lg">
                  Cancel
                </button>
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
