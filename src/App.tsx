import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home";
import { LearningSpace } from "./components/LearningSpace/LearningSpace";
import { ImageViewer } from "./components/Images/ImageViewer";
import { MarsHolidays } from "./components/MarsHolidays/MarsHolidays";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Menu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-space" element={<LearningSpace />} />
          <Route path="/images" element={<ImageViewer />} />
          <Route path="/mars-holidays" element={<MarsHolidays />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
