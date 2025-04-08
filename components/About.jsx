import React, { useEffect } from "react";
import aboutStyle from "@/styles/components/about.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const About = ({ content }) => {
  const { t } = useTranslation("common");

  useEffect(()=> {
    console.log(window.devicePixelRatio ,"dpi"); // usually 1, 1.5, 2, 3...
  })

  return (
    <div className={`${aboutStyle.about_container} pt_180 pb_180`}>
      <div className={`${aboutStyle.about_sub_container}`}>
        <h2 data-aos="fade-up" className="section_heading">{t(content.heading)}</h2>
        <p data-aos="fade-up" className="para">{t(content.para)}</p>
        {content.buttonText && (
          <Link
            href="#"
            className="dark_button"
            data-aos="fade-up"
          >
            <label>{t(content.buttonText)}</label>
            <span>
              <Image
                src="/btn_icon.png"
                width={70}
                height={70}
                alt="button image"
              />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default About;
