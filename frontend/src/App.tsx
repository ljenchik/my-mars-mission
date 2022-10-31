import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { LearningSpace } from "./components/LearningSpace/LearningSpace";
import { ImageViewer } from "./components/Images/ImageViewer";
import { MarsHolidays } from "./components/MarsHolidays/MarsHolidays";
import { Menu } from "./components/Menu/Menu";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { AccountForm } from "./components/Account/AccountForm";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { UpdateProfile } from "./components/UpdateForm/UpdateProfile";
// import { TicketForm } from "./components/TicketForm/TicketForm";

function App() {
  return (
    <>
      <nav>
        <Menu />
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/learning-space" element={<LearningSpace />} />
          <Route path="/images" element={<ImageViewer />} />
          <Route path="/mars-holidays" element={<MarsHolidays />} />
          <Route path="/account/login" element={<LoginForm />} />
          <Route path="/account/create" element={<AccountForm />} />
          <Route
            path="/account/:id"
            element={
                <UserProfile />
            }
          />
          <Route path="/account/:id/update" element={<UpdateProfile />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
