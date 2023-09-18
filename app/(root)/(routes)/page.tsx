"use client";
import Moodgraph from "@/components/moodgraph";
import Image from "next/image";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-[#EBEDF0]">
      <div className="text-3xl font-black">
        {year}
        <Moodgraph />
      </div>
    </main>
  );
}
