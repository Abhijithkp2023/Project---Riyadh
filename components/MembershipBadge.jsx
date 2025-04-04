import React from "react";
import style from "@/styles/components/membershipBadge.module.scss";
import Link from "next/link";

const MembershipBadge = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h3 className={style.heading}>Explore our Memberships</h3>

        <ul className={style.list}>
          <li>
            <Link href="#">Premium Joint</Link>
          </li>
          <li>
            <Link href="#">Premium</Link>
          </li>
          <li>
            <Link href="#">Midweek</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MembershipBadge;