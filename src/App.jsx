import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobPost from './components/JobPost'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.jsx';
import EmployerLogin from './components/EmployerLogin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <JobPost/>
    {/* <EmployerLogin/> */}
    </ThemeProvider>
  )
}

export default App
