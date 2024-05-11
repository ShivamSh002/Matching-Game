import React, { useEffect, useState } from "react";
import PinkCard from "../../assests/pinkCard.png";
import BlueCard from "../../assests/blueCard.png";
import Apple from "../../assests/apple.webp";
import Banana from "../../assests/banana.png";
import Orange from "../../assests/orange.jpg";
import Kiwi from "../../assests/kiwi.jpeg";
import Grape from "../../assests/grape.jpeg";
import Mango from "../../assests/mango.jpg";
import styles from "./card.module.css";

const CardComponent = ({ count, setCount }) => {
  const [pinkCards, setPinkCards] = useState([
    { id: 1, back: Apple, flipped: false },
    { id: 2, back: Orange, flipped: false },
    { id: 3, back: Banana, flipped: false },
    { id: 4, back: Kiwi, flipped: false },
    { id: 5, back: Grape, flipped: false },
    { id: 6, back: Mango, flipped: false },
  ]);

  const [blueCards, setBlueCards] = useState([
    { id: 7, back: Apple, flipped: false },
    { id: 8, back: Orange, flipped: false },
    { id: 9, back: Banana, flipped: false },
    { id: 10, back: Kiwi, flipped: false },
    { id: 11, back: Grape, flipped: false },
    { id: 12, back: Mango, flipped: false },
  ]);
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);

  const handleClick = (id, cardSet, setCardSet) => {
    console.log(id);
    setCardSet((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        flipped: card.id === id ? !card.flipped : false,
      }))
    );
    if (cardSet === pinkCards) {
      setV1(id);
    } else {
      setV2(id);
    }
    console.log(v1, v2);
  };

  useEffect(() => {
    setTimeout(() => {
      if (v1 === v2 - 6 && v1 !== 0 && v2 !== 0) {
        setPinkCards((prevCards) =>
          prevCards.map((card) =>
            card.id === v1 || card.id === v2
              ? { ...card, visibility: "hidden" }
              : card
          )
        );
        setBlueCards((prevCards) =>
          prevCards.map((card) =>
            card.id === v1 || card.id === v2
              ? { ...card, visibility: "hidden" }
              : card
          )
        );
        setCount(count + 15);
      }
    }, 500);
  }, [v1, v2]);

  return (
    <div className={styles.wrapper}>
      <div c className={styles.cardContainer}>
        {pinkCards.map((card) => (
          <div
            className={`${styles.card} ${
              card.flipped ? styles.cardFlipped : ""
            } `}
            id={card.id}
            onClick={() => handleClick(card.id, pinkCards, setPinkCards)}
            style={{ visibility: card.visibility }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={PinkCard} alt="Front" />
              </div>
              <div className={styles.cardBack}>
                <img src={card.back} alt="Back" width={100} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cardContainer}>
        {blueCards.map((card) => (
          <div
            className={`${styles.card} ${
              card.flipped ? styles.cardFlipped : ""
            } `}
            id={card.id}
            onClick={() => handleClick(card.id, blueCards, setBlueCards)}
            style={{ visibility: card.visibility }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={BlueCard} alt="Front" />
              </div>
              <div className={styles.cardBack}>
                <img src={card.back} alt="Back" width={100} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
