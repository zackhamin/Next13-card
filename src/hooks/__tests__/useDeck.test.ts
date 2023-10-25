import { renderHook } from "@testing-library/react";
import { useDeck } from "../useDeck";

jest.mock("../Service/newDeck", () => ({
  getNewDeck: jest.fn().mockResolvedValue({
    cards: {
      deck_id: "mocked-deck-id",
    },
  }),
}));

describe("useDeck Hook", () => {
  it("should set the initial deckId and cardsLeft values", () => {
    const { result } = renderHook(() => useDeck());

    // Initial values
    expect(result.current.deckId).toBe("");
    expect(result.current.cardsLeft).toBe(52);
  });

  //   it("should set deckId and cardsLeft values when calling handleNewDeck", async () => {
  //     const { result } = renderHook(() => useDeck());

  //     expect(result.current.deckId).toBe("");
  //     expect(result.current.cardsLeft).toBe(52);

  //     await result.current.handleNewDeck();

  //     // Expect updated values
  //     expect(result.current.deckId).not.toBe("");
  //     expect(result.current.cardsLeft).toBe(52);
  //   });

  //   it("should update testCard and cardsLeft when calling handleOnDraw", async () => {
  //     const { result } = renderHook(() => useDeck());

  //     const initialTestCard = result.current.testCard;

  //     await result.current.handleOnDraw();

  //     // Expect updated testCard and decreased cardsLeft
  //     expect(result.current.testCard).not.toEqual(initialTestCard);
  //     expect(result.current.cardsLeft).toBe(51);
  //   });
});
