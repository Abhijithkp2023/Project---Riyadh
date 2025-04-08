import React from "react";
import style from "@/styles/components/experienceShare.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ExperienceShare = () => {
  const { t } = useTranslation("common");

  const posts = [
    {
      image: "/share_1.png",
      type: "image",
    },
    {
      image: "/share_2.png",
      type: "video",
    },
    {
      image: "/share_3.png",
      type: "image",
    },
    {
      image: "/share_4.png",
      type: "image",
    },
    {
      image: "/share_5.png",
      type: "video",
    },
    {
      image: "/share_6.png",
      type: "image",
    },
    {
      image: "/share_7.png",
      type: "image",
    },
    {
      image: "/share_8.png",
      type: "video",
    },
    {
      image: "/share_9.png",
      type: "image",
    },
    {
      image: "/share_10.png",
      type: "video",
    },
    {
      image: "/share_11.png",
      type: "video",
    },
    {
      image: "/share_12.png",
      type: "image",
    },
  ];

  return (
    <div className={`${style.container} pb_100 pt_60`}>
      <div className={style.wrapper}>
        <div className={style.icon}>
          <img src="/instagram.svg" alt="" />
        </div>
        <h2 className="section_heading">{t("exp_share.heading")}</h2>
        <ul className={style.list}>
          {posts.map((item, index) => (
            <li key={index}>
              <Link href="#">
                <div className={style.image_container}>
                  <img src={item.image} alt="" className={style.image} />
                  <img
                    className={
                      item.type === "image"
                        ? style.image_type
                        : style.video_type
                    }
                    src={item.type === "image" ? "/images.svg" : "/play.svg"}
                    alt=""
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className={style.hashtag}>#golfsaudi</p>
      </div>
    </div>
  );
};

export default ExperienceShare;
