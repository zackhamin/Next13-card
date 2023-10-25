import TwoCardsInRow from "@/components/CardDisplay/CardDisplay";

import React from "react";

export default async function Home() {
  //Server component
  //API
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const shuffledDeck = await response.json();

  return <TwoCardsInRow shuffledDeck={shuffledDeck} />;
}
