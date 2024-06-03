"use client"
import React, { createContext, useState } from 'react'

const SideBarContext = createContext()

const SidebarProvider = ({children}) => {
    const [val, setVal] = useState(3)
    const [inputVal, setInputVal] = useState(1);

  return (
    <SideBarContext.Provider value={{val, setVal, inputVal, setInputVal}}>
        {children}
    </SideBarContext.Provider>
  )
}

export {SidebarProvider, SideBarContext}