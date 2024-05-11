import React, { useState } from "react";
import PinkCard from "../../assests/pinkCard.png";
import BlueCard from "../../assests/blueCard.png";
import Apple from "../../assests/apple.webp";
import Banana from "../../assests/banana.png";
import Orange from "../../assests/orange.jpg";
import Kiwi from "../../assests/kiwi.jpeg";
import Grape from "../../assests/grape.jpeg";
import Mango from "../../assests/mango.jpg";
import styles from "./card.module.css";

const CardComponent = () => {
  const [cards, setCards] = useState([
    { id: 1, front: PinkCard, back: Apple, flipped: false },
    { id: 2, front: PinkCard, back: Orange, flipped: false },
    { id: 3, front: PinkCard, back: Banana, flipped: false },
    { id: 4, front: PinkCard, back: Kiwi, flipped: false },
    { id: 5, front: PinkCard, back: Grape, flipped: false },
    { id: 6, front: PinkCard, back: Mango, flipped: false },
    { id: 7, front: BlueCard, back: Apple, flipped: false },
    { id: 8, front: BlueCard, back: Orange, flipped: false },
    { id: 9, front: BlueCard, back: Banana, flipped: false },
    { id: 10, front: BlueCard, back: Kiwi, flipped: false },
    { id: 11, front: BlueCard, back: Grape, flipped: false },
    { id: 12, front: BlueCard, back: Mango, flipped: false },
  ]);

  const handleClick = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  return (
    <div className={styles.cardContainer}>
      {cards.map((card) => (
        <div
          className={`${styles.card} ${card.flipped ? styles.cardFlipped : ""}`}
          key={card.id}
          onClick={() => handleClick(card.id)}
        >
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <img src={card.front} alt="Front" />
            </div>
            <div className={styles.cardBack}>
              <img src={card.back} alt="Back" width={100} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
