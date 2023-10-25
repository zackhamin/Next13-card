"use client";
import React, { useEffect } from "react";
import { useDeck } from "../../hooks/useDeck"; // Custom hook for deck management
import { useCard } from "../../hooks/useCards"; // Custom hook for card management
import {
  CardContainer,
  Body,
  ButtonsWrapper,
  Card,
} from "./CardDisplay.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface CardProps {
  image: any;
}
const TwoCardsInRow = () => {
  const { deckId, handleNewDeck, cardsLeft, handleOnDraw, testCard } =
    useDeck();

  const { suitMatch, valueMatch } = useCard(testCard);

  const CardComponent: React.FC<CardProps> = ({ image }) => {
    return (
      <Card>
        <img src={image} alt={image} width={200} height={300} />
      </Card>
    );
  };

  useEffect(() => {
    handleNewDeck();
  }, []);

  return (
    <Body>
      <CardContainer>
        <CardComponent image={testCard.cardOne.image} />
        <CardComponent image={testCard.cardTwo.image} />
      </CardContainer>
      <ToastContainer />

      {cardsLeft !== 0 && (
        <ButtonsWrapper>
          <button className="draw-button" onClick={handleOnDraw}>
            Draw
          </button>
          <button className="new-button" onClick={handleNewDeck}>
            New Deck
          </button>
        </ButtonsWrapper>
      )}
      {cardsLeft === 0 && (
        <h1>{`Suit Match ${suitMatch}, Value Match ${valueMatch}`}</h1>
      )}
    </Body>
  );
};

export default TwoCardsInRow;
