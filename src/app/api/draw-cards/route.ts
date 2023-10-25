// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { ZodError, z } from "zod";

import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { searchParams } = new URL(req.url);
  const deck_id = searchParams.get("deck_id");

  try {
    const shuffledDeck = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`,
      {
        cache: "no-cache",
        method: "POST",
      }
    );
    const cards = await shuffledDeck.json();

    if (shuffledDeck.ok) {
      return NextResponse.json({ cards });
    } else {
      return NextResponse.json({ message: "Failed Drawing Cards" });
    }
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
