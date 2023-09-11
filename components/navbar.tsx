import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
