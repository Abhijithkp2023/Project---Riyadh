import React from "react";

const HeroBanner = ({ imageUrl, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}

      className="hero_bg"
    >
      {title && (
        <h2
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            textAlign: "center",
            width: "100%",
            fontSize: "3.4375rem",
            fontWeight: "700",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
          data-aos="fade-up"
        >
          {title}
        </h2>
      )}
    </div>
  );
};

export default HeroBanner;
