import React from "react";
import style from "@/styles/components/nightGolf.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const NightGolf = () => {
  const { t } = useTranslation("common");

  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <div className={style.text_container}>
          <h2  data-aos="fade-up">{t("night_golf.heading")}</h2>
          <p className="para"  data-aos="fade-up">{t("night_golf.para")}</p>
          <Link
            href="#"
            className="dark_button"
             data-aos="fade-up"
          >
            <label>{t("night_golf.btn_text")}</label>
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

        <div className={style.image_container}  data-aos="fade-up">
          <img src="/night_golf.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NightGolf;
