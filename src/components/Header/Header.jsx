import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.right}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a className={styles.btn} href="#">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
