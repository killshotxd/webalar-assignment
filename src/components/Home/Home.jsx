import React from "react";
import Header from "../Header/Header";
import styles from "./Home.module.css";
import unsplash from "../../assets/unsplash1.svg";

import { Navigation, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import vector1 from "../../assets/vector1.svg";
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

      <div className={styles.container2}>
        <div className={styles.rectangle}>
          <div className={styles.top}>
            <div className={styles.line}></div>
            <div className={styles.heading2}>Trusted Companies</div>
            <div className={styles.line}></div>
          </div>

          <div className={styles.slider}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
