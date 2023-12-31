import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import Category from "./pages/Category";
import SubCategory1 from "./components/Category/SubCategory1";
import SubCategory2 from "./components/Category/SubCategory2";
import { useState } from "react";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import SubCategory3 from "./components/Category/SubCategory3";
import ThirdProduct from "./components/Category/ThirdProduct";
import { ToastContainer } from "react-toastify";
import Compare from "./components/compare/Compare";

function App() {
  const [lang, setLang] = useState(
    JSON.parse(window.localStorage.getItem("lang")) || "ru"
  );
  const [basket, setBasket] = useState(
    JSON.parse(window.localStorage.getItem("data")) || []
  );
  const [value, setValue] = useState("");

  return (
    <div className="App globalContainer">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
                setBasket={setBasket}
                basket={basket}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
              />
            }
          />
          <Route
            path="/product"
            element={
              <Category
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
                setBasket={setBasket}
                basket={basket}
              />
            }
          />
          <Route
            path="/product/subcategory/:id"
            element={
              <SubCategory1
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
                setBasket={setBasket}
                basket={basket}
              />
            }
          />
          <Route
            path="/product/subcategory/sub/:id"
            element={
              <SubCategory2
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
                setBasket={setBasket}
                basket={basket}
              />
            }
          />
          <Route
            path="/product/subcategory/sub/third/:id"
            element={
              <SubCategory3
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
                setBasket={setBasket}
                basket={basket}
              />
            }
          />
          <Route
            path="/product/subcategory/sub/third/product/:id"
            element={
              <ThirdProduct
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
                setBasket={setBasket}
                basket={basket}
              />
            }
          />
          <Route
            path="/news"
            element={
              <NewsPage
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
              />
            }
          />
          <Route
            path="/singleproduct/:id"
            element={
              <SingleProduct
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
                basket={basket}
                setBasket={setBasket}
              />
            }
          />

          <Route
            path="/compare"
            element={
              <Compare
                lang={lang}
                setLang={setLang}
                value={value}
                setValue={setValue}
                basket={basket}
                setBasket={setBasket}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
