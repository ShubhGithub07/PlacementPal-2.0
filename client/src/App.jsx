import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Jobs } from "./pages/Jobs.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Notification } from "./pages/Notification.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Resume } from "./pages/Resume.jsx";
import { CompanyProfile } from "./pages/CompanyProfile.jsx";
import { JobDetailed } from "./pages/JobDetailed.jsx";
import { UserProfile } from "./pages/UserProfile.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/companyprofile" element={<CompanyProfile />} />
          <Route path="/jobdetailed" element={<JobDetailed />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
