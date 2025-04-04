import React from "react";
import style from "@/styles/components/proshop.module.scss";

const Proshop = () => {
  return (
    <div className={`${style.container} pb_200 pt_200`}>
        <div className={style.wrapper}>
      <div className={style.text_container}>
        <h2 className="section_heading" style={{color: "white"}}>Pro Shop</h2>
        <p className="para">
          Pro shop offers a wide range of high-quality equipment and accessories
          to meet the needs of all players, from beginners to professionals.
          Whether you need clubs, equipment, accessories, or high-quality
          apparel from the Callaway brand, we have everything to help improve
          your performance on the course. In addition, our professional club
          fitting services ensure optimal performance tailored to your needs.
          Visit us to experience top-quality gear and expert advice that will
          elevate your golf experience.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Proshop;
