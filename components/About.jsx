import React from "react";
import aboutStyle from "@/styles/components/about.module.scss";

import arrow from "../public/arrow_small.svg";

const About = () => {
  return (
    <div className={aboutStyle.about_container}>
      {/* <div className="wrapper"> */}
        <div className={`${aboutStyle.about_sub_container}`}>
          <h2>
            Where Pristine Fairways And Exceptional Facilities Create An
            Unforgettable Sporting Experience.
          </h2>
          <p>
            In Riyadh city the vibrant Saudi capital, Riyadh Golf Club was
            established in 2005, located just 20 minutes from the city center,
            the club boasts a full range of leisure facilities. <br />
            <br />
            With 18-hole golf course, spanning 26,031 yards with a par of 72,
            Riyadh golf club have a highly qualified PGA golf professionals
            coaching team. our pro shop is fully stocked with golf equipment and
            apparel, our club offers an exceptional experience for its members,
            featuring diverse dining options, gym, and a luxurious locker room
            with a jacuzzi and shower area. Riyadh Golf Club is the perfect
            destination for enjoying time with family and friends, as well as
            for business meetings.
          </p>
          <button className="dark_button ">
            <p>Upcoming Tournaments</p>
            <div className="button_round">
              <div>
                <img src="/arrow_small.svg" />
              </div>
            </div>
          </button>
        {/* </div> */}
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

export default About;
