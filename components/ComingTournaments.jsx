import React from "react";
import style from "@/styles/components/comingTournaments.module.scss";

const ComingTournaments = () => {

    const tournamentsData = [
        {
          id: 1,
          bgImage: "/upcoming_1.png",
          logo: "/upcoming_logo_1.png",
          title: "2023 PIF Saudi International powered by SoftBank Investment Advisers",
          details: [
            { icon: "/calendar.svg", text: "December 4th – 7th, 2024" },
            { icon: "/map.svg", text: "Riyadh Golf Club" },
            { icon: "/dollar.svg", text: "USD $5million" }
          ],
          buttons: [
            { type: "light", text: "Buy Tickets" },
            { type: "transparent", text: "Become a volunteer" }
          ]
        },
        {
          id: 2,
          bgImage: "/upcoming_2.png",
          logo: "/upcoming_logo_2.png",
          title: "Another Tournament Title",
          details: [
            { icon: "/calendar.svg", text: "January 10th – 15th, 2025" },
            { icon: "/map.svg", text: "Jeddah Golf Club" },
            { icon: "/dollar.svg", text: "USD $3.5million" }
          ],
          buttons: [
            { type: "light", text: "Buy Tickets" },
            { type: "transparent", text: "Become a volunteer" }
          ]
        }
        // Add more tournaments as needed
      ];

    return (
      <div className={`${style.container} pt_100`}>
        <div className={style.wrapper}>
          {tournamentsData.map((tournament) => (
            <div key={tournament.id} className={style.image_container}>
              <img src={tournament.bgImage} alt={`${tournament.title} background`} />
  
              <div className={style.overlay_container}>
                <div className={style.logo_container} data-aos="fade-up">
                  <img src={tournament.logo} alt={`${tournament.title} logo`} />
                </div>
                <div className={style.details_container}>
                  <h4 data-aos="fade-up">{tournament.title}</h4>
                  
                  <ul className={style.info_list}>
                    {tournament.details.map((detail, index) => (
                      <li key={index} data-aos="fade-up">
                        <img src={detail.icon} alt="" />
                        <span>{detail.text}</span>
                      </li>
                    ))}
                  </ul>
  
                  <div className={style.button_container} data-aos="fade-up">
                    {tournament.buttons.map((button, index) => (
                      <button 
                        key={index} 
                        className={button.type === "light" ? "light_button" : "transparent_button"}
                      >
                        <p>{button.text}</p>
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ComingTournaments;
