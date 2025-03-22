import React from "react";
import eventsStyle from "@/styles/components/events.module.scss";

const Events = () => {
  return (
    <div className={eventsStyle.events_container}>
      <div className="event_sub_container">
        <div className="event_text_container">
          <h2>Corporate Golf and Private events</h2>
          <p>
            Riyadh Golf Club is a Golf Saudi managed golf facility, employing
            the very best individuals, providing operational excellence and a
            first-class experience to all golf and non-golf visitors.
          </p>

          <button className="dark_button ">
            <p>Read More</p>
            <div className="button_round">
              <div>
                <img src="/arrow_small.svg" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
