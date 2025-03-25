import React, { useRef } from "react";
import reviewStyle from "@/styles/components/review.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  const swiperRef = useRef(null);

  const reviews = [
    {
      review:
        "I’ve played at many clubs, but this one stands out for its impeccable service and beautifully designed course.",
      name: "Michael P.",
      title: "Professional Golfer",
      image: "./reviewer_1.png",
    },
    {
      review:
        "As someone new to the game, finding a course that’s both challenging and fun can be tough, but this place is perfect! ",
      name: "David H.",
      title: "Golf Enthusiast",
      image: "./reviewer_2.png",
    },
    {
      review:
        "This is one of the most well-maintained courses I’ve played. The attention to detail, from the perfectly manicured greens to the excellent clubhouse, makes every round enjoyable.",
      name: "Sarah L.",
      title: "Amateur Golfer",
      image: "./reviewer_3.png",
    },
    {
      review:
        "I’ve played at many clubs, but this one stands out for its impeccable service and beautifully designed course.",
      name: "David H.",
      title: "Golf Enthusiast",
      image: "./reviewer_4.png",
    },
    {
      review:
        "As someone new to the game, finding a course that’s both challenging and fun can be tough, but this place is perfect! ",
      name: "Michael P.",
      title: "Professional Golfer",
      image: "./reviewer_1.png",
    },

    {
      review:
        "I’ve played at many clubs, but this one stands out for its impeccable service and beautifully designed course.",
      name: "Michael P.",
      title: "Professional Golfer",
      image: "./reviewer_1.png",
    },
    {
      review:
        "This is one of the most well-maintained courses I’ve played. The attention to detail, from the perfectly manicured greens to the excellent clubhouse, makes every round enjoyable.",
      name: "Sarah L.",
      title: "Amateur Golfer",
      image: "./reviewer_3.png",
    },
    {
      review:
        "As someone new to the game, finding a course that’s both challenging and fun can be tough, but this place is perfect! ",
      name: "David H.",
      title: "Golf Enthusiast",
      image: "./reviewer_2.png",
    },
    {
      review:
        "his is one of the most well-maintained courses I’ve played. The attention to detail, from the perfectly manicured greens to the excellent clubhouse, makes every round enjoyable.",
      name: "Sarah L.",
      title: "Amateur Golfer",
      image: "./reviewer_3.png",
    },
    {
      review:
        "This is one of the most well-maintained courses I’ve played. The attention to detail, from the perfectly manicured greens to the excellent clubhouse, makes every round enjoyable.",
      name: "Sarah L.",
      title: "Amateur Golfer",
      image: "./reviewer_3.png",
    },
  ];

  return (
    <div className={reviewStyle.container}>
      <h2>What our Golfers Say!</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoplay = {{
            delay : 1500,
            disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        speed={1000}
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i} className={reviewStyle.slides} >
            <div className={reviewStyle.quote_container}>
              <img src={"./quote.svg"} alt="" />
            </div>

            <p>{review.review}</p>

            <div className={reviewStyle.reviewer_info}>
              <div>
                <img src={review.image} alt="" />
              </div>
              <div>
                <h5>{review.name}</h5>
                <span>{review.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={reviewStyle.button_container}>
        <button className={reviewStyle.swiper_button_right} onClick={() => swiperRef.current?.slidePrev()}>
          <div className="">
            <img src="./arrow_big.svg" />
          </div>
        </button>
        <button className={reviewStyle.swiper_button_left} onClick={() => swiperRef.current?.slideNext()}>
          <div className="">
            <img src="./arrow_big.svg" />
          </div>
        </button>
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

export default Review;
