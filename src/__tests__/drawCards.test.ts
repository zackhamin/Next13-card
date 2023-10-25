import { drawCards } from "@/Service/drawCards";
import fetchMock from "fetch-mock";
import { createMocks } from "node-mocks-http";

const mockDrawCardsResponse = {
  cards: {
    success: true,
    deck_id: "2l9wt4jbxwzr",
    cards: [
      {
        code: "QH",
        image: "https://deckofcardsapi.com/static/img/QH.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/QH.svg",
          png: "https://deckofcardsapi.com/static/img/QH.png",
        },
        value: "QUEEN",
        suit: "HEARTS",
      },
    ],
    remaining: 51,
  },
};

describe("Draws Cards API", () => {
  beforeEach(() => {
    fetchMock.restore();
    jest.resetAllMocks();
  });

  it("successfully draws cards", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });

    fetchMock.mock("https://deckofcardsapi.com/api/deck/12345/draw/?count=2", {
      status: 200,
      body: mockDrawCardsResponse,
    });

    await drawCards("12345");

    expect(res._getJSONData()).toEqual(mockDrawCardsResponse);
  });
});
