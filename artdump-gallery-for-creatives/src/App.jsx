import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtDumpsterHomePage from "./pages/ArtDumpsterHomePage";
import ArtDumpsterNavBar from "./components/ArtDumpsterNavBar";
import ArtDumpsterMyDumpsterPage from "./pages/ArtDumpsterMyDumpsterPage";
import ArtDumpsterAddArtworkPage from "./pages/ArtDumpsterAddArtworkPage";
import ArtDumpsterSettingsPage from "./pages/ArtDumpsterSettingsPage";

function App() {
  return (
    <>
      <ArtDumpsterNavBar className="fixed top-0 z-60" />
      <Routes className="z-50">
        <Route path="/" element={<ArtDumpsterHomePage />}></Route>

        <Route
          path="/MyDumpster"
          element={<ArtDumpsterMyDumpsterPage />}
        ></Route>

        <Route
          path="/AddArtwork"
          element={<ArtDumpsterAddArtworkPage />}
        ></Route>

        <Route path="/Settings" element={<ArtDumpsterSettingsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
