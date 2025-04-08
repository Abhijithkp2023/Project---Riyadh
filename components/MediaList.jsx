import React from "react";
import style from "../styles/components/mediaList.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const MediaList = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const currentRoute = router.pathname;

  return (
    <div className={style.container}>
      <ul className={style.list_container}>
        <li className={currentRoute === "/tournaments" ? style.active : ""}>
          <Link href="/tournaments">
            <p className="para" data-aos="fade-up">{t("media_list.tournaments")}</p>
          </Link>
        </li>
        <li className={currentRoute === "/news" ? style.active : ""}>
          <Link href="/news">
            <p className="para" data-aos="fade-up">{t("media_list.news")}</p>
          </Link>
        </li>
        <li className={currentRoute === "/gallery" ? style.active : ""}>
          <Link href="/gallery">
            <p className="para" data-aos="fade-up">{t("media_list.gallery")}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MediaList;
