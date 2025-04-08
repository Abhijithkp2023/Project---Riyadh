import React, { useEffect, useState } from "react";
import style from "@/styles/components/pastTournaments.module.scss";
import { useTranslation } from "react-i18next";

const PastTournaments = () => {
  const { t } = useTranslation("common");
  const [isRTL, setIsRTL] = useState(false);

  const list = [
    {
      image: "/past_1.png",
      labelKey: "past_tournaments.label1",
      logo: "/past_logo_5.png",
    },
    {
      image: "/past_2.png",
      labelKey: "past_tournaments.label2",
      logo: "/past_logo_2.png",
    },
    {
      image: "/past_3.png",
      labelKey: "past_tournaments.label3",
      logo: "/past_logo_4.png",
    },
    {
      image: "/past_4.png",
      labelKey: "past_tournaments.label4",
      logo: "/past_logo_4.png",
    },
    {
      image: "/past_5.png",
      labelKey: "past_tournaments.label5",
      logo: "/past_logo_5.png",
    },
  ];

  return (
    <div
      className={`${style.container} pb_100 pt_100`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="section_heading" data-aos="fade-up">
        {t("past_tournaments.heading")}
      </h2>
      <h4 className={style.heaidng_4} data-aos="fade-up">
        {t("past_tournaments.year_heading")}
      </h4>
      <ul className={style.list_container}>
        {list.map((item, index) => (
          <li key={index} className={style.list_item}>
            <img src={item.image} alt="" data-aos="fade-up" />
            <div className={style.text}>
              <p data-aos="fade-up">{t(item.labelKey)}</p>
            </div>
            <div className={style.logo} data-aos="fade-up">
              <img src={item.logo} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastTournaments;
