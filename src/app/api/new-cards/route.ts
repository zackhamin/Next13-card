// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { ZodError, z } from "zod";

import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  try {
    const newDeck = await fetch(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`,
      {
        cache: "no-cache",
        method: "GET",
      }
    );
    const cards = await newDeck.json();

    if (newDeck.ok) {
      return NextResponse.json({ cards });
    } else {
      return NextResponse.json({ message: "Failed Getting New Deck" });
    }
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
