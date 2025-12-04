import React, { useEffect, useState } from "react";

import styles from "./Header.module.css";
import netflix from "../../assets/Images/netflix.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
 import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import profiles from "../../assets/Images/profile.png"



const Header = () => {

const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const [profileOpen, setProfileOpen] = useState(false);

 // change background when scroll


useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); //add dark gb
      } else {
        setIsScrolled(false); // stay transparent at top
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

 const closeMobileMenu = () => {
    setMobileOpen(false);
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
            <img src={netflix} alt="Netflix Logo" width="100" />

            {/* desktop menu */}

            <ul className={`${styles.nav_list} ${styles.desktop_menu}`}>
              <li>Home</li>
              <li>Series</li>
              <li>Films</li>
              <li>Games</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>

            <div className={styles.mobile_browse} onClick={toggleMobileMenu}>
              <span>Browse</span>
              <ArrowDropDownIcon className={styles.icon} />
            </div>

            {mobileOpen && (
              <ul className={styles.mobile_menu} onClick={closeMobileMenu}>
                <li>Home</li>
                <li>Series</li>
                <li>Films</li>
                <li>Games</li>
                <li>Latest</li>
                <li>My List</li>
                <li>Browse by Language</li>
              </ul>
            )}
          </div>
          {/* Mobile logo  */}
          {/* <div className={styles.logo_mobile}>
            <img src={netflix} alt="Netflix Logo" width="90" />
          </div> */}
        </div>

        {/* Right */}
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

          {/* Profile */}
          <div className={styles.profile} onClick={toggleProfileMenu}>
            <ul className={styles.account_menu}>
              <li>
                <a
                  className={styles.icon}
                  href="/YourAccount"
                  role="button"
                  tabIndex="0"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="edadani1514 – Account &amp; Settings"
                  onClick={(e) => {
                    e.preventDefault(); // ⬅ stop navigation
            
                  }}
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

            {/* profile dropdown */}

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
          {/* <button
            className={styles.menu_button}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <CloseIcon className={styles.icon} />
            ) : (
              <MenuIcon className={styles.icon} />
            )}
          </button> */}
        </div>
      </div>
      {/* Mobile menu */}

      {/* {mobileOpen && (
        <nav className={styles.nav_mobile} onClick={closeMobileMenu}>
          <span>Browse</span> <ArrowDropDownIcon />
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
      )} */}
    </>
  );
}


export default Header;