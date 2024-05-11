import React from "react";
import progress from "../../assests/progress.png";
import Banana from "../../assests/disableB.png";
import styles from "./Instruction.module.css";
import BackBtn from "../../assests/back.png";
import PlayBtn from "../../assests/play.png";
import { useNavigate } from "react-router-dom";
import Card from "../../assests/plainCard.png";
import PinkCard from "../../assests/pinkCard.png";
import AppleCard from "../../assests/appleCard.png";
import One from "../../assests/one.png";
import Path from "../../assests/path.png";
import BlueCard from "../../assests/blueCard.png";
import GreenRect from "../../assests/Rectangle .png";
import Two from "../../assests/two.png";
import Pair from "../../assests/pair.png";
import OrgRect from "../../assests/Rectangle2.png";
import Three from "../../assests/three.png";
import Spot1 from "../../assests/spot1.png";
import Spot2 from "../../assests/spot2.png";

const Instruction = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/question");
  };
  const handleNav = () => {
    nav("/activity");
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
      <div className={styles.btn}>
        <img src={PlayBtn} alt="btn" width={300} onClick={handleNav} />
      </div>

      <div>
        <div className={styles.card1}>
          <img src={Card} alt="" width={300} />
          <div className={styles.pinkCard}>
            <img src={PinkCard} alt="" width={150} />
          </div>
          <div className={styles.appleCard}>
            <img src={AppleCard} alt="" width={150} />
          </div>
          <div className={styles.one}>
            <img src={One} alt="" width={50} />
          </div>
          <p className={styles.info}>
            Select a <br /> pink card.
          </p>
          <p className={styles.desciption}>It has images.</p>
        </div>
        <div className={styles.card2}>
          <img src={Card} alt="" width={300} />
          <div className={styles.blueCard}>
            <img src={BlueCard} alt="" width={180} />
          </div>

          <div className={styles.one}>
            <img src={GreenRect} alt="" width={50} />
            <div>
              <img src={Two} alt="" className={styles.two} />
              <img src={Spot1} alt="" className={styles.spot1} />
              <img src={Spot2} alt="" className={styles.spot2} />
            </div>
          </div>
          <p className={styles.info}>
            Select a <br /> blue card.
          </p>
          <p className={styles.desciption}>It has alphabets.</p>
        </div>
        <div className={styles.card3}>
          <img src={Card} alt="" width={300} />
          <div className={styles.pair}>
            <img src={Pair} alt="" width={250} />
          </div>

          <div className={styles.one}>
            <img src={OrgRect} alt="" width={50} />
            <div>
              <img src={Three} alt="" className={styles.two} />
              <img src={Spot1} alt="" className={styles.spot1} />
              <img src={Spot2} alt="" className={styles.spot2} />
            </div>
          </div>
          <p className={styles.desciption1}>If they’re same</p>
          <p className={styles.info3}>Its a match !</p>
          <p className={styles.desciption2}>otherwise retry :(</p>
        </div>
      </div>
      <div className={styles.path}>
        <img src={Path} alt="" width={800} />
      </div>
    </div>
  );
};

export default Instruction;
