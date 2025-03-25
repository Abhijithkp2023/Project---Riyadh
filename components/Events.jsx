import React, {useEffect  } from "react";
import eventsStyle from "@/styles/components/events.module.scss";


import AOS from "aos";
import "aos/dist/aos.css";

const Events = () => {

   useEffect (() => {
      AOS.init ({
        duration: 1000,
        once: false
      }, [])
    })
  

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
          <div data-aos="fade-up">
            <img src="./event_img_1.png" alt="" />
          </div>
          <div data-aos="fade-up">
            <img src="./event_img_2.png" alt="" />
          </div>
          <div data-aos="fade-up">
            <img src="./event_img_3.png" alt="" />
          </div>
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
