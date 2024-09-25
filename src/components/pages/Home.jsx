import React from "react";

// import header and footer
import Header from "../includes/Header.jsx";
import Footer from "../includes/Footer.jsx";
import Cart from "../pages/Cart.jsx";
import HeaderCarousel from "../includes/HeaderCarousel.jsx";
// import login from "../pages/login.jsx";
// import realme from './media/realme.jpeg';

const Home = () => {
  return (
    <>
      <Header />
      {/* <realme/> */}
      <HeaderCarousel/>
      <Cart />
      {/* <login/> */}
      <Footer />
    </>
  );
};

export default Home;
