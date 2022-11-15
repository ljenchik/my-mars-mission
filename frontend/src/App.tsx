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
import { TicketDisplay } from "./components/Ticket/ticket";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { Tickets } from "./components/Tickets/Tickets";

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
          <Route path="/account/:id" element={<UserProfile />} />
          <Route path="/account/:id/ticket" element={<TicketForm />} />
          <Route path="/account/:id/tickets" element={<Tickets />} />
          <Route path="/account/:id/update" element={<UpdateUserProfile />} />
          <Route path="/account/:id/info" element={<UserInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
