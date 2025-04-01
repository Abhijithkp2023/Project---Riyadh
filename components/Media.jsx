import React, { useEffect, useRef } from "react";
import mediaStyle from "@/styles/components/media.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import facilitiesStyle from "@/styles/components/facilities.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { useTranslation } from "react-i18next";

const Media = () => {
  const swiperRef = useRef(null);
  const { t } = useTranslation("common");

  return (
    <div className={`${mediaStyle.media_container} pt_180 pb_180`}>
      <div className={mediaStyle.wrapper_container}>
        <div>
          <h2 data-aos="fade-up">{t("media.media_center")}</h2>
          <button className="read_more_button" data-aos="fade-up">
            <p>{t("media.read_more_btn")}</p>
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
          </button>
        </div>

        <div className={mediaStyle.news_container}>
          <div className={mediaStyle.news_container_left}>
            <div data-aos="fade-up">
              <span>{t("media.latest_news")}</span>
              <h5>{t("media.latest_news_para")}</h5>
              <span>{t("media.date")}</span>
              <button className="read_more_button">
                <p>{t("media.read_more_btn")}</p>

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
              </button>
            </div>

            <div data-aos="fade-up">
              <img src="./stretch.png" alt="" />
            </div>
          </div>

          <div className={mediaStyle.news_container_right}>
            <div data-aos="fade-up">
              <div>
                <span>{t("media.news")}</span>
                <h5>{t("media.sub_news")}</h5>
                <span>{t("media.date")}</span>
              </div>

              <button className="read_more_button">
                <p>{t("media.read_more_btn")}</p>
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
              </button>
            </div>

            <div data-aos="fade-up">
              <div>
                <span>{t("media.news")}</span>
                <h5>{t("media.sub_news")}</h5>
                <span>{t("media.date")}</span>
              </div>
              <button className="read_more_button">
                <p>{t("media.read_more_btn")}</p>
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
              </button>
            </div>

            <div data-aos="fade-up">
              <div>
                <span>{t("media.news")}</span>
                <h5>{t("media.sub_news")}</h5>
                <span>{t("media.date")}</span>
              </div>
              <button className="read_more_button">
                <p>{t("media.read_more_btn")}</p>
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
              </button>
            </div>

            <div data-aos="fade-up">
              <div>
                <span>{t("media.news")}</span>
                <h5>{t("media.sub_news")}</h5>
                <span>{t("media.date")}</span>
              </div>
              <button className="read_more_button">
                <p>{t("media.read_more_btn")}</p>
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
              </button>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Autoplay]}
          speed={1000}
          className={mediaStyle.slider_container}
          style={{
            "--swiper-pagination-color": "#805E59",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "4px",
          }}
        >
          <SwiperSlide className={mediaStyle.slider}>
            <div className={mediaStyle.slider_top}>
              <span>{t("media.latest_news")}</span>
              <h5>{t("media.latest_news")}</h5>
              <span className={mediaStyle.date}>12 April, 2024</span>
              <button className="read_more_button">
                <p>{t("media.latest_news")}</p>

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
              </button>
            </div>

            <div className={mediaStyle.image_container}>
              <img src="./stretch.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className={mediaStyle.slider}>
            <div className={mediaStyle.slider_top}>
              <span>{t("media.latest_news")}</span>
              <h5>{t("media.latest_news")}</h5>
              <span className={mediaStyle.date}>{t("media.latest_news")}</span>
              <button className="read_more_button">
                <p>{t("media.latest_news")}</p>

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
              </button>
            </div>

            <div className={mediaStyle.image_container}>
              <img src="./stretch.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={mediaStyle.button_container}>
          <button
            className={mediaStyle.swiper_button_right}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <div className="">
              <img src="./arrow_big.svg" />
            </div>
          </button>
          <button
            className={mediaStyle.swiper_button_left}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <div className="">
              <img src="./arrow_big.svg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Media;
