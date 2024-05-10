import React from "react";
import styles from "./Question.module.css";
import BackBtn from "../../assests/back.png";
import Monkey from "../../assests/monkey.png";
import YesBtn from "../../assests/yes.png";
import Cloud from "../../assests/cloud.png";
import { useNavigate } from "react-router-dom";
import progress from "../../assests/progress.png";
import Banana from "../../assests/disableB.png";

const Question = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/intro");
  };

  const handleNav = () => {
    nav("/instruction");
  };
  return (
    <div>
      <div className={styles.disableProgreess}>
        <img src={progress} alt="" width={600} />
      </div>
      <div className={styles.disableBanana}>
        <img src={Banana} alt="" width={130} />
      </div>
      <div className={styles.back}>
        <img src={BackBtn} alt="" width={130} onClick={handleClick} />
      </div>
      <div className={styles.wraaper}>
        <img src={Monkey} alt="monkey" width={550} className="monkey" />
      </div>
      <div className={styles.btn}>
        <img src={YesBtn} alt="btn" width={300} onClick={handleNav} />
      </div>
      <div className={styles.img}>
        <img src={Cloud} alt="cloud" width={450} />
        <p className={styles.intro}>Can you help me get some ?🤔</p>
      </div>
    </div>
  );
};

export default Question;
