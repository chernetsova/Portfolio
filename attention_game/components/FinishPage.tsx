"use client";

import { permanentRedirect } from 'next/navigation';
import game from "@/store/game";
import msg from "@/store/msg";
import WinPage from "@/components/WinPage";
import FailPage from "@/components/FailPage";
import { StepGame } from "@/types";
import { useEffect } from 'react';
import { observer } from "mobx-react-lite";


export default observer(function FinishPage() {

  useEffect(() => {
    if ( game.step === StepGame.Play ) {
      msg.updateShow(true);
      permanentRedirect("/game")
    }
  })
  
  return (
    <>
     { game.step === StepGame.Win ? <WinPage /> : 
       game.step === StepGame.Fail ? <FailPage /> : 
       null 
     }
     </>
  )
})