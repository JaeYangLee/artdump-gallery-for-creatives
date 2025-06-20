import ArtDumpNavBar from "../components/ArtDumpNavBar.jsx";
import ArtDumpsterLogoIcon from "../assets/ArtDumpsterLogoIcon.jsx";

function ArtDumpsterHeroSectionPage() {
  return (
    <>
      {/* NavBar */}
      <div className="fixed top-0 left-0 w-full h-[56px] bg-[#F8FAFC] z-50">
        <ArtDumpNavBar />
      </div>
      {/* Body */}
      <div className="flex flex-row">
        {/* Right Section*/}
        <div className="pb-20 pl-8 pt-[56px] flex flex-col justify-center items-start bg-[#F8FAFC] w-[64%] h-screen [box-shadow:7px_1px_32px_8px_rgba(0,0,0,0.14)]">
          <div className="flex flex-row">
            <h1 className="font-barlow font-semibold text-[60px] text-[#372F3D]">
              Welcome to
            </h1>
            <h1 className="pl-2 font-barlow font-black text-[60px] text-[#372F3D]">
              ArtDumpster*!
            </h1>
          </div>
          <h3 className="pr-48 pl-4 font-barlow text-[16px] text-[#372F3D]">
            ArtDumpster is a digital space where raw creativity meets
            self-expression! Whether you're a seasoned artist or just starting
            out, toss in your sketches, finished pieces, or messy masterpieces
            because every art dump deserves a spotlight. Let’s celebrate
            unfiltered art, together!
          </h3>
        </div>
        {/* Left Section*/}
        <div className="m-0 p-0 w-120 pl-10 flex justify-center items-center hover:cursor-pointer hover:-translate-y-[12px] transition-all duration-200 ease-linear">
          <ArtDumpsterLogoIcon />
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

export default ArtDumpsterHeroSectionPage;
