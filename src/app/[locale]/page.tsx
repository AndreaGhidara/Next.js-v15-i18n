import Navbar from "@/components/organisms/Navbar";
import { Suspense } from "react";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {

  //Test per vedere il loading
  await delay(3000);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      
    </div>
  );
}
