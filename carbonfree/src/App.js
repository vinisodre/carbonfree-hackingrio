import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home/Home"
import HowWorks from "./pages/HowWorks/HowWorks";

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
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
