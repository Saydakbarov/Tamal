import React from "react";
import Header from "../components/Home/Header";
import HomeCategory from "../components/Home/HomeCategory";
import HomeProducts from "../components/Home/HomeProducts";
import BlogPosts from "../components/Home/BlogPosts";
import HomeContact from "../components/Home/HomeContact";
import Footer from "../components/Footer";

export default function Home({
  lang,
  setLang,
  value,
  setValue,
  basket,
  setBasket,
}) {
  return (
    <div>
      <Header lang={lang} setLang={setLang} value={value} setValue={setValue} />
      <HomeCategory lang={lang} />
      <HomeProducts
        lang={lang}
        basket={basket}
        setBasket={setBasket}
        value={value}
        setValue={setValue}
      />
      <BlogPosts lang={lang} />
      <HomeContact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
