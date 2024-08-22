
import GamePage from "@/components/GamePage";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { getImages } from "@/app/actions";


export default async function Game() { 

  let list = await getImages();

  const getPuzzle = (value: []) => {
    const l = value.length;
    let idx = 0;

    if ( l > 0 ) idx = Math.floor(Math.random() * l); 

    return value[idx];
  }

  let puzzle = await getPuzzle(list);

  return(
    <Suspense fallback={<Loading />}>
      <GamePage data={list} puzzle={puzzle} />
   </Suspense>
  )

}