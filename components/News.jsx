import React from "react";
import style from "@/styles/components/news.module.scss";

const News = () => {
  const newsData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `/news_${i + 1}.png`,
    date: "13-12-2023",
    title:
      "Lorem Ipsum is simply dummy text of the printingLorem Ipsu dummy ...",
  }));

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={`${style.news_top} mb_100 mt_100`}>
          <div className={style.top_image_container}>
            <img src="/news_main_bg.png" alt="" />
          </div>
          <div className={style.top_text_container}>
            <div className={style.text_container_top}>
              <span className={style.date} data-aos="fade-up">12 April, 2024</span>
              <h5 className={style.main_heading} data-aos="fade-up">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.{" "}
              </h5>
              <p className={style.news_para} data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sagittis, massa dignissim fermentum elementum, risus tellus
                tempus nulla, luctus pretium arcu nisl quis magna. Aliquam non
                ligula ipsum. In luctus mi urna, sit amet venenatis dolor
                tincidunt ornare. In neque tortor, tristique nec arcu eget,
                dignissim porttitor libero.
              </p>
            </div>

            <button className="read_more_button" data-aos="fade-up">
              <p>Read More</p>

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
            </button>
          </div>
        </div>

        <div className={`${style.news_bottom} pb_100`}>
          <ul className={style.news_list_container}>
            {newsData.map((newsItem) => (
              <li key={newsItem.id} className={style.news}>
                <div className={style.image_container} data-aos="fade-up">
                  <img src={newsItem.image} alt={`News ${newsItem.id}`} />
                </div>
                <div className={style.news_text}>
                  <span className={style.date} data-aos="fade-up">{newsItem.date}</span>
                  <h6 className={style.sub_news_para} data-aos="fade-up">{newsItem.title}</h6>

                  <button className="read_more_button" data-aos="fade-up">
                    <p>Read More</p>
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
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
