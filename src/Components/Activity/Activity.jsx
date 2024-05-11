import React from "react";
import styles from "./Activity.module.css";
import BackBtn from "../../assests/back.png";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";

const Activity = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/instruction");
  };

  return (
    <div>
      <div className={styles.back}>
        <img src={BackBtn} alt="" width={130} onClick={handleClick} />
      </div>
      <div className={styles.cardWrapper}>
        <CardComponent />
      </div>
    </div>
  );
};

export default Activity;
