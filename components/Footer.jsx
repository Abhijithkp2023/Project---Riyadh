import React from "react";
import footerStyle from "@/styles/components/footer.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <div className={footerStyle.container}>
      <div className={footerStyle.sub_conatiner}>
        <div className={footerStyle.footer_top}>
          <div>
            <h4 data-aos="fade-up">{t("footer.newsletter_title")}</h4>
            <p data-aos="fade-up">{t("footer.newsletter_subtitle")}</p>
          </div>
          <form data-aos="fade-up">
            <div className={footerStyle.news_letter} data-aos="fade-up">
              <input type="email" placeholder={t("footer.email_placeholder")} data-aos="fade-up"/>
              <Link
                href="#"
                className="dark_button"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <label>{t("footer.subscribe_btn")}</label>
                <span>
                  <Image
                    src="/btn_icon.png"
                    width={70}
                    height={70}
                    alt="button image"
                  />
                </span>
              </Link>
            </div>
          </form>
        </div>

        <div className={footerStyle.decor_container} data-aos="fade-up">
          <img src="/footer_decor.png" alt="footer decoration" />
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
