import React from "react";
import style from "@/styles/components/membershipBadge.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const MembershipBadge = () => {
  const { t } = useTranslation("common");

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h3 className={style.heading}>{t("membership_badge.explore")}</h3>

        <ul className={style.list}>
          <li data-aos="fade-up">
            <Link href="#">
              <span className="para">
                {t("membership_badge.premium_joint")}
              </span>
            </Link>
          </li>
          <li data-aos="fade-up">
            <Link href="#">
              <span className="para">{t("membership_badge.premium")}</span>
            </Link>
          </li>
          <li data-aos="fade-up">
            <Link href="#">
              <span className="para">{t("membership_badge.midweek")}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MembershipBadge;
