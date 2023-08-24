import React from "react";
import Header from "../components/Home/Header";
import HomeCategory from "../components/Home/HomeCategory";
import HomeProducts from "../components/Home/HomeProducts";
import HomeTeam from "../components/Home/HomeTeam";
import LastestArrivals from "../components/Home/LastestArrivals";
import BlogPosts from "../components/Home/BlogPosts";
import HomeContact from "../components/Home/HomeContact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeCategory />
      <HomeProducts />
      <HomeTeam />
      <LastestArrivals />
      <BlogPosts />
      <HomeContact />
      <Footer />
    </div>
  );
}
