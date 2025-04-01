import React from "react";
import footerStyle from "@/styles/components/footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <div className={footerStyle.container}>
      <div className={footerStyle.sub_conatiner}>
        <div className={footerStyle.footer_top}>
          <div>
            <h4>{t("footer.newsletter_title")}</h4>
            <p>{t("footer.newsletter_subtitle")}</p>
          </div>
          <form>
            <div className={footerStyle.news_letter}>
              <input type="email" placeholder={t("footer.email_placeholder")} />
              <button className="dark_button">
                <p>{t("footer.subscribe_btn")}</p>
                <div className="button_round">
                  <div>
                    <svg
                width="11"
                height="17"
                viewBox="0 0 11 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3731 8.95553L9.41344 8.07654L1.57473 0.910156L0.650452 1.75385L8.46127 8.94713L0.680212 16.0614L1.61007 16.9102L9.41716 9.82444L9.41902 9.8278L10.3731 8.95553Z"
                  fill="currentColor"
                />
                <path
                  d="M6 8.91002L-9.66342e-08 14.1062L3.57628e-07 3.71387L6 8.91002Z"
                  fill="currentColor"
                />
              </svg>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>

        <div className={footerStyle.decor_container}>
          <img src="./footer_decor.png" alt="footer decoration" />
        </div>

        <div className={footerStyle.footer_bottom}>
          <p>{t("footer.copyright")}</p>

          <div className={footerStyle.logo_container}>
            <img
              src="https://riyadhgolf.e8demo.com/wp-content/uploads/2025/01/footer_img.svg"
              alt="Riyadh Golf Club logo"
            />
          </div>

          <ul>
            <li className="underline_fill">
              <a href="">
                <p>{t("footer.privacy_policy")}</p>
              </a>
            </li>
            <li className="underline_fill">
              <a href="">
                <p>{t("footer.terms_service")}</p>
              </a>
            </li>
            <li className="underline_fill">
              <a href="">
                <p>{t("footer.cookies_settings")}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
