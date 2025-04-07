import React from "react";
import style from "../styles/components/mediaList.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const MediaList = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={style.container}>
      <ul className={style.list_container}>
        <li className={currentRoute === "/news" ? style.active : ""}>
          <Link href="/news">News</Link>
        </li>
        <li className={currentRoute === "/gallery" ? style.active : ""}>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className={currentRoute === "/tournaments" ? style.active : ""}>
          <Link href="/tournaments">Tournaments</Link>
        </li>
      </ul>
    </div>
  );
};

export default MediaList;