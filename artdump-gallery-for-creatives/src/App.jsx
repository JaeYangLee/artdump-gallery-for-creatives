import "./index.css";
import CancelValidatorModal from "./components/CancelValidatorModal";
import UploadImageSuccessModal from "./components/UploadImageSuccessModal";
import ArtDumpsterAddArtworkPage from "./pages/ArtDumpsterAddArtworkPage";
import ArtDumpsterHeroSectionPage from "./pages/ArtDumpsterHeroSectionPage";
import ArtDumpsterMyDumpsterPage from "./pages/ArtDumpsterMyDumpsterPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element:}
]);

function App() {
  return (
    <>
      <ArtDumpsterHeroSectionPage />
    </>
  );
}

export default App;
