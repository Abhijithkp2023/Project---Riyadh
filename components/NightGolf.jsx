import React from "react";
import style from "@/styles/components/nightGolf.module.scss";
import { useTranslation } from "react-i18next";

const NightGolf = () => {
  const { t } = useTranslation("common");

  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <div className={style.text_container}>
          <h2>{t("night_golf.heading")}</h2>
          <p className="para">{t("night_golf.para")}</p>
          <button className="dark_button" data-aos="fade-up">
            <p>{t("night_golf.btn_text")}</p>
            <div className="button_round">
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
          </button>
        </div>

        <div className={style.image_container}>
          <img src="/night_golf.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NightGolf;
