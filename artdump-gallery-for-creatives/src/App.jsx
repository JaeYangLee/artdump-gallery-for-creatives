import ArtDumpsterNavBar from "./components/ArtDumpsterNavBar";
import "./index.css";
import ArtDumpsterHomePage from "./pages/ArtDumpsterHomePage";

function App() {
  return (
    <>
      <ArtDumpsterNavBar className="fixed top-0 z-60" />
      <ArtDumpsterHomePage />
    </>
  );
}

export default App;
