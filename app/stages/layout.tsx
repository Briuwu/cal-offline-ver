import Link from "next/link";
import { StagesAside } from "./components/aside-nav";
import { StagesNavbar } from "./components/navbar";

function StagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh">
      <Link
        href="/start"
        className="block py-3 text-center text-xl font-bold uppercase md:text-2xl lg:text-4xl"
      >
        Ctrl+Alt+Learn
      </Link>
      <StagesNavbar />
      <div className="relative grid min-h-dvh lg:grid-cols-[300px_1fr]">
        <StagesAside />
        <div className="container max-w-4xl py-5">{children}</div>
      </div>
    </div>
  );
}
export default StagesLayout;
