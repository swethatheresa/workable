import { useState } from 'react'
import './App.css'
import JobPost from './components/JobPost'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.jsx';
import EmployerLogin from './components/EmployerLogin'
import JobCard from './components/JobCard'
import MyJobs from './components/MyJobs';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom/dist';
import Applyform from './components/Applyform';
import Jobform from './components/Jobform';
import Card from './components/Card';
import Postings from './components/Postings';

function App() {
  const [count, setCount] = useState(0)
  return (<>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<EmployerLogin/>} />
        <Route path="/jobpost" element={<JobPost/>} />
        <Route path="/myjobs" element={<MyJobs/>} />
        <Route path="/applyform" element={<Applyform/>} />
        <Route path="/jobform" element={<Jobform/>} />
        <Route path="/postings" element={<Postings/>} />
        


      </Routes>
    </Router>
    </ThemeProvider>
    </>
  )
}

export default App
