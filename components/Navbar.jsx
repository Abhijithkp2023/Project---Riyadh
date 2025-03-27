import React, { useEffect, useState } from "react";
import navStyle from "@/styles/components/navbar.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    window.onscroll = changePos;

    function changePos() {
      const handleScroll = () => {
        setScrolled(window.pageYOffset > 70);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleSideBar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <>
      <div
        className={`${navStyle.navbar_container} ${
          scrolled ? navStyle.fixed : ""
        }`}
      >
        <div>
          <div className={navStyle.logo_container}>
            <img src="./nav_logo.svg" alt="" />
          </div>
          <ul className={navStyle.links_container}>
            <li className="underline_fill">
              <a href="">Experience Our Activities</a>
            </li>
            <li className="underline_fill">Membership</li>
            <li className="underline_fill">Learn to Play </li>
            <li className="underline_fill">Corporate Events</li>
            <li className="underline_fill">Media Center</li>
            <li className="underline_fill">Contact Us</li>
          </ul>
          <ul className={navStyle.end_list}>
            <li>
              <button className={navStyle.book_now_btn}>
                <span>Book to Play</span>
              </button>
            </li>
            <li className="underline_fill">
              <a href="">عربي</a>
            </li>
            <li className={navStyle.hamburger}>
              <RxHamburgerMenu size={50} onClick={handleSideBar} />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${navStyle.sidebar} ${
          sidebarActive ? navStyle.active : ""
        }`}
      >
        <ul>
          <li className="underline_fill">
            <a href="#">Experience Our Activities</a>
          </li>
          <li className="underline_fill">
            <a href="#">Membership</a>
          </li>
          <li className="underline_fill">
            <a href="#">Learn to Play</a>
          </li>
          <li className="underline_fill">
            <a href="#">Corporate Events</a>
          </li>
          <li className="underline_fill">
            <a href="#">Media Center</a>
          </li>
          <li className="underline_fill">
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <IoMdClose
          className={navStyle.close_icon}
          size={50}
          onClick={handleSideBar}
        />
      </div>
    </>
  );
};

export default Navbar;
