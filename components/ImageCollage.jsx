import React from "react";
import style from "@/styles/components/gallary.module.scss";

const ImageCollage = () => {
  return (
    <div className={style.container}>
    
        <ul className={`${style.image_container} pb_100 pt_100`}>
          <li style={{ gridArea: "image_1"}} data-aos="fade-up">
            <img src="/gallary_1.png" alt="" />
          </li>
          <li style={{ gridArea: "image_2" }} data-aos="fade-up">
            <img src="/gallary_2.png" alt="" />
          </li>
          <li style={{ gridArea: "image_3" }} data-aos="fade-up">
            <img src="/gallary_3.png" alt="" />
          </li>
          <li style={{ gridArea: "image_4" }} data-aos="fade-up">
            <img src="/gallary_4.png" alt="" />
          </li>
          <li style={{ gridArea: "image_5" }} data-aos="fade-up">
            <img src="/gallary_5.png" alt="" />
          </li>
          <li style={{ gridArea: "image_6" }} data-aos="fade-up">
            <img src="/gallary_6.png" alt="" />
          </li>
          <li style={{ gridArea: "image_7" }} data-aos="fade-up">
            <img src="/gallary_7.png" alt="" />
          </li>
          <li style={{ gridArea: "image_8" }} data-aos="fade-up">
            <img src="/gallary_8.png" alt="" />
          </li>
          <li style={{ gridArea: "image_9" }} data-aos="fade-up">
            <img src="/gallary_9.png" alt="" />
          </li>
          <li style={{ gridArea: "image_10" }} data-aos="fade-up">
            <img src="/gallary_10.png" alt="" />
          </li>
          <li style={{ gridArea: "image_11" }} data-aos="fade-up">
            <img src="/gallary_11.png" alt="" />
          </li>
          <li style={{ gridArea: "image_12" }} data-aos="fade-up">
            <img src="/gallary_12.png" alt="" />
          </li>
        </ul>
     
    </div>
  );
};

export default ImageCollage;
