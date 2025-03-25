import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import eventsStyle from "@/styles/components/events.module.scss";


const Events = () => {
  const [flippedIndices, setFlippedIndices] = useState([false, false, false]);
  const images = [
    { front: "./event_img_1.png", back: "./event_img_3.png" },
    { front: "./event_img_2.png", back: "./event_img_1.png" },
    { front: "./event_img_3.png", back: "./event_img_2.png" },
  ];

  useEffect(() => {
    const intervals = [
      setInterval(() => toggleFlip(0), 3000),
      setInterval(() => toggleFlip(1), 5000),
      setInterval(() => toggleFlip(2), 7000),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  const toggleFlip = (index) => {
    setFlippedIndices((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };


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
          {images.map((img, index) => (
            <ReactCardFlip
              key={index}
              isFlipped={flippedIndices[index]}
              flipDirection="horizontal"
              containerClassName={eventsStyle.flip_container}
              flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2}
            >
              <div className={eventsStyle.flip_card}>
                <img src={img.front} alt="" />
              </div>
              <div className={eventsStyle.flip_card}>
                <img src={img.back} alt="" />
              </div>
            </ReactCardFlip>
          ))}
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
