'use client'

import { useContext, createContext } from "react"

export type LocFileType = {
  [x in string]: string
}

type LocProvidedPropsType = {
  loc: {},
  children: React.ReactNode
}

export const LocContext = createContext<LocFileType>({});

export const LocProvider = ({ loc, children }: LocProvidedPropsType) => {
  return (
    <LocContext.Provider value={loc}>
      {children}
    </LocContext.Provider>
  )
}

export const useLocalization = () => {
  const locContext = useContext(LocContext);

  return locContext;
}