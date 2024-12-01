import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.logo}>
        <img className={styles.heading} src="/image/logo jayant.png" alt="" />
      </div>
      <ul className={`${styles.navlinks} ${isMobile ? styles.mobile : ""}`}>
        <li className={styles.list}>
          <a className={styles.anchor} href="#">
            Home
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.anchor} href="#">
            About
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.anchor} href="#">
            Services
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.anchor} href="#">
            Portfolio
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.anchor} href="#">
            Contact
          </a>
        </li>
      </ul>
      <div className={styles.menuicon} onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
