"use client"
import React, { useContext, createContext } from "react";
import { useSelectedLayoutSegment } from 'next/navigation';

const urlSegment = createContext();

export function UrlSegmentProvider( {children} ) {
  const segment = useSelectedLayoutSegment();
  
  return (
    <urlSegment.Provider value={{segment}}>
      { children }
    </urlSegment.Provider>
  )
}

export const useUrlSegment = () => {
  return useContext(urlSegment);
}