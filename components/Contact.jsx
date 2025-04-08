import React from "react";
import style from "@/styles/components/contact.module.scss";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={`${style.wrapper} pb_100 pt_100`}>
        <div className={style.contact_top}>
          <div className={style.address}>
            <h2 className="section_heading"> Get in touch with us</h2>
            <p className="para">
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>

            <ul className={style.address_list}>
              <li className={style.contact}>
                <div className={style.icon}>
                  <img src="/map.svg" alt="" />
                </div>
                <p className="para">
                  P.O. Box 84329 Riyadh 11671 <br />
                  Kingdom of Saudi Arabia
                </p>
              </li>
              <li className={style.contact}>
                <div className={style.icon}>
                  <img src="/call.svg" alt="" />
                </div>
                <p className="para">+966 (0) 55 739 9900</p>
              </li>
              <li className={style.contact}>
                <div className={style.icon}>
                  <img src="/mail.svg" alt="" />
                </div>
                <p className="para">reception@riyadhgolf.com</p>
              </li>
            </ul>
          </div>

          <form className={style.form}>
            <ul className={style.form_list}>
              <li className={style.name}>
                <input
                  type="text"
                  placeholder="First Name"
                  className={style.first_name}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={style.last_name}
                />
              </li>
              <li>
                <input type="email" placeholder="Email" />
              </li>
              <li>
                <input type="number" placeholder="Phone number" />
              </li>
              <li>
                <textarea placeholder="Message"></textarea>
              </li>
              <li>
                <button className="dark_button" data-aos="fade-up">
                  <p>Submit</p>
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
              </li>
            </ul>
          </form>
        </div>

        <div className={style.contact_bottom}>
          <h2 className="section_heading">Together we build trust</h2>
          <p className="para">
            Use the below contact info to speak up form to share any suggestions
            or concerns to help us maintain a positive and transparent workplace
          </p>
          <ul className={style.bottom_list}>
            <li>
              <button className="dark_button">
                <p>Submit</p>
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
            </li>
            <li className={style.contact}>
              <div className={style.icon}>
                <img src="/call.svg" alt="" />
              </div>
              <p className="para">+966 (0) 00 000 0000</p>
            </li>
            <li className={style.contact}>
              <div className={style.icon}>
                <img src="/mail.svg" alt="" />
              </div>
              <p className="para">whistleblow@riyadhgolf.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
