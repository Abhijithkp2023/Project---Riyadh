import React, { useEffect } from "react";
import detailsStyle from "@/styles/components/details.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Details = () => {
  const { i18n, t } = useTranslation("common");

  return (
    <div className={detailsStyle.container}>
      <div>
        <div className={detailsStyle.text_container} data-aos="fade-up">
          <h3>{t("details.main_heading")}</h3>
        </div>

        <div className={detailsStyle.details}>
          <ul className={detailsStyle.details_top}>
            <li data-aos="flip-left" data-aos-easing="ease-out-cubic">
              <p>18</p>
              <span>{t("details.holes")}</span>
            </li>
            <li data-aos="flip-left" data-aos-easing="ease-out-cubic">
              <p>26,031</p>
              <span>{t("details.yards")}</span>
            </li>
            <li data-aos="flip-left" data-aos-easing="ease-out-cubic">
              <p>72</p>
              <span>{t("details.par")}</span>
            </li>
          </ul>

          <ul className={detailsStyle.details_bottom}>
            <li>
              <Link
                href="#"
                className="dark_button"
                // data-aos="fade-up"
              >
                <label>{t("details.btn_text_course_tour")}</label>
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

            <li>
              <Link
                href="#"
                className="transparent_button"
                // data-aos="fade-up"
              >
                <label>{t("details.btn_text_view_details")}</label>
                <span>
                  <Image
                    src="/arrow.png"
                    width={70}
                    height={70}
                    alt="button image"
                  />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
