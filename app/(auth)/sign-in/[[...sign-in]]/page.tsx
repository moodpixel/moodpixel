import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="inset-0">
      <SignIn />
    </div>
  );
}
