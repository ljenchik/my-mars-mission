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
import { ROOT_FOLDER } from "./navigateRoot";

function App() {
  return (
    <>
      <nav>
        <Menu />
      </nav>
      {/* <Router> */}
      <Router basename={process.env.PUBLIC_URL}> 
        <Routes>
          <Route path={ROOT_FOLDER} element={<LandingPage />} />
          <Route path={ROOT_FOLDER + "learning-space"} element={<LearningSpace />} />
          <Route path={ROOT_FOLDER + "images"} element={<ImageViewer />} />
          <Route path={ROOT_FOLDER + "mars-holidays"} element={<MarsHolidays />} />
          <Route path={ROOT_FOLDER + "account/login"} element={<LoginForm />} />
          <Route path={ROOT_FOLDER + "account/create"} element={<AccountForm />} />
          <Route path={ROOT_FOLDER + "account/:id"} element={<UserProfile />} />
          <Route path={ROOT_FOLDER + "account/:id/ticket"} element={<TicketForm />} />
          <Route path={ROOT_FOLDER + "account/:id/tickets"} element={<Tickets />} />
          <Route path={ROOT_FOLDER + "ticket/:id"} element={<NewTicketDisplay />} />
          <Route path={ROOT_FOLDER + "account/:id/change-password"} element={<ChangePassword />} />
          <Route path={ROOT_FOLDER + "account/:id/update"} element={<UpdateUserProfile />} />
          <Route path={ROOT_FOLDER + "account/:id/info"} element={<UserInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
