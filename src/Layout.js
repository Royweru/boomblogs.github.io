import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Footer1 from "./Footer1";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="App">
      <Header title="boomBlogs" />
      <Nav />
      <Outlet />
      <Footer1 />
      <Footer />
    </div>
  );
};

export default Layout;
