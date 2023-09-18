import Image from "next/image";
import Link from "next/link";

import { UserButton } from "@clerk/nextjs";

import { GithubIcon, HelpCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-white">
      <div className="mx-auto flex justify-between max-w-6xl items-center">
        <Dialog>
          <DialogTrigger>
            <HelpCircle className="h-6 w-6 hover:text-gray-500 hover:cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="w-4/5 bg-[#40C463] rounded-sm">
            <DialogHeader>
              <DialogTitle>
                <h2 className="font-semibold mb-4 text-start text-foreground">
                  Welcome to Mood Pixel ✨
                </h2>
              </DialogTitle>
              <DialogDescription>
                <div className="text-foreground space-y-4 text-start">
                  <p>
                    Mood Pixel is your personal mood-tracking companion,
                    designed to help you understand and improve your mental
                    well-being. With Mood Pixel, you can:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>
                      Log Your Thoughts: Keep a digital journal of your daily
                      experiences and emotions.
                    </li>
                    <li>
                      Track Your Journey: See your emotional ups and downs over
                      the course of a year.
                    </li>
                  </ul>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}

export default Navbar;
