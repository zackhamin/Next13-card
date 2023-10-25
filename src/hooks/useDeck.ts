import { useState } from "react";
import { getNewDeck } from "@/Service/newDeck";
import { drawCards } from "@/Service/drawCards";

export function useDeck() {
  const [deckId, setDeckId] = useState<string>("");
  const [cardsLeft, setCardsLeft] = useState(52);
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

  const handleNewDeck = async () => {
    const newDeck = await getNewDeck();
    setDeckId(newDeck.cards.deck_id);
    setCardsLeft(52);
  };

  const handleOnDraw = async () => {
    const deckofCards = await drawCards(deckId);

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

  return { deckId, handleNewDeck, cardsLeft, handleOnDraw, testCard };
}
