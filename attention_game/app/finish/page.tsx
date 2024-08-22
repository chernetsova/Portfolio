
import { Suspense } from "react";
import Loading from "@/app/loading";
import FinishPage from "@/components/FinishPage";


export default async function Finish() {
    
  return(
    <Suspense fallback={<Loading />}>
      <FinishPage /> 
   </Suspense>
  )
}