import CancelValidatorModal from "./components/CancelValidatorModal";
import UploadImageSuccessModal from "./components/UploadImageSuccessModal";
import "./index.css";
import ArtDumpsterAddArtworkPage from "./pages/ArtDumpsterAddArtworkPage";
import ArtDumpsterHeroSectionPage from "./pages/ArtDumpsterHeroSectionPage";
import ArtDumpsterMyDumpsterPage from "./pages/ArtDumpsterMyDumpsterPage";

function App() {
  return (
    <>
      <CancelValidatorModal />
      <ArtDumpsterAddArtworkPage />
    </>
  );
}

export default App;
