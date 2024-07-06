import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Jobs } from "./pages/Jobs.jsx";
import { JobPostingPage } from "./pages/JobPostingPage.jsx";
import { Dashboard, IfCanLogged, IfEmpLogged } from "./pages/Dashboard.jsx";
import { Notification } from "./pages/Notification.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Resume } from "./pages/Resume.jsx";
import { CompanyProfile } from "./pages/CompanyProfile.jsx";
import { JobDetailed } from "./pages/JobDetailed.jsx";
import { UserProfile } from "./pages/UserProfile.jsx";
import { ViewApplicants } from "./pages/ViewApplicants.jsx";
import { NotFoundpage } from "./pages/NotFoundpage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobposting" element={<JobPostingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cdashboard" element={<IfCanLogged />} />
          <Route path="/edashboard" element={<IfEmpLogged />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/companyprofile" element={<CompanyProfile />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/applicationcard/:id" element={<ViewApplicants />} />
          <Route path="/404" element={<NotFoundpage />} />
          <Route path="/job/:id" element={<JobDetailed />} />
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
