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
                    <img
                      src="./arrow_small.svg"
                      alt={t("footer.subscribe_btn")}
                    />
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
