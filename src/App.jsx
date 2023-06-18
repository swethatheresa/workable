import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom/dist";
import Applyform from "./components/Applyform";
import Register from "./components/Register";
import Home from "./components/Home";
import MyJobs from "./components/MyJobs";
import JobPost from "./components/JobPost";
import { AuthContextProvider } from "./context/AuthContext";
import SeekerLogin from "./components/SeekerLogin";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SeekerLogin />} />
              <Route path="/register" element={<Register/> } />
              <Route path="/job" element={<JobPost />} />
              <Route path="/apply" element={<Applyform />} />
              <Route path="/myjobs" element={<MyJobs />} />
            </Routes>
          </Router>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
