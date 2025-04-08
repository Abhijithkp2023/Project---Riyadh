import React, { useState } from "react";
import LearnStyle from "@/styles/components/learn.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Learn = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation("common");
  const [background, setBackground] = useState({
    image: "/learn_junior.bg.png",
  });

  const learnSections = [
    {
      id: "junior",
      heading: t("learn.junior_heading"),
      para: t("learn.junior_para"),
      image: "./junior.png",
      bgImage: "/learn_junior.bg.png",
    },
    {
      id: "ladies",
      heading: t("learn.ladies_heading"),
      para: t("learn.ladies_para"),
      image: "./ladies.png",
      bgImage: "/learn_ladies.bg.jpg",
    },
    {
      id: "men",
      heading: t("learn.men_heading"),
      para: t("learn.men_para"),
      image: "./men.png",
      bgImage: "/learn_men.bg.jpg",
    },
  ];

  const handleHover = (bgImage) => {
    setBackground((prev) => ({
      image: bgImage,
    }));
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setBackground((prev) => ({
      ...prev,
    }));
    setIsHovered(false);
  };

  return (
    <div
      className={LearnStyle.learn_container}
      id="learn"
      style={{
        "--bg-img": `url(${background.image})`,
      }}
    >
      <div
        className={`${LearnStyle.overlay} ${
          isHovered ? LearnStyle.overlayActive : ""
        }`}
      ></div>
      <div className={LearnStyle.sub_container}>
        <div className={`${LearnStyle.learn_top} mt_130`}>
          <h2 data-aos="fade-up" className="section_heading">
            {t("learn.main_heading")}
          </h2>
          <Link
            href="#"
            className={`${LearnStyle.button_top} dark_button`}
            // data-aos="fade-up"
          >
            <label>{t("learn.read_more_btn")}</label>
            <span>
              <Image
                src="/btn_icon.png"
                width={70}
                height={70}
                alt="button image"
              />
            </span>
          </Link>
        </div>

        <div className={LearnStyle.learn_bottom}>
          {learnSections.map((section) => (
            <div
              key={section.id}
              data-aos="fade-up"
              className={LearnStyle[section.id]}
              onMouseEnter={() => handleHover(section.bgImage)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 data-aos="fade-up">{section.heading}</h3>
              <p data-aos="fade-up">{section.para}</p>
              <div>
                <img src={section.image} alt={section.heading} />
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#"
          className={`${LearnStyle.button_bottom} dark_button mb_130`}
          // data-aos="fade-up"
        >
          <label>{t("learn.read_more_btn")}</label>
          <span>
            <Image
              src="/btn_icon.png"
              width={70}
              height={70}
              alt="button image"
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Learn;
