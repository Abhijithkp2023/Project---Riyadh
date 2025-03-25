import React, { useEffect } from "react";
import mediaStyle from "@/styles/components/media.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

const Media = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        once: false,
      },
      []
    );
  });

  return (
    <div className={mediaStyle.media_container}>
      <div className={mediaStyle.wrapper_container}>
        <div>
          <h2 data-aos="fade-up">Media Center</h2>
          <button className="read_more_button" data-aos="fade-up">
            <p>Read More</p>
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
          </button>
        </div>

        <div className={mediaStyle.news_container}>
          <div className={mediaStyle.news_container_left}>
            <div data-aos="fade-up">
              <span>Latest News</span>
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </h5>
              <span>12 April, 2024</span>
              <button className="read_more_button">
                <p>Read More</p>
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
              </button>
            </div>

            <div data-aos="fade-up">
              <img src="./stretch.png" alt="" />
            </div>
          </div>

          <div className={mediaStyle.news_container_right}>
            <div data-aos="fade-up">
              <div>
                <span>News</span>
                <h5>
                  The first edition of the Mahd International Golf Championship
                </h5>
                <span>12 April, 2024</span>
              </div>
              <button className="read_more_button">
                <p>Read More</p>
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
              </button>
            </div>

            <div data-aos="fade-up">
              <div>
                <span>News</span>
                <h5>
                  The first edition of the Mahd International Golf Championship
                </h5>
                <span>12 April, 2024</span>
              </div>
              <button className="read_more_button">
                <p>Read More</p>
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
              </button>
            </div>

            <div data-aos="fade-up">
              <div>
                <span>News</span>
                <h5>
                  The first edition of the Mahd International Golf Championship
                </h5>
                <span>12 April, 2024</span>
              </div>
              <button className="read_more_button">
                <p>Read More</p>
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
              </button>
            </div>

            <div data-aos="fade-up">
              <div>
                <span>News</span>
                <h5>
                  The first edition of the Mahd International Golf Championship
                </h5>
                <span>12 April, 2024</span>
              </div>
              <button className="read_more_button">
                <p>Read More</p>
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
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Media;
