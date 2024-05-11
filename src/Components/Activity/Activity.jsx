import React, { useState } from "react";
import styles from "./Activity.module.css";
import BackBtn from "../../assests/back.png";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";
import Banana from "../../assests/banana.png";

const Activity = () => {
  const nav = useNavigate();

  const [count, setCount] = useState(10);

  const handleClick = () => {
    nav("/instruction");
  };

  return (
    <div>
      <div className={styles.disableBanana}>
        <img src={Banana} alt="" width={130} />
      </div>
      <div className={styles.progess}>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped active"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${count}%`,
              backgroundColor: "#fcdb03",
            }}
          ></div>
        </div>
      </div>
      <div className={styles.back}>
        <img src={BackBtn} alt="" width={130} onClick={handleClick} />
      </div>
      <div className={styles.cardWrapper}>
        <CardComponent count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default Activity;
