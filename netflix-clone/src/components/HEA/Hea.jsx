import React, { useEffect, useState } from "react";
import styles from "./Hea.module.css";
import NETFLIX from "../../assets/Images/NETFLIX3.JPG";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Hea = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // scroll effect: change background after some scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const toggleProfileMenu = () => {
    setProfileOpen((prev) => !prev);
  };

  return (
    <header
      className={`${styles.header_outer_container} ${
        isScrolled ? styles.header_scrolled : ""
      }`}
    >
      <div className={styles.head_container}>
        {/* LEFT SIDE */}
        <div className={styles.header_left}>
          <div className={styles.logo_wrapper}>
            <img src={NETFLIX} alt="Netflix Logo" className={styles.logo} />
          </div>

          {/* Desktop nav */}
          <nav className={styles.nav_desktop}>
            <ul className={styles.nav_list}>
              <li>Home</li>
              <li>Series</li>
              <li>Films</li>
              <li>Games</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.header_right}>
          <SearchIcon className={styles.icon} />
          <span className={styles.kids}>Kids</span>
          <NotificationsNoneIcon className={styles.icon} />

          <div className={styles.profile} onClick={toggleProfileMenu}>
            <AccountBoxIcon className={styles.icon} />
            <ArrowDropDownIcon className={styles.icon} />

            {profileOpen && (
              <div className={styles.profile_dropdown}>
                <ul>
                  <li>Manage Profiles</li>
                  <li>Account</li>
                  <li>Help Center</li>
                  <li>Sign out</li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className={styles.menu_button}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <CloseIcon className={styles.icon} />
            ) : (
              <MenuIcon className={styles.icon} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav className={styles.nav_mobile}>
          <ul className={styles.nav_list_mobile}>
            <li>Home</li>
            <li>Series</li>
            <li>Films</li>
            <li>Games</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Hea;
