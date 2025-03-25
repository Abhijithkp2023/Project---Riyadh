import React, {useEffect} from "react";
import facilitiesStyle from "@/styles/components/facilities.module.scss";

const Facilities = () => {


  return (
    <div className={facilitiesStyle.container} data-aos="fade-up">
      <ul>
        <li>
          <a href="">
            <img
              src="https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fshutterstock_2479838625.jpg&w=3840&q=75"
              alt=""
            />
            <p>Memberships</p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fser_02.jpg&w=3840&q=75"
              alt=""
            />
             <p>Golf by Night</p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fde34d960-d6e9-4f1a-9592-824f9f7669b6.jpg&w=3840&q=75"
              alt=""
            />
             <p>Padel</p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fa521f4d1-ead3-442d-893b-f11240e3387c.jpg&w=3840&q=75"
              alt=""
            />
             <p>Pro Shop</p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2F5.12.24_SI2024_Neville-Hopwood-9633-scaled-1.jpg&w=3840&q=75"
              alt=""
            />
             <p>Dining</p>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2FDriving-Range-scaled-1.jpg&w=3840&q=75"
              alt=""
            />
             <p>Driving Range</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Facilities;
