import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App globalContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
