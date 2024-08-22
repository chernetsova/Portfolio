"use client";

import { useEffect } from "react";
import GameImage from "./GameImage";
import global from "@/app/styles/global.module.scss";
import image from "@/app/styles/image.module.scss";
import { IPropsGame, IImage, StepGame } from "@/types";
import game from "@/store/game";
import msg from "@/store/msg";
import { observer } from "mobx-react-lite";
import { useRouter } from 'next/navigation';
import AlertComponent from "./AlertComponent";


export default observer(function GamePage(props: IPropsGame) {

  let { data, puzzle } = props;

  const router = useRouter();

  const handlerClick = (id: number) => {
    let isPuzzle = puzzle !== null && id === puzzle.id;
    const updateRouter = (url: string) => router.push(url);

    if ( isPuzzle === true ) {
      game.updateStep(StepGame.Win);
      updateRouter("/finish");
    } else {
      game.updateStep(StepGame.Fail);
      updateRouter("/finish");
    }

  }

  useEffect(() => {
    game.updateStep(StepGame.Play);
  })

  return(
    <>
      <div className={global.container}>
        {
          msg.show === true && 
          <AlertComponent message="Для просмотра результата необходимо пройти игру" type="error"/>
        }
        <div className={`${global.title} ${global.textCenter}`}>
          Угадай, чья тень ?
        </div>
      </div>
      <div className={global.container}>
        <div className={image.container}>
          <GameImage 
            className={`${global.textCenter} ${image.resetStyle}`}
            data={puzzle !== null ? puzzle.data : ''}
          />
        </div>
      </div>
      <div className={global.container}>
        <div className={image.container}>
          {
              data.map((d: IImage) => {
                return (
                  
                    <GameImage 
                      key={d.id}
                      className={`${global.textCenter} ${image.content} ${global.cursorPointer}`}
                      data={d.data}
                      onClick={() => handlerClick(d.id) }
                    />
                  
                )
              })
            }
        </div>
      </div>
      
    </>
  )
})