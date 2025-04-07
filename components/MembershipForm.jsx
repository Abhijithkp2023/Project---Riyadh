import React from "react";
import style from "@/styles/components/membershipForm.module.scss";

const MembershipForm = () => {
  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <div className={style.text_container}>
          <h2 className="section_heading" data-aos="fade-up">
            RGC Membership Inquiries
          </h2>
          <p className="para" data-aos="fade-up">
            Please fill out the form below to learn more about becoming a member
            at Riyadh Golf Club.
          </p>
        </div>
        <form className={style.form_container}>
          <input type="text" placeholder="Full Name" data-aos="fade-up" />
          <input type="text" placeholder="Last Name" data-aos="fade-up" />
          <input type="number" placeholder="Phone Number" data-aos="fade-up" />
          <input type="email" placeholder="Email Address" data-aos="fade-up" />
          <select data-aos="fade-up">
            <option value="" disabled selected>
              Types of membership
            </option>
            <option value="">Single</option>
            <option value="">Family</option>
          </select>
          <textarea
            placeholder="Comments"
            rows="5"
            data-aos="fade-up"
          ></textarea>
          <button
            className="dark_button"
            style={{ paddingLeft: "20px" }}
            data-aos="fade-up"
          >
            <p data-aos="fade-up">Submit</p>
            <div className="button_round" data-aos="fade-up">
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
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
