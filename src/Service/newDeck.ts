interface DrawCardsProps {
  deck_id: string;
}

export async function getNewDeck() {
  const response = await fetch(`/api/new-cards/`, {
    method: "GET",
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(
      `Status ${response.status} - Error Getting New Deck of Cards`
    );
  }

  return await response.json();
}
