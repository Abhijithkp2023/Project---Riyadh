import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import facilitiesStyle from "@/styles/components/facilities.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Facilities = () => {
  const swiperRef = useRef(null);

  const facilities = [
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fshutterstock_2479838625.jpg&w=3840&q=75",
      title: "Memberships",
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fser_02.jpg&w=3840&q=75",
      title: "Golf by Night",
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fde34d960-d6e9-4f1a-9592-824f9f7669b6.jpg&w=3840&q=75",
      title: "Padel",
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fa521f4d1-ead3-442d-893b-f11240e3387c.jpg&w=3840&q=75",
      title: "Pro Shop",
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2F5.12.24_SI2024_Neville-Hopwood-9633-scaled-1.jpg&w=3840&q=75",
      title: "Dining",
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2FDriving-Range-scaled-1.jpg&w=3840&q=75",
      title: "Driving Range",
    },
  ];

  return (
    <div className={facilitiesStyle.container} data-aos="fade-up">
      <ul className={facilitiesStyle.facilities_grid}>
        {facilities.map((facility, i) => (
          <li key={i}>
            <a href="#">
              <img src={facility.image} alt={facility.title} loading="lazy" />
              <h4>{facility.title}</h4>
            </a>
          </li>
        ))}
      </ul>

      <div className={facilitiesStyle.facilities_slide}>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Autoplay]}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
          }}
        >
         {facilities.map((facility, i) => (
            <SwiperSlide key={i}>
             <li key={i}>
            <a href="#">
              <img src={facility.image} alt={facility.title} loading="lazy" />
              <h4>{facility.title}</h4>
            </a>
          </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Facilities;
