import React from "react";
import Header from "../components/Home/Header";
import HomeCategory from "../components/Home/HomeCategory";
import HomeProducts from "../components/Home/HomeProducts";
import HomeTeam from "../components/Home/HomeTeam";
import LastestArrivals from "../components/Home/LastestArrivals";
import BlogPosts from "../components/Home/BlogPosts";
import HomeContact from "../components/Home/HomeContact";
import Footer from "../components/Footer";

export default function Home({ lang, setLang }) {
  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <HomeCategory lang={lang} />
      <HomeProducts lang={lang} />
      {/* <HomeTeam lang={lang} /> */}
      {/* <LastestArrivals lang={lang} /> */}
      <BlogPosts lang={lang} />
      <HomeContact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
