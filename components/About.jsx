import React, { useEffect } from "react";
import aboutStyle from "@/styles/components/about.module.scss";
// import "@/styles/_base.module.scss"
import { useTranslation } from "react-i18next";


const About = () => {
  const { i18n, t } = useTranslation("common");

  return (
    <div className={`${aboutStyle.about_container} pt_180 pb_180`}>
      {/* <div className="wrapper"> */}
      <div className={`${aboutStyle.about_sub_container}`}>
        <h2 data-aos="fade-up">
         {t("about.heading")}
        </h2>
        <p data-aos="fade-up">
        {t("about.para")}
        </p>
        <button className="dark_button" data-aos="fade-up">
          <p> {t("about.btn_text")}</p>
          <div className="button_round">
            <div>
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
          </div>
        </button>
      </div>

      {/* <div className="img_left">
        <img src="./about_decor_left.png" alt="" />
      </div>
      <div className="img_right">
        <img src="./about_decor_right.png" alt="" />
      </div> */}

    </div>
  );
};

export default About;
