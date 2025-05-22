import ArtDumpNavBar from "../components/ArtDumpNavBar";

function ArtDumpsterAddArtworkPage() {
  return (
    <>
      {/* NavBar */}
      <div className="fixed top-0 left-0 w-full h-[56px] bg-[#F8FAFC] z-50">
        <ArtDumpNavBar />
      </div>
      {/* Body */}
      <div>
        {/* Header */}
        <div>
          <h1 className="pl-8 pt-[64px] font-barlow font-semibold text-[#372F3D] text-[56px] text-shadow-md z-50">
            Add an artwork!
          </h1>
          {/* Upload Artwork Container */}
          <div className="m-16 mt-0 mb-0 w-[1298px] h-[570px] flex flex-row items-center bg-[#F8FAFC] font-barlow shadow-xl">
            {/* Right Section */}
            <div className="m-4 w-[58%] h-[500px] flex flex-col justify-center items-center border-4 border-dashed border-gray-500/50 bg-[#EEF0F2] hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="0.5"
                stroke="currentColor"
                className="w-[150px] h-[150px] text-[#372F3D]/50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
              </svg>
              <h2 className="text-xl text-[#372F3D]">Drop files to upload</h2>
              <div className="flex flex-row gap-1">
                <h2 className="text-xl text-[#372F3D]">or</h2>
                <h2 className="text-xl text-purple-500 hover:text-[#7939cc] hover:underline active:text-[#5b2b99]">
                  upload
                </h2>
              </div>
            </div>
            {/* Left Section */}
            <div className="m-5 mt-2 self-start text-[14px]">
              <h3 className="m-1 font-semibold">Project Title</h3>
              <input
                type="text"
                placeholder="Enter project title..."
                className="p-2 w-[459px] h-[30px] border border-[#372F3D]/30 rounded-md bg-[#EEF0F2] focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <h3 className="m-1 font-semibold">Description</h3>
              <textarea
                type="text"
                placeholder="Describe the inspiration behind your project..."
                className="p-2 w-[459px] h-[200px] items-start border border-[#372F3D]/30 rounded-md bg-[#EEF0F2] focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <h3 className="m-1 font-semibold">Art Medium</h3>
              <select
                name="Art medium"
                id="Art medium"
                className="w-[459px] h-[30px] border border-[#372F3D]/30 rounded-md bg-[#EEF0F2] focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="Select an art medium...">
                  Select an art medium...
                </option>
                <option value="Painting">Painting</option>
                <option value="Drawing">Drawing</option>
                <option value="Digital Art">Digital Art</option>
                <option value="Sculpture">Sculpture</option>
              </select>
              <h3 className="m-1 font-semibold">Art Tool</h3>
              <select
                name="Art medium"
                id="Art medium"
                className="w-[459px] h-[30px] border border-[#372F3D]/30 rounded-md bg-[#EEF0F2] focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option
                  value="Select an art medium..."
                  className="text-[#372F3D]/50"
                >
                  Select your medium of expression...
                </option>
                <option value="Painting">Pencil</option>
                <option value="Drawing">Stylus & Drawing tablet</option>
                <option value="Digital Art">Brush</option>
                <option value="Sculpture">Chisel</option>
              </select>
              <h3 className="m-1 font-semibold">Art Style</h3>
              <select
                name="Art medium"
                id="Art medium"
                className="w-[459px] h-[30px] border border-[#372F3D]/30 rounded-md bg-[#EEF0F2] focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="Select an art medium...">
                  Select an art style...
                </option>
                <option value="Painting">Realism</option>
                <option value="Drawing">Anime</option>
                <option value="Digital Art">Abstract</option>
                <option value="Sculpture">Surrealism</option>
              </select>
              {/* Buttons */}
              <div className="mt-4 flex flex-row justify-end items-end gap-2 text-[14px]">
                <button className="p-2 w-[101px] bg-[#9747FF] text-amber-50 font-semibold border rounded-md transition-all duration-100 ease-in hover:bg-[#7939cc] active:bg-[#5b2b99]">
                  Upload
                </button>
                <button className="p-2 w-[101px] bg-[#EEF0F2] border-gray-500/50 text-[#372F3D]/50 font-semibold border rounded-md transition-all duration-100 ease-in hover:bg-[rgb(200,202,204)] active:bg-[rgb(161,163,165)] active:text-[#EEF0F2]">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Background SVG */}
      <img
        src="/src/assets/Grid.svg"
        className="fixed pt-[56px] top-0 left-0 w-screen h-screen object-cover -z-10"
        alt="background"
      />
    </>
  );
}

export default ArtDumpsterAddArtworkPage;
