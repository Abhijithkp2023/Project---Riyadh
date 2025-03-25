import React, {useEffect} from "react";
import LearnStyle from "@/styles/components/learn.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

const Learn = () => {

  useEffect (() => {
    AOS.init ({
      duration: 1000,
      once: false
    }, [])
  })

  return (
    <div className={LearnStyle.learn_container}>
      <div>
        <div className={LearnStyle.sub_container}>
          <div className={LearnStyle.learn_top}>
            <h2 data-aos="fade-up">
              Learn to Play Golf <br /> At Riyadh Golf Club
            </h2>
            <button className="dark_button" data-aos="fade-up">
              <p>Read More</p>
              <div className="button_round">
                <div>
                  <img src="./arrow_small.svg" />
                </div>
              </div>
            </button>
          </div>
          <div className={LearnStyle.learn_bottom}>
            <div data-aos="fade-up">
              <h3 data-aos="fade-up">Golf for Juniors</h3>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                pretium ultrices consectetur. Duis condimentum augue non turpis
                laoreet, dapibus ornare.
              </p>

              <div>
                <img src="./junior.png" alt="" />
              </div>
            </div>
            <div data-aos="fade-up">
              <h3 data-aos="fade-up">Golf for Ladies</h3>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                pretium ultrices consectetur. Duis condimentum augue non turpis
                laoreet, dapibus ornare.
              </p>
              <div>
                <img src="./ladies.png" alt="" />
              </div>
            </div>
            <div data-aos="fade-up">
              <h3 data-aos="fade-up">Golf for Men</h3>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                pretium ultrices consectetur. Duis condimentum augue non turpis
                laoreet, dapibus ornare.
              </p>
              <div>
                <div>
                  <img src="./men.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
