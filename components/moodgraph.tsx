import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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

const moodColors = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];
const moodText = ["Awful", "Bad", "Neutral", "Good", "Great"];

function Moodgraph() {
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
