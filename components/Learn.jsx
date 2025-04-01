import React, {useEffect} from "react";
import LearnStyle from "@/styles/components/learn.module.scss";
import { useTranslation } from "react-i18next";

const Learn = () => {
  const { i18n, t } = useTranslation("common");

  return (
    <div className={`${LearnStyle.learn_container}`}>
      <div>
        <div className={`${LearnStyle.sub_container}`}>

          <div className={`${LearnStyle.learn_top} mt_130`}>
            <h2 data-aos="fade-up">
              {t("learn.main_heading")}
            </h2>
            <button data-aos="fade-up" className={`${LearnStyle.button_top} dark_button`}>
              <p>{t("learn.read_more_btn")}</p>
              <div className="button_round">
                <div>
                  <img src="./arrow_small.svg" alt="arrow" />
                </div>
              </div>
            </button>
          </div>

          <div className={`${LearnStyle.learn_bottom}`}>
            <div data-aos="fade-up" className={LearnStyle.junior}>
              <h3 data-aos="fade-up">{t("learn.junior_heading")}</h3>
              <p data-aos="fade-up">
                {t("learn.junior_para")}
              </p>
              <div>
                <img src="./junior.png" alt={t("learn.junior_heading")} />
              </div>
            </div>
            
            <div data-aos="fade-up" className={LearnStyle.ladies}>
              <h3 data-aos="fade-up">{t("learn.ladies_heading")}</h3>
              <p data-aos="fade-up">
                {t("learn.ladies_para")}
              </p>
              <div>
                <img src="./ladies.png" alt={t("learn.ladies_heading")} />
              </div>
            </div>
            
            <div data-aos="fade-up" className={LearnStyle.men}>
              <h3 data-aos="fade-up">{t("learn.men_heading")}</h3>
              <p data-aos="fade-up">
                {t("learn.men_para")}
              </p>
              <div>
                <div>
                  <img src="./men.png" alt={t("learn.men_heading")} />
                </div>
              </div>
            </div>
          </div>

          <button data-aos="fade-up" className={`${LearnStyle.button_bottom} dark_button mb_130`}>
            <p>{t("learn.read_more_btn")}</p>
            <div className="button_round">
              <div>
                <img src="./arrow_small.svg" alt="arrow" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;