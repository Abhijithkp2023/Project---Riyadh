import React from "react";
import style from "@/styles/components/proshop.module.scss";
import { useTranslation } from "react-i18next";

const Proshop = () => {
  const { t } = useTranslation("common");
  return (
    <div className={`${style.container} pb_200 pt_200`}>
      <div className={style.wrapper}>
        <div className={style.text_container}>
          <h2
            className="section_heading"
            style={{ color: "white" }}
            data-aos="fade-up"
          >
            {t("proshop.heading")}
          </h2>
          <p className="para" data-aos="fade-up">
            {t("proshop.para")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proshop;
