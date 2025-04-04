import React from "react";
import style from "@/styles/components/dining.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/autoplay";

const Dining = () => {
  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <div className={style.text_container}>
          <h2 className="section_heading">Dining</h2>
          <p className="para">
            Enjoy a relaxed meal at our clubhouse dining area, where casual
            dining meets exceptional service. Open Tuesday to Thursday from 6 AM
            to 10 PM, our menu offers a variety of delightful options. For your
            convenience, our beverage cart is available from 6 AM to 6 PM. Come
            savor delicious food and refreshing drinks in a welcoming
            atmosphere.
          </p>
        </div>

        <div className="event_img_container">
          {[
            ["./dining_1.png", "./event_img_2.png", 3000],
            ["./dining_2.png", "./event_img_3.png", 4000],
            ["./dining_3.png", "./event_img_2.png", 5000],
          ].map(([img1, img2, delay], index) => (
            <Swiper
            //   key={`${direction}-${index}`}
              effect="flip"
              grabCursor
              modules={[EffectFlip, Autoplay]}
              className="mySwiper"
              autoplay={{ delay, disableOnInteraction: false }}
            //   dir={direction}
              speed={3000}
              loop
            >
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
            </Swiper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dining;
