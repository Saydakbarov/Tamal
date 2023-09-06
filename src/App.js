import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import Category from "./pages/Category";
import SubCategory1 from "./components/Category/SubCategory1";
import SubCategory2 from "./components/Category/SubCategory2";

function App() {

  
  return (
    <div className="App globalContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/subcategory/:id" element={<SubCategory1 />} />
          <Route path="/category/subcategory/sub/:id" element={<SubCategory2 />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
