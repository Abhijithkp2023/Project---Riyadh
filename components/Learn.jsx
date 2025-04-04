import React, { useState } from "react";
import LearnStyle from "@/styles/components/learn.module.scss";
import { useTranslation } from "react-i18next";

const Learn = () => {
  const { t } = useTranslation("common");
  const [background, setBackground] = useState({
    image: "/learn_junior.bg.png",
    opacity: 1
  });

  const learnSections = [
    {
      id: "junior",
      heading: t("learn.junior_heading"),
      para: t("learn.junior_para"),
      image: "./junior.png",
      bgImage: "/learn_junior.bg.png"
    },
    {
      id: "ladies",
      heading: t("learn.ladies_heading"),
      para: t("learn.ladies_para"),
      image: "./ladies.png",
      bgImage: "/learn_ladies.bg.jpg"
    },
    {
      id: "men",
      heading: t("learn.men_heading"),
      para: t("learn.men_para"),
      image: "./men.png",
      bgImage: "/learn_men.bg.jpg"
    }
  ];

  const handleHover = (bgImage) => {
    setBackground(prev => ({
      image: bgImage,       
      opacity: 1            
    }));
  };

  const handleMouseLeave = () => {
    setBackground(prev => ({
      ...prev,
      opacity: 1
    }));
  };

  const ArrowIcon = () => (
    <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.3731 8.95553L9.41344 8.07654L1.57473 0.910156L0.650452 1.75385L8.46127 8.94713L0.680212 16.0614L1.61007 16.9102L9.41716 9.82444L9.41902 9.8278L10.3731 8.95553Z"
        fill="currentColor"
      />
      <path
        d="M6 8.91002L-9.66342e-08 14.1062L3.57628e-07 3.71387L6 8.91002Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div 
      className={LearnStyle.learn_container} 
      id="learn"
      style={{
        backgroundImage: `url(${background.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: background.opacity,
        transition: 'opacity 0.5s ease, background-image 0.5s ease'
      }}
      onMouseLeave={handleMouseLeave}
    >
      
        <div className={LearnStyle.sub_container}>
          <div className={`${LearnStyle.learn_top} mt_130`}>
            <h2 data-aos="fade-up">{t("learn.main_heading")}</h2>
            <button data-aos="fade-up" className={`${LearnStyle.button_top} dark_button`}>
              <p>{t("learn.read_more_btn")}</p>
              <div className="button_round">
                <ArrowIcon />
              </div>
            </button>
          </div>

          <div className={LearnStyle.learn_bottom}>
            {learnSections.map((section) => (
              <div 
                key={section.id} 
                data-aos="fade-up" 
                className={LearnStyle[section.id]}
                onMouseEnter={() => handleHover(section.bgImage)}
              >
                <h3 data-aos="fade-up">{section.heading}</h3>
                <p data-aos="fade-up">{section.para}</p>
                <div>
                  <img src={section.image} alt={section.heading} />
                </div>
              </div>
            ))}
          </div>

          <button data-aos="fade-up" className={`${LearnStyle.button_bottom} dark_button mb_130`}>
            <p>{t("learn.read_more_btn")}</p>
            <div className="button_round">
              <div>
                <ArrowIcon />
              </div>
            </div>
          </button>
        </div>
      
    </div>
  );
};

export default Learn;