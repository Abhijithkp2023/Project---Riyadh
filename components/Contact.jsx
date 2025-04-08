import React from "react";
import style from "@/styles/components/contact.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <div className={style.container}>
      <div className={`${style.wrapper} pb_100 pt_100`}>
        <div className={style.contact_top}>
          <div className={style.address}>
            <h2 className="section_heading" data-aos="fade-up">
              {t("contact.heading_1")}
            </h2>
            <p className="para" data-aos="fade-up">
              {t("contact.para_1")}
            </p>

            <ul className={style.address_list}>
              <li className={style.contact}>
                <div className={style.icon} data-aos="fade-up">
                  <img src="/map.svg" alt="map" />
                </div>
                <p className="para" data-aos="fade-up">
                  {t("contact.address")}
                </p>
              </li>
              <li className={style.contact}>
                <div className={style.icon} data-aos="fade-up">
                  <img src="/call.svg" alt="call" />
                </div>
                <p className="para" data-aos="fade-up">
                  {t("contact.phone_1")}
                </p>
              </li>
              <li className={style.contact}>
                <div className={style.icon} data-aos="fade-up">
                  <img src="/mail.svg" alt="mail" />
                </div>
                <p className="para" data-aos="fade-up">
                  {t("contact.mail_1")}
                </p>
              </li>
            </ul>
          </div>

          <form className={style.form}>
            <ul className={style.form_list}>
              <li className={style.name} data-aos="fade-up">
                <input
                  type="text"
                  placeholder={t("form.first_name")}
                  className={style.first_name}
                />
                <input
                  type="text"
                  placeholder={t("form.last_name")}
                  className={style.last_name}
                />
              </li>
              <li data-aos="fade-up">
                <input type="email" placeholder={t("form.email")} />
              </li>
              <li data-aos="fade-up">
                <input type="number" placeholder={t("form.phone")} />
              </li>
              <li data-aos="fade-up">
                <textarea placeholder={t("form.message")}></textarea>
              </li>
            </ul>
            <Link href="#" className="dark_button" data-aos="fade-up">
              <label>{t("contact.btn_text")}</label>
              <span>
                <Image
                  src="/btn_icon.png"
                  width={70}
                  height={70}
                  alt="button image"
                />
              </span>
            </Link>
          </form>
        </div>

        <div className={style.contact_bottom}>
          <h2 className="section_heading" data-aos="fade-up">
            {t("contact.heading_2")}
          </h2>
          <p className="para" data-aos="fade-up">
            {t("contact.para_2")}
          </p>

          <ul className={style.bottom_list}>
            <li data-aos="fade-up">
              <Link
                href="#"
                className="dark_button"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <label>{t("contact.btn_text")}</label>
                <span>
                  <Image
                    src="/btn_icon.png"
                    width={70}
                    height={70}
                    alt="button image"
                  />
                </span>
              </Link>
            </li>
            <li className={style.contact} data-aos="fade-up">
              <div className={style.icon}>
                <img src="/call.svg" alt="call" />
              </div>
              <p className="para">{t("contact.phone_2")}</p>
            </li>
            <li className={style.contact} data-aos="fade-up">
              <div className={style.icon}>
                <img src="/mail.svg" alt="mail" />
              </div>
              <p className="para">{t("contact.mail_2")}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
