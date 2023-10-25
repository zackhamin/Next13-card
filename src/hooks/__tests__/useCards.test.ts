import { renderHook } from "@testing-library/react";
import { useCard } from "../useCards";

// Mock react-toastify
jest.mock("react-toastify", () => ({
  toast: jest.fn(),
}));

describe("useCard Hook", () => {
  it("should NOT increment suitMatch when suit does not match", () => {
    const initialTestCard = {
      cardOne: {
        suit: "Hearts",
        value: "Ace",
        image: "",
      },
      cardTwo: {
        suit: "SPADES",
        value: "King",
        image: "",
      },
    };

    const { result } = renderHook(() => useCard(initialTestCard));

    expect(result.current.suitMatch).toBe(0);
  });

  describe("useCard Hook", () => {
    it("should increment suitMatch when suit matches", () => {
      const updatedTestCard = {
        cardOne: {
          suit: "Hearts",
          value: "Ace",
        },
        cardTwo: {
          suit: "Hearts",
          value: "Queen",
        },
      };

      const { result } = renderHook(() => useCard(updatedTestCard));
      // Check if suitMatch has been incremented
      expect(result.current.suitMatch).toBe(1);
    });
  });

  describe("useCard Hook", () => {
    it("should increment valueMatch when value matches", () => {
      const initialTestCard = {
        cardOne: {
          suit: "Diamonds",
          value: "eight",
        },
        cardTwo: {
          suit: "Hearts",
          value: "Ten",
        },
      };

      const { result } = renderHook(() => useCard(initialTestCard));

      expect(result.current.valueMatch).toBe(0);
    });
  });

  describe("useCard Hook", () => {
    it("should increment valueMatch when value matches", () => {
      const initialTestCard = {
        cardOne: {
          suit: "Diamonds",
          value: "eight",
        },
        cardTwo: {
          suit: "Hearts",
          value: "eight",
        },
      };

      const { result } = renderHook(() => useCard(initialTestCard));

      expect(result.current.valueMatch).toBe(1);
    });
  });
});
