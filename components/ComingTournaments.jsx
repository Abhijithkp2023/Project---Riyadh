import React, { useEffect, useState } from "react";
import style from "@/styles/components/comingTournaments.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const ComingTournaments = () => {
  const { t, i18n } = useTranslation("common");
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setIsRTL(i18n.language === "ar");
  }, [i18n.language]);

  const tournamentsData = [
    {
      id: 1,
      bgImage: "/upcoming_1.png",
      logo: "/upcoming_logo_1.png",
      title: t("upcoming_tournaments.tournament1.title"),
      details: [
        {
          icon: "/calendar.svg",
          text: t("upcoming_tournaments.tournament1.date"),
        },
        {
          icon: "/map.svg",
          text: t("upcoming_tournaments.tournament1.location"),
        },
        {
          icon: "/dollar.svg",
          text: t("upcoming_tournaments.tournament1.prize"),
        },
      ],
      buttons: [
        { type: "light", text: t("upcoming_tournaments.buttons.buy_tickets") },
        {
          type: "transparent",
          text: t("upcoming_tournaments.buttons.volunteer"),
        },
      ],
    },
    {
      id: 2,
      bgImage: "/upcoming_2.png",
      logo: "/upcoming_logo_2.png",
      title: t("upcoming_tournaments.tournament2.title"),
      details: [
        {
          icon: "/calendar.svg",
          text: t("upcoming_tournaments.tournament2.date"),
        },
        {
          icon: "/map.svg",
          text: t("upcoming_tournaments.tournament2.location"),
        },
        {
          icon: "/dollar.svg",
          text: t("upcoming_tournaments.tournament2.prize"),
        },
      ],
      buttons: [
        { type: "light", text: t("upcoming_tournaments.buttons.buy_tickets") },
        {
          type: "transparent",
          text: t("upcoming_tournaments.buttons.volunteer"),
        },
      ],
    },
  ];

  return (
    <div className={`${style.container} pt_100`} dir={isRTL ? "rtl" : "ltr"}>
      <div className={style.wrapper}>
        <h4 className="section_heading">{t("upcoming_tournaments.heading")}</h4>
        {tournamentsData.map((tournament) => (
          <div key={tournament.id} className={style.image_container}>
            <img
              src={tournament.bgImage}
              alt={`${tournament.title} background`}
            />

            <div className={style.overlay_container}>
              <div className={style.logo_container} data-aos="fade-up">
                <img src={tournament.logo} alt={`${tournament.title} logo`} />
              </div>
              <div className={style.details_container}>
                <h4 data-aos="fade-up">{tournament.title}</h4>

                <ul className={style.info_list}>
                  {tournament.details.map((detail, index) => (
                    <li key={index} data-aos="fade-up">
                      <img src={detail.icon} alt="" />
                      <span>{detail.text}</span>
                    </li>
                  ))}
                </ul>

                <div className={style.button_container}>
                  {tournament.buttons.map((button, index) => (
                    <Link
                      href="#"
                      className={
                        button.type === "light"
                          ? "light_button"
                          : "transparent_button"
                      }
                      data-aos="fade-up"
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingTournaments;
