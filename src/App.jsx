import { useState } from 'react'
import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.jsx';
import EmployerLogin from './components/EmployerLogin'
import Postings from './components/Postings';
import { BrowserRouter as Router,Route,Routes,Link, useNavigate } from 'react-router-dom/dist';
import JobForm from './components/Jobform';

import ApplicantDetails from './components/ApplicantDetails';
import CandidateTable from './components/CandidateTable';
import CompanyForm from "./components/CompanyForm";
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoutes from './routes/ProtectedRoutes';
import NavBar from './components/NavBar';


function App() {
  return (<>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthContextProvider>
   
    <Router>
    
    <ProtectedRoutes>
    <NavBar/>
      <Routes>
        <Route path="/login" element={<EmployerLogin/>} />
        <Route path="/" element={<EmployerLogin/>} />
        <Route path="/postings" element={<Postings/>} />
        <Route path="/applicantdetails/:id1/:id2" element={<ApplicantDetails/>} />
        <Route path="/companyform" element={<CompanyForm />} />
        <Route path="/jobform" element={<JobForm />} />
        <Route path ='/editposting/:id' element={<JobForm/>}/>
        <Route path ='/candidatetable/:id' element={<CandidateTable/>}/>
      </Routes>
      </ProtectedRoutes>
    </Router>
   
    </AuthContextProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
