import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { LearningSpace } from "./components/LearningSpace/LearningSpace";
import { ImageViewer } from "./components/Images/ImageViewer";
import { MarsHolidays } from "./components/MarsHolidays/MarsHolidays";
import { Menu } from "./components/Menu/Menu";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { AccountForm } from "./components/AccountForm/AccountForm";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { UpdateUserProfile } from "./components/UpdateUserProfile/UpdateUserProfile";
import { TicketForm } from "./components/TicketForm/TicketForm";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { Tickets } from "./components/Tickets/Tickets";
import { ChangePassword } from "./components/ChangePassword/ChangePassword";
import { NewTicketDisplay } from "./components/Ticket/NewTicketDisplay";

function App() {
  return (
    <>
      <nav>
        <Menu />
      </nav>
      <Router>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
        <Routes>
          <Route path="/my-mars-mission" element={<LandingPage />} />
          <Route path="/my-mars-mission/learning-space" element={<LearningSpace />} />
          <Route path="/my-mars-mission/images" element={<ImageViewer />} />
          <Route path="/my-mars-mission/mars-holidays" element={<MarsHolidays />} />
          <Route path="/my-mars-mission/account/login" element={<LoginForm />} />
          <Route path="/my-mars-mission/account/create" element={<AccountForm />} />
          <Route path="/my-mars-mission/account/:id" element={<UserProfile />} />
          <Route path="/my-mars-mission/account/:id/ticket" element={<TicketForm />} />
          <Route path="/my-mars-mission/account/:id/tickets" element={<Tickets />} />
          <Route path="/my-mars-mission/ticket/:id" element={<NewTicketDisplay />} />
          <Route path="/my-mars-mission/account/:id/change-password" element={<ChangePassword />} />
          <Route path="/my-mars-mission/account/:id/update" element={<UpdateUserProfile />} />
          <Route path="/my-mars-mission/account/:id/info" element={<UserInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
