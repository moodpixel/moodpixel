import Moodgraph from "@/components/moodgraph";
import Image from "next/image";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <main className="flex min-h-screen flex-col items-center p-20 bg-[#EBEDF0]">
      <div className="text-3xl font-black mb-5">{year}</div>
      <Moodgraph />
    </main>
  );
}
