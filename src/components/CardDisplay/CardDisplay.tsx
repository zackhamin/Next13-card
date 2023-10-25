"use client";
import React, { useEffect, useState } from "react";
import { drawCards } from "@/Service/drawCards";
import { getNewDeck } from "@/Service/newDeck";
import {
  Card,
  CardContainer,
  Body,
  ButtonsWrapper,
} from "./CardDisplay.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CardProps {
  image: any;
}

const CardComponent: React.FC<CardProps> = ({ image }) => {
  return (
    <Card>
      <img src={image} alt={image} width={200} height={300} />
    </Card>
  );
};

const TwoCardsInRow = () => {
  const [testCard, setTestCard] = useState({
    cardOne: {
      suit: "",
      value: "",
      image: "https://deckofcardsapi.com/static/img/back.png",
    },
    cardTwo: {
      suit: "",
      value: "",
      image: "https://deckofcardsapi.com/static/img/back.png",
    },
  });

  const [deckIdResponse, setDeckIdResponse] = useState<any>();
  const [suitMatch, setSuitMatch] = useState(0);
  const [valueMatch, setValueMatch] = useState(0);
  const [cardsLeft, setCardsLeft] = useState(52);

  useEffect(() => {
    handleNewDeck();
  }, []);

  const handleOnDraw = async () => {
    const deckofCards = await drawCards(deckIdResponse);

    setCardsLeft(deckofCards.cards.remaining);

    const newCard = deckofCards.cards.cards[0];

    setTestCard((prevState) => {
      return {
        cardOne: {
          suit: prevState.cardTwo.suit,
          value: prevState.cardTwo.value,
          image: prevState.cardTwo.image,
        },
        cardTwo: {
          suit: newCard.suit,
          value: newCard.value,
          image: newCard.image,
        },
      };
    });
  };

  const handleNewDeck = async () => {
    const newDeck = await getNewDeck();
    setDeckIdResponse(newDeck.cards.deck_id);
  };

  if (testCard.cardOne.value !== "") {
    if (testCard.cardOne.suit === testCard.cardTwo.suit) {
      toast("Suit Match");
      // setSuitMatch(suitMatch + 1); // Update the count
    }
    if (testCard.cardOne.value === testCard.cardTwo.value) {
      toast("Value Match");
      //  setValueMatch(valueMatch + 1); // Update the count
    }
  }

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
