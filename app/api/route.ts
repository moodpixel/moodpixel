import { NextResponse } from "next/server";

const dailyMoods = [
  {
    date: 1,
    mood: 2,
  },
  {
    date: 2,
    mood: 1,
  },
  {
    date: 3,
    mood: 0,
  },
  {
    date: 4,
    mood: 3,
  },
  {
    date: 5,
    mood: 4,
  },
  {
    date: 6,
    mood: 2,
  },
  {
    date: 7,
    mood: 1,
  },
  {
    date: 8,
    mood: 0,
  },
  {
    date: 9,
    mood: 3,
  },
  {
    date: 10,
    mood: 4,
  },
  {
    date: 11,
    mood: 2,
  },
  {
    date: 12,
    mood: 0,
  },
  {
    date: 13,
    mood: 0,
  },
  {
    date: 14,
    mood: 3,
  },
  {
    date: 15,
    mood: 4,
  },
  {
    date: 16,
    mood: 0,
  },
  {
    date: 17,
    mood: 1,
  },
  {
    date: 18,
    mood: 0,
  },
  {
    date: 19,
    mood: 3,
  },
  {
    date: 20,
    mood: 4,
  },
  {
    date: 21,
    mood: 2,
  },
  {
    date: 22,
    mood: 1,
  },
  {
    date: 23,
    mood: 0,
  },
  {
    date: 24,
    mood: 3,
  },
  {
    date: 25,
    mood: 4,
  },
  {
    date: 26,
    mood: 2,
  },
  {
    date: 27,
    mood: 1,
  },
  {
    date: 28,
    mood: 0,
  },
  {
    date: 29,
    mood: 3,
  },
  {
    date: 30,
    mood: 4,
  },
];

export async function GET() {
  const res = { dailyMoods };
  return NextResponse.json(res);
}
