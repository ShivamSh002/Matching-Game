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
  const [pinkCards, setPinkCards] = useState([
    { id: 1, back: Apple, flipped: false },
    { id: 2, back: Orange, flipped: false },
    { id: 3, back: Banana, flipped: false },
    { id: 4, back: Kiwi, flipped: false },
    { id: 5, back: Grape, flipped: false },
    { id: 6, back: Mango, flipped: false },
  ]);

  const [blueCards, setBlueCards] = useState([
    { id: 1, back: Apple, flipped: false },
    { id: 2, back: Orange, flipped: false },
    { id: 3, back: Banana, flipped: false },
    { id: 4, back: Kiwi, flipped: false },
    { id: 5, back: Grape, flipped: false },
    { id: 6, back: Mango, flipped: false },
  ]);

  const [flippedPinkCard, setFlippedPinkCard] = useState(null);
  const [flippedBlueCard, setFlippedBlueCard] = useState(null);
  const handleClick = (
    id,
    cardSet,
    setCardSet,
    flippedCard,
    setFlippedCard
  ) => {
    setCardSet((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card
      )
    );

    if (flippedCard !== null) {
      const flippedCardData = cardSet.find((card) => card.id === flippedCard);
      const currentCardData = cardSet.find((card) => card.id === id);

      if (
        flippedCardData &&
        currentCardData &&
        flippedCardData.id === currentCardData.id &&
        flippedCard !== id
      ) {
        // If the IDs match and the flipped cards are not the same, hide both cards
        setCardSet((prevCards) =>
          prevCards.map((card) =>
            card.id === flippedCardData.id || card.id === currentCardData.id
              ? { ...card, hidden: true }
              : card
          )
        );
        setFlippedCard(null); // Reset flipped card
      } else {
        setFlippedCard(id); // Update flipped card
      }
    } else {
      setFlippedCard(id); // Update flipped card
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        {pinkCards.map((card) => (
          <div
            className={`${styles.card} ${
              card.flipped ? styles.cardFlipped : ""
            } ${!card.visible ? styles.cardHidden : ""}`}
            key={card.id}
            onClick={() =>
              handleClick(
                card.id,
                pinkCards,
                setPinkCards,
                flippedPinkCard,
                setFlippedPinkCard
              )
            }
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
            } ${!card.visible ? styles.cardHidden : ""}`}
            key={card.id}
            onClick={() =>
              handleClick(
                card.id,
                blueCards,
                setBlueCards,
                flippedBlueCard,
                setFlippedBlueCard
              )
            }
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
