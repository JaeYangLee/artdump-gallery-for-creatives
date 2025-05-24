import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CancelValidatorModal from "./components/CancelValidatorModal";
import UploadImageSuccessModal from "./components/UploadImageSuccessModal";
import ArtDumpsterAddArtworkPage from "./pages/ArtDumpsterAddArtworkPage";
import ArtDumpsterHeroSectionPage from "./pages/ArtDumpsterHeroSectionPage";
import ArtDumpsterMyDumpsterPage from "./pages/ArtDumpsterMyDumpsterPage";
import ArtDumpsterProfilePage from "./pages/ArtDumpsterProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArtDumpsterHeroSectionPage />}></Route>
          <Route
            path="/MyDumpsterPage"
            element={<ArtDumpsterMyDumpsterPage />}
          ></Route>
          <Route
            path="/AddArtworkPage"
            element={<ArtDumpsterAddArtworkPage />}
          ></Route>
          <Route
            path="/ProfilePage"
            element={<ArtDumpsterProfilePage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
