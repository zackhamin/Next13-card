interface DrawCardsProps {
  deck_id: string;
}

export const drawCards = async (deck_id: string) => {
  const response = await fetch(`/api/draw-cards/?deck_id=${deck_id}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Status ${response.status} - Error Getting Shuffled Cards`);
  }

  return await response.json();
};
