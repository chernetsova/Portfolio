"use client"
import React, {useContext, createContext} from "react";
import { usePathname} from 'next/navigation';

const pathContext = createContext();

export function PathNameProvider( {children} ) {
    const pathname = usePathname();
    let arrPaths = pathname.split("/");
  
    return (
      <pathContext.Provider value={{arrPaths}}>
        { children }
      </pathContext.Provider>
    )
  }
  
  export const usePathContext = () => {
    return useContext(pathContext);
  }