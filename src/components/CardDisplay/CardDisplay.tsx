"use client";
import { useCard } from "@/hooks/useCard";
import React, { useEffect, useState } from "react";

import { Card, CardContainer } from "./CardDisplay.styles";
import * as Styled from "./CardDisplay.styles";
import { drawCards } from "@/Service/drawCards";

import { getNewDeck } from "@/Service/newDeck";

interface CardProps {
  image: any;
}

const CardComponent: React.FC<CardProps> = ({ image }) => {
  return (
    <Card>
      <img
        src={image ?? "https://deckofcardsapi.com/static/img/back.png"}
        alt={image}
        width={200}
        height={300}
      />
    </Card>
  );
};

// Component that displays two cards side by side
const TwoCardsInRow = (shuffledDeck: any) => {
  const {
    shuffledDeck: { deck_id },
  } = shuffledDeck;

  const [cardData, setCardData] = useState<any[]>([]);
  const [testCard, setTestCard] = useState<any>({
    cardOne: {
      code: "",
      value: "",
      image: "https://deckofcardsapi.com/static/img/back.png",
    },
    cardTwo: {
      code: "",
      value: "",
      image: "https://deckofcardsapi.com/static/img/back.png",
    },
  });
  const [deckIdResponse, setDeckIdResponse] = useState<any>();

  useEffect(() => {
    setDeckIdResponse(deck_id);
  }, [deck_id]);

  const handleOnDraw = async () => {
    const deckofCards = await drawCards(deckIdResponse);
    setCardData(deckofCards.cards.cards);
    console.log(deckofCards);
    deckofCards.cards.cards.map((card) => {});
  };

  const handleNewDeck = async () => {
    const newDeck = await getNewDeck();
    setDeckIdResponse(newDeck.cards.deck_id);
  };

  console.log(testCard);

  return (
    <Styled.Body>
      {JSON.stringify(cardData, 2, null)}
      <Styled.CardContainer>
        {cardData?.map((card, index) => {
          return (
            <CardComponent
              image={card.image}
              key={index}
              title={card.title}
              content={card.content}
            />
          );
        })}
      </Styled.CardContainer>
      <Styled.ButtonsWrapper>
        <button className="draw-button" onClick={handleOnDraw}>
          Draw
        </button>
        <button className="new-button" onClick={handleNewDeck}>
          New Deck
        </button>
      </Styled.ButtonsWrapper>
    </Styled.Body>
  );
};

export default TwoCardsInRow;
