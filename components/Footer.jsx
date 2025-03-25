import React from "react";
import footerStyle from "@/styles/components/footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyle.container}>
      <div className={footerStyle.sub_conatiner}>
        <div className={footerStyle.footer_top}>
          <div>
            <h4>Riyadh Golf Newsletter</h4>
            <p>Be the first to know about news and events.</p>
          </div>
          <form action="">
            <div className={footerStyle.news_letter}>
              <input type="email" placeholder="Email adres" />
              <button className="dark_button">
                <p>Subscribe</p>
                <div className="button_round">
                  <div>
                    <img src="./arrow_small.svg" />
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>

        <div className={footerStyle.decor_container}>
          <img src="./footer_decor.png" alt="" />
        </div>

        <div className={footerStyle.footer_bottom}>
          <p>Copyright © 2024 Riyadh Golf Club. All Rights Reserved.</p>
          <div className={footerStyle.logo_container}>
            <img
              src="https://riyadhgolf.e8demo.com/wp-content/uploads/2025/01/footer_img.svg"
              alt=""
            />
          </div>

          <ul>
            <li className="underline_fill">
              <a href="">
                <p>Privacy Policy</p>
              </a>
            </li>
            <li className="underline_fill">
              <a href="">
                <p>Terms of Service</p>
              </a>
            </li>
            <li className="underline_fill">
              <a href="">
                <p>Cookies Settings</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
