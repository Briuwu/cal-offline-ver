import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import banner from "@/public/hero-banner.webp";

function Home() {
  return (
    <main className="container">
      <div className="grid place-items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-3xl font-bold uppercase md:text-left lg:text-7xl">
            Learn by <br /> doing
          </h2>
          <p className="max-w-md">
            An immersive and engaging web-based 2D learning gamified platform
            that enhances your Web Development Skills!
          </p>
          <Button
            variant={"default"}
            className="drop-shadow-small border border-black bg-green-300 font-bold uppercase text-black hover:opacity-80"
            asChild
          >
            <Link href="/stages">Play Now</Link>
          </Button>
        </div>
        <Image src={banner} alt="" width={518} height={699} />
      </div>
    </main>
  );
}
export default Home;
