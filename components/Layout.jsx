import React, { Children } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import layoutStyle from "@/styles/layout.module.scss"
// import "@/styles/_base.scss";

const Layout = ({children}) => {
  return (
    <div className={`${layoutStyle.layout}`}>
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
