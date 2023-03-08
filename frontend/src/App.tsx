import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Quiz } from "./components/LearningSpace/Quiz";
import { ImageViewer } from "./components/MarsImages/ImageViewer";
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
import { RoverInfo } from "./components/LearningSpace/RoverInfo";
import { SpaceInfo } from "./components/LearningSpace/SpaceInfo";
import { LearningSpace } from "./components/LearningSpace/LearningSpace";
import { OpportunityImages } from "./components/MarsImages/Opportunity/OpportunityImages";
import { CuriosityImages } from "./components/MarsImages/Curiosity/CuriosityImages";
import { PerseveranceImages } from "./components/MarsImages/Perseverance/PerseveranceImages";

function App() {
  return (
    <>
      <Router basename={process.env.REACT_APP_ROOT_FOLDER}>
        <nav>
          <Menu />
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/learning-space" element={<LearningSpace />}
          />
          <Route
            path="/learning-space/space-info" element={<SpaceInfo />}
          />
          <Route
            path="/learning-space/rover-info" element={<RoverInfo />}
          />
          <Route
            path="/images/opportunity" element={<OpportunityImages />}
          />
           <Route
            path="/images/curiosity" element={<CuriosityImages />}
          />
           <Route
            path="/images/perseverance" element={<PerseveranceImages />}
          />
          <Route
            path="/learning-space/quiz" element={<Quiz />}
          />
          <Route path="/images" element={<ImageViewer minDate="2021-02-18" roverName="Perseverance" />} />
          
          <Route
            path="/mars-holidays" element={<MarsHolidays />}
          />
          <Route path="/account/login" element={<LoginForm />} />
          <Route
            path="/account/create" element={<AccountForm />}
          />
          <Route path="/account/:id" element={<UserProfile />} />
          <Route
            path="/account/:id/ticket" element={<TicketForm />}
          />
          <Route
            path="/account/:id/tickets" element={<Tickets />} />
          <Route
            path="/ticket/:id" element={<NewTicketDisplay />} />
          <Route
            path="/account/:id/change-password" element={<ChangePassword />} />
          <Route
            path="/account/:id/update" element={<UpdateUserProfile />} />
          <Route
            path="/account/:id/info" element={<UserInfo />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
