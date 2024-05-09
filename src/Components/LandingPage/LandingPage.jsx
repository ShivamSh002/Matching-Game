import React from "react";
import Monkey from "../../assests/monkey.png";
import styles from "./LandingPage.module.css";
import StartBtn from "../../assests/startbtn.png";
import Cloud from "../../assests/cloud.png";
import Star from "../../assests/Star.png";
import Setting from "../../assests/setting.png";

const LandingPage = () => {
  return (
    <div>
      <div className={styles.wraaper}>
        <img src={Monkey} alt="monkey" width={550} />
      </div>
      <div className={styles.btn}>
        <img src={StartBtn} alt="btn" width={300} />
      </div>
      <div className={styles.img}>
        <img src={Cloud} alt="cloud" width={450} />
        <p>Welcome Kiddo !</p>
      </div>
      <div className={styles.star}>
        <img src={Star} alt="star" />
      </div>
      <div className={styles.setting}>
        <img src={Setting} alt="setting" />
      </div>
    </div>
  );
};

export default LandingPage;
