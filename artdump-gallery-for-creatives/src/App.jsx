import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtDumpsterHomePage from "./pages/ArtDumpsterHomePage";
import ArtDumpsterNavBar from "./components/ArtDumpsterNavBar";
import ArtDumpsterMyDumpsterPage from "./pages/ArtDumpsterMyDupmsterPage";
import ArtDumpsterAddArtworkPage from "./pages/ArtDumpsterAddArtworkPage";

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
      </Routes>
    </>
  );
}

export default App;
