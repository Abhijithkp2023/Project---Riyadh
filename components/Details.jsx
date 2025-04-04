import React, { useEffect } from "react";
import detailsStyle from "@/styles/components/details.module.scss";
import { useTranslation } from "react-i18next";

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
              <button className="dark_button" data-aos="fade-up">
                <p>{t("details.btn_text_course_tour")}</p>
                <div className="button_round">  
                    <svg
                      width="11"
                      height="16"
                      viewBox="0 0 11 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.373 8.04538L9.41338 7.16639L1.57466 8.08026e-08L0.650391 0.84369L8.4612 8.03697L0.680151 15.1513L1.61001 16L9.4171 8.91428L9.41896 8.91765L10.373 8.04538Z"
                        fill="#F5EDE6"
                      />
                    </svg>
                </div>
              </button>
            </li>

            <li>
              <button className="transparent_button" data-aos="fade-up">
                <p>{t("details.btn_text_view_details")}</p>
                <div className="button_round">
                  
                    <svg
                     
                      viewBox="0 0 11 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.373 8.04538L9.41338 7.16639L1.57466 8.08026e-08L0.650391 0.84369L8.4612 8.03697L0.680151 15.1513L1.61001 16L9.4171 8.91428L9.41896 8.91765L10.373 8.04538Z"
                        fill="#F5EDE6"
                      />
                    </svg>
                  </div>
              
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
