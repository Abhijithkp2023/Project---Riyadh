import React, { useEffect } from "react";
import aboutStyle from "@/styles/components/about.module.scss";
// import "@/styles/_base.module.scss"


const About = () => {
  return (
    <div className={`${aboutStyle.about_container} pt_180 pb_180`}>
      {/* <div className="wrapper"> */}
      <div className={`${aboutStyle.about_sub_container}`}>
        <h2 data-aos="fade-up">
          Where Pristine Fairways And Exceptional Facilities Create An
          Unforgettable Sporting Experience.
        </h2>
        <p data-aos="fade-up">
          In Riyadh city the vibrant Saudi capital, Riyadh Golf Club was
          established in 2005, located just 20 minutes from the city center, the
          club boasts a full range of leisure facilities. <br />
          <br />
          With 18-hole golf course, spanning 26,031 yards with a par of 72,
          Riyadh golf club have a highly qualified PGA golf professionals
          coaching team. our pro shop is fully stocked with golf equipment and
          apparel, our club offers an exceptional experience for its members,
          featuring diverse dining options, gym, and a luxurious locker room
          with a jacuzzi and shower area. Riyadh Golf Club is the perfect
          destination for enjoying time with family and friends, as well as for
          business meetings.
        </p>
        <button className="dark_button" data-aos="fade-up">
          <p>Upcoming Tournaments</p>
          <div className="button_round">
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
          </div>
        </button>
      </div>

      {/* <div className="img_left">
        <img src="./about_decor_left.png" alt="" />
      </div>
      <div className="img_right">
        <img src="./about_decor_right.png" alt="" />
      </div> */}

    </div>
  );
};

export default About;
