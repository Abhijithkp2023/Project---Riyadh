import React, { useEffect, useState } from "react";
import navStyle from "@/styles/components/navbar.module.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div
      className={`${navStyle.navbar_container} ${
        scrolled ? navStyle.fixed : ""
      }`}
    >
      <div>
        <div className={navStyle.logo_container}>
          <img src="./nav_logo.svg" alt="" />
        </div>
        <ul>
          <li className="underline_fill">Experience Our Activities</li>
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
          <li>عربي</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
