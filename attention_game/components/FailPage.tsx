"use client"

import Link from 'next/link';
import global from "@/app/styles/global.module.scss";
import finish from "@/app/styles/finish.module.scss";

export default function FailPage() {
  return (
    <>
      <div className={`${global.containerFluid} ${global.containerCenter} ${finish.failBackground}`}>
        <div className={global.container}>
          <div className={`${global.title} ${global.textCenter}`}>Проигрыш!</div>
          <div className={finish.btnContainer}>
            <Link className={`${finish.btn} ${finish.btnVioletLight}`} href="/">Завершить</Link>
            <Link className={`${finish.btn} ${finish.btnViolet}`} href="/game">Играть ещё!</Link>
          </div>
        </div>
      </div>
      
    </>
  )
}