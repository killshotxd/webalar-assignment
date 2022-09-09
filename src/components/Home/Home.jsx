import React from "react";
import Header from "../Header/Header";
import styles from "./Home.module.css";
import unsplash from "../../assets/unsplash1.svg";
const Home = () => {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>
            {" "}
            <h1>Let's create something great together</h1>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nisi
            ipsam excepturi autem, veniam temporibus dolor eum omnis numquam
            est, officiis vitae minima eveniet fuga nesciunt deleniti qui porro
            fugiat. Nulla distinctio neque reiciendis!
          </p>

          <a className={styles.btn} href="#">
            Lets Talk
          </a>
        </div>
        <div className={styles.right}>
          <img src={unsplash} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
