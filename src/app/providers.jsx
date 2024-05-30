"use client"
import React, { createContext, useState } from 'react'

const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
    const [val, setVal] = useState(0)
    const [inputVal, setInputVal] = useState(1)
  return (
    <SidebarContext.Provider value={{val,setVal, inputVal, setInputVal}}>
        {children}
    </SidebarContext.Provider>
  )
}

export {SidebarProvider, SidebarContext}