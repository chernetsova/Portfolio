"use client";

import { IPropsGameImage } from "@/types";

export default function GameImage(props: IPropsGameImage ) {
  let { data, onClick, className } = props ;


  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{__html: data}} 
      onClick={onClick}
    ></div>
  )
}