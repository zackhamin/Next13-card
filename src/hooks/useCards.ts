import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export function useCard(testCard: any) {
  const [suitMatch, setSuitMatch] = useState(0);
  const [valueMatch, setValueMatch] = useState(0);

  useEffect(() => {
    if (testCard.cardOne.value !== "") {
      if (testCard.cardOne.suit === testCard.cardTwo.suit) {
        toast("Suit Match");
        setSuitMatch(suitMatch + 1);
      }
      if (testCard.cardOne.value === testCard.cardTwo.value) {
        toast("Value Match");
        setValueMatch(valueMatch + 1);
      }
    }
  }, [testCard]);

  return { suitMatch, valueMatch };
}
