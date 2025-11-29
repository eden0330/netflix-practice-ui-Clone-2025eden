import React, { useEffect, useState } from "react";

import styles from "./Header.module.css";
import NETFLIX from "../../assets/Images/NETFLIX3.JPG"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
 import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import profiles from "../../assets/Images/profile.png"


  

const Header = () => {

const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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
    <>
      <div
        className={`${styles.header_outer_container} ${
          isScrolled ? styles.header_scrolled : ""
        }`}
      >
        <div className={styles.head_container}>
          <div className={styles.header_left}>
            <ul className={styles.nav_list}>
              <li className={styles.logo}>
                <img src={NETFLIX} alt="Netflix Logo" width="100" />
              </li>
              <li>Home</li>
              <li>Series</li>
              <li>Films</li>
              <li>Games</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
          </div>

       

          <div className={styles.header_right}>
            <ul className={styles.nav_list}>
              <li>
                <SearchIcon className={styles.icon} />
              </li>
              <li>
                <span className={styles.kids}>Kids</span>
              </li>
              <li>
                <NotificationsNoneIcon className={styles.icon} />
              </li>
            </ul>

            <div className={styles.profile} onClick={toggleProfileMenu}>
              <ul className={styles.Account_menu}>
                <li>
               

                  <a
                    className={styles.icon}
                    href="/YourAccount"
                    role="button"
                    tabIndex="0"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="edadani1514 – Account &amp; Settings"
                  >
                    <span className="profile-link" role="presentation">
                      <img
                        src={profiles}
                        alt=""
                        className={styles.profile_icon}
                      />
                    </span>
                  </a>
                  <span className="caret" role="presentation">
                    <ArrowDropDownIcon className={styles.icon} />
                  </span>
                </li>

             
              </ul>

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
      </div>
    </>
  );
}


export default Header;