import React from "react";
import style from "@/styles/components/membershipForm.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const MembershipForm = () => {
  const { t } = useTranslation("common");

  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <div className={style.text_container}>
          <h2 className="section_heading" data-aos="fade-up">
            {t("membershipForm.heading")}
          </h2>
          <p className="para" data-aos="fade-up">
            {t("membershipForm.para")}
          </p>
        </div>
        <form className={style.form_container}>
          <input
            type="text"
            placeholder={t("membershipForm.full_name")}
            data-aos="fade-up"
          />
          <input
            type="text"
            placeholder={t("membershipForm.last_name")}
            data-aos="fade-up"
          />
          <input
            type="number"
            placeholder={t("membershipForm.phone")}
            data-aos="fade-up"
          />
          <input
            type="email"
            placeholder={t("membershipForm.email")}
            data-aos="fade-up"
          />
          <select data-aos="fade-up">
            <option value="" disabled selected>
              {t("membershipForm.membership_type")}
            </option>
            <option value="">{t("membershipForm.single")}</option>
            <option value="">{t("membershipForm.family")}</option>
          </select>
          <textarea
            placeholder={t("membershipForm.comments")}
            rows="5"
            data-aos="fade-up"
          ></textarea>

          <Link
            href="#"
            className="dark_button"
            data-aos="fade-up"
          >
            <label>{t("membershipForm.btn_text")}</label>
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
    </div>
  );
};

export default MembershipForm;
