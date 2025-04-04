import React from "react";
import style from "@/styles/components/padel.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/autoplay";

const Padel = () => {
  return (
    <section className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <div className="event_img_container">
          {[
            ["./padel_1.png", "./event_img_2.png", 3000],
            ["./padel_2.png", "./event_img_3.png", 4000],
            ["./padel_3.png", "./event_img_2.png", 5000],
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
        <div className={style.right_timing_container}>
          <div>
            <h2 className="section_heading">Padel</h2>
          </div>

          <div>
            <p>
              Experience the excitement of Padel Tennis at our state-of-the-art
              courts! Perfect for up to four players, our courts are available
              for booking sessions.
            </p>
          </div>

          <ul className={style.timing_table}>
            <li>
              <div>
                <div className={style.block}>
                  <img src="/clock.svg" alt="" />
                  <p>
                    <span>Sunday</span> to <span>Monday</span> <br />
                    from 12 PM to 8 PM
                  </p>
                </div>
                <div className={style.block}>
                  <img
                    src="/timing_center.svg"
                    alt=""
                    style={{ width: "15px", margin: "auto" }}
                  />
                </div>
                <div className={style.block}>
                  <img src="/clock.svg" alt="" />
                  <p>
                    <span>Sunday</span> to <span>Monday</span> <br />
                    from 12 PM to 8 PM
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div>
                <p>
                  60 Minutes <br />
                  <span>175 SAR</span>
                </p>
              </div>
            </li>
            <li>
              {" "}
              <div>
                <p>
                  90 Minutes <br />
                  <span>235 SAR</span>
                </p>
              </div>
            </li>
            <li>
              {" "}
              <div>
                <p>
                  120 Minutes <br />
                  <span>295 SAR</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Padel;
