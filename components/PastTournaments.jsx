import React from "react";
import style from "@/styles/components/pastTournaments.module.scss";

const PastTournaments = () => {
  const list = [
    {
      image: "/past_1.png",
      label: "Charley Hull Aramco team series champion",
      logo: "/past_logo_5.png",
    },
    {
      image: "/past_2.png",
      label: "John Catlin Saudi Open champion",
      logo: "/past_logo_2.png",
    },
    {
      image: "/past_3.png",
      label: "Alison Lee Aramco team series champion",
      logo: "/past_logo_4.png",
    },
    {
      image: "/past_4.png",
      label: "Denwit Boriboonsub Saudi open champion  ",
      logo: "/past_logo_4.png",
    },
    {
      image: "/past_5.png",
      label: "Othman Al Mulla won men’s Gold Medal in Saudi games",
      logo: "/past_logo_5.png",
    },
  ];

  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <h2 className="section_heading" data-aos="fade-up">
        Past tournaments
      </h2>
      <h4 className={style.heaidng_4} data-aos="fade-up">
        2022’s Tournaments
      </h4>
      <ul className={style.list_container}>
        {list.map((item, index) => (
          <li key={index} className={style.list_item}>
            <img src={item.image} alt="" data-aos="fade-up" />
            <div className={style.text}>
              <p data-aos="fade-up">{item.label}</p>
            </div>
            <div className={style.logo} data-aos="fade-up">
              <img src={item.logo} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastTournaments;
