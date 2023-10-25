import { CardContext } from "@/context/cardContext";
import { useContext } from "react";

function useCard() {
  const ctx = useContext(CardContext);

  return {
    ...ctx,
  };
}

export { useCard };
