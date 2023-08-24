import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App globalContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
