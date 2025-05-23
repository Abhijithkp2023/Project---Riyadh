import React, { useEffect, useState } from "react";
import navStyle from "@/styles/components/navbar.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  const [isMounted, setIsMounted] = useState(false);

  // to set language eng initially and when refreshes detect language and setting direction
  useEffect(() => {
    const savedLang = "en";
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    setIsMounted(true);
  }, []);

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", newLang);

    router.push(router.pathname, router.pathname, { locale: newLang });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSideBar = () => {
    setSidebarActive(!sidebarActive);
  };

  if (!isMounted) return null;

  return (
    <>
      <div
        className={`${navStyle.navbar_container} ${
          scrolled ? navStyle.fixed : ""
        }`}
      >
        <div>
          <div className={navStyle.logo_container}>
            <Link href="/">
              <img src="/nav_logo.svg" alt="" />
            </Link>
          </div>
          <ul className={navStyle.links_container}>
            <li className="underline_fill">
              <Link href={"/experience"}>{t("nav.exp")}</Link>
            </li>
            <li className="underline_fill">
              <Link href="/membership"> {t("nav.membership")}</Link>
            </li>
            <li className="underline_fill">
              <Link href="/member"> {t("nav.learn_to_play")}</Link>
            </li>
            <li className="underline_fill">
              <Link href="/tournaments">{t("nav.corporate_events")}</Link>
            </li>
            <li className="underline_fill"><Link href="/gallery">{t("nav.media_center")}</Link></li>
            <li className="underline_fill">
              <Link href="/contact"> {t("nav.contact_us")}</Link>
            </li>
          </ul>
          <ul className={navStyle.end_list}>
            <li>
              <button className={navStyle.book_now_btn}>
                <span>{t("nav.book_now")}</span>
              </button>
            </li>
            <li className="underline_fill" onClick={changeLanguage}>
              <a>
                <span> {locale === "en" ? "عربي" : "English"}</span>
              </a>
            </li>
            <li className={navStyle.hamburger}>
              <RxHamburgerMenu size={50} onClick={handleSideBar} />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${navStyle.sidebar} ${
          sidebarActive ? navStyle.active : ""
        }`}
      >
        <ul>
          <li className="underline_fill">
            <Link onClick={handleSideBar} href={"/experience"}>
              {t("nav.exp")}
            </Link>
          </li>
          <li className="underline_fill">
            <Link onClick={handleSideBar} href="/membership">
              {t("nav.membership")}
            </Link>
          </li>
          <li className="underline_fill">
            <Link onClick={handleSideBar} href="member">
              {t("nav.learn_to_play")}
            </Link>
          </li>
          <li className="underline_fill">
            <Link onClick={handleSideBar} href="/tournaments">
              {t("nav.corporate_events")}
            </Link>
          </li>
          <li className="underline_fill">
            <Link onClick={handleSideBar} href="/gallery">
              {t("nav.media_center")}
            </Link>
          </li>
          <li className="underline_fill">
            <Link onClick={handleSideBar} href="/contact">
              {t("nav.contact_us")}
            </Link>
          </li>
        </ul>
        <IoMdClose
          className={navStyle.close_icon}
          size={50}
          onClick={handleSideBar}
        />
      </div>
    </>
  );
};

export default Navbar;
