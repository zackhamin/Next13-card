interface DrawCardsProps {
  deck_id: string;
}

export async function drawCards(deck_id: DrawCardsProps) {
  const response = await fetch(`/api/draw-cards/?deck_id=${deck_id}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Status ${response.status} - Error Getting Shuffled Cards`);
  }

  return await response.json();
}
