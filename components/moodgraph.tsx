"use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { useEffect, useState } from "react";

type DailyMood = {
  date: string;
  mood: number;
};

const moodColors = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];
const moodText = ["Awful", "Bad", "Neutral", "Good", "Great"];

function Moodgraph() {
  const [dailyMoods, setDailyMoods] = useState<DailyMood[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "/api";
        const res = await fetch(url);
        const data = await res.json();
        setDailyMoods(data.dailyMoods);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(fetchData());
  });

  return (
    <Card className="bg-white max-w-xs">
      <CardHeader className="items-center text-2xl font-bold">
        September
      </CardHeader>
      <CardContent className="container flex flex-wrap gap-[2px]">
        {dailyMoods.map((dailyMood) => (
          <div
            className="flex justify-center items-center"
            key={dailyMood.date}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className="w-4 h-4 border-1 border-[#1b1f23]/10 rounded-[25%] border-[0.5px]"
                    style={{
                      backgroundColor: moodColors[dailyMood.mood],
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {moodText[dailyMood.mood]} on {dailyMood.date} September
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default Moodgraph;
