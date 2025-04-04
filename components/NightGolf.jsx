import React from "react";
import style from "@/styles/components/nightGolf.module.scss";

const NightGolf = () => {
  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <div className={style.text_container}>
          <h2>Night Golf</h2>
          <p>
            Experience golf like never before with Night Golf! Play all 18
            holes, fully lit up, and enjoy the thrill of the game under the
            stars. Open every night from 7 PM, our course offers a unique way to
            unwind and challenge yourself after dark. Grab your clubs and tee
            off into the night – the perfect blend of sport and adventure
            awaits!
          </p>
          <button className="dark_button" data-aos="fade-up">
            <p>Book to Play</p>
            <div className="button_round">
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

        <div className={style.image_container}>
            <img src="/night_golf.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NightGolf;
