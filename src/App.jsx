import { useState } from 'react'
import './App.css'
import JobPost from './components/JobPost'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.jsx';
import EmployerLogin from './components/EmployerLogin'
import JobCard from './components/JobCard'
import MyJobs from './components/MyJobs';
import Applyform from './components/Applyform';
function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Applyform/>
    <MyJobs /> 
    {/* <JobPost/> */}
    {/* <EmployerLogin/> */}
    </ThemeProvider>
  )
}

export default App
