"use client"
import React, { createContext, useState } from 'react'

const SideBarContext = createContext()

const SidebarProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [val, setVal] = useState(0)
    const [inputVal, setInputVal] = useState(1);
    const [cartItem, setCartItem] = useState([])

  return (
    <SideBarContext.Provider value={{cartItem, setCartItem, isOpen, setIsOpen, val, setVal, inputVal, setInputVal}}>
        {children}
    </SideBarContext.Provider>
  )
}

export {SidebarProvider, SideBarContext}