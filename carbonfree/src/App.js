import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home/Home"
import HowWorks from "./pages/HowWorks/HowWorks";
import CreateAccount from "./pages/Login/CreateAccount";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home />}
          />
          <Route path="como-funciona" element={<HowWorks />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="login/criar-conta" element={<CreateAccount />} />
          <Route exact path="dashboard" element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
