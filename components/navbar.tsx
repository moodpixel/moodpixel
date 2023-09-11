import { UserButton } from "@clerk/nextjs";
import { GithubIcon, HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between p-4 items-center shadow-md">
      <div className="flex gap-4">
        <Link href="https://github.com/moodpixel/moodpixel">
          <GithubIcon className="h-6 w-6 hover:text-gray-500 hover:cursor-pointer" />
        </Link>
        <HelpCircle className="h-6 w-6 hover:text-gray-500 hover:cursor-pointer" />
      </div>
      <Image src="/logo.svg" alt="logo" width={150} height={150} />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
