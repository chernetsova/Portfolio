import HomePage from "@/components/HomePage";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </main>
  );
}
