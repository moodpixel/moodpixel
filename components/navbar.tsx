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
        <div className="flex gap-4">
          <Link href="https://github.com/moodpixel/moodpixel" target="_blank">
            <GithubIcon className="h-6 w-6 hover:text-gray-500 hover:cursor-pointer" />
          </Link>

          <Dialog>
            <DialogTrigger>
              <HelpCircle className="h-6 w-6 hover:text-gray-500 hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="w-4/5">
              <DialogHeader>
                <DialogTitle>
                  <h2 className="text-xl font-semibold mb-4">
                    Welcome to Mood Pixel
                  </h2>
                </DialogTitle>
                <DialogDescription>
                  <div className="text-gray-700 space-y-4">
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
                        Track Your Journey: See your emotional ups and downs
                        over the course of a year.
                      </li>
                    </ul>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}

export default Navbar;
