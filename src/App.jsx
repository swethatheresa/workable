import { useState } from 'react'
import './App.css'
import JobPost from './components/JobPost'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.jsx';
import EmployerLogin from './components/EmployerLogin'
import Postings from './components/Postings';
import MyJobs from './components/MyJobs';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom/dist';
import Applyform from './components/Applyform';
import JobForm from './components/Jobform';

import ApplicantDetails from './components/ApplicantDetails';
import CandidateTable from './components/CandidateTable';
import CompanyForm from "./components/CompanyForm";
import Home from "./components/Home";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  return (<>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthContextProvider>
    
    <Router>
    <ProtectedRoutes>
      <Routes>
        <Route path="/login" element={<EmployerLogin/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobpost" element={<JobPost/>} />
        <Route path="/myjobs" element={<MyJobs/>} />
        <Route path="/applyform" element={<Applyform/>} />
        <Route path="/postings" element={<Postings/>} />
        <Route path="/applicantdetails" element={<ApplicantDetails/>} />
        <Route path="/candidatetable" element={<CandidateTable/>} />
        <Route path="/companyform" element={<CompanyForm />} />
        <Route path="/jobform" element={<JobForm />} />
      </Routes>
      </ProtectedRoutes>
    </Router>
   
    </AuthContextProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
