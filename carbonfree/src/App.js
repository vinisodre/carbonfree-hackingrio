import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          component={() => <Home key={window.location.search} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
