import React, { useEffect, useRef } from "react";
import eventsStyle from "@/styles/components/events.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/autoplay";

const Events = () => {
  const swiperRefs = useRef([]);

  // Initialize swiper refs
  useEffect(() => {
    swiperRefs.current = swiperRefs.current.slice(0, 3);
  }, []);

  return (
    <div className={eventsStyle.events_container}>
      <div className={eventsStyle.event_sub_container}>
        <div className={eventsStyle.event_text_container}>
          <h2 data-aos="fade-up">Corporate Golf and Private events</h2>
          <p data-aos="fade-up">
            Riyadh Golf Club is a Golf Saudi managed golf facility, employing
            the very best individuals, providing operational excellence and a
            first-class experience to all golf and non-golf visitors.
          </p>

          <button className="dark_button" data-aos="fade-up">
            <p>Read More</p>
            <div className="button_round">
              <div>
                <img src="./arrow_small.svg" />
              </div>
            </div>
          </button>
        </div>
        <div className={eventsStyle.event_img_container}>
         
          <Swiper
            effect={"flip"}
            grabCursor={true}
            modules={[EffectFlip, Autoplay]}
            className={`${eventsStyle.swiper_3d} mySwiper`}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            onSwiper={(swiper) => (swiperRefs.current[0] = swiper)}
          >
            <SwiperSlide className={eventsStyle.slider}>
              <img src="./event_img_1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./event_img_2.png" alt="" />
            </SwiperSlide>
          </Swiper>

          
          <Swiper
            effect={"flip"}
            grabCursor={true}
            modules={[EffectFlip, Autoplay]}
            className={`${eventsStyle.swiper_3d} mySwiper`}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1200}
            loop={true}
            onSwiper={(swiper) => (swiperRefs.current[1] = swiper)}
          >
            <SwiperSlide>
              <img src="./event_img_2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./event_img_3.png" alt="" />
            </SwiperSlide>
          </Swiper>

         
          <Swiper
            effect={"flip"}
            grabCursor={true}
            modules={[EffectFlip, Autoplay]}
            className={`${eventsStyle.swiper_3d} mySwiper`}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1400}
            loop={true}
            onSwiper={(swiper) => (swiperRefs.current[2] = swiper)}
          >
            <SwiperSlide>
              <img src="./event_img_3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./event_img_2.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="img_left">
        <img src="./about_decor_left.png" alt="" />
      </div>
      <div className="img_right">
        <img src="./about_decor_right.png" alt="" />
      </div>
    </div>
  );
};

export default Events;