import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="mb-10">
      <h1 className="py-5 text-center text-xl font-bold uppercase md:text-2xl lg:text-4xl">
        Ctrl+Alt+Learn
      </h1>
      <nav className="border-y-2 border-black">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center">
            <li>
              <Button asChild variant={"link"}>
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"link"}>
                <Link href="/about">About</Link>
              </Button>
            </li>
          </ul>
          {/* <SignedIn>
            <Button
              variant={"ghost"}
              className="rounded-none border-x-2 border-black bg-red-500 font-bold uppercase"
            >
              <SignOutButton>Logout</SignOutButton>
            </Button>
          </SignedIn>
          <SignedOut>
            <Button
              variant={"ghost"}
              className="rounded-none border-x-2 border-black bg-blue-200 font-bold uppercase"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut> */}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
