"use client"
import React, { createContext, useEffect, useState } from 'react'

const SideBarContext = createContext()

const SidebarProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [val, setVal] = useState(() => {
      const savedVal = localStorage.getItem("Item num")
      return savedVal !== null ? parseInt(savedVal, 10) : 0
    })
    const [inputVal, setInputVal] = useState(1);
    const [cartItem, setCartItem] = useState(() => {
      const savedCart = localStorage.getItem("cartItem")
      return savedCart !== null? JSON.parse(savedCart) : []
    })

    useEffect(() => {
      localStorage.setItem("Item num", val)
      localStorage.setItem("cartItem", JSON.stringify(cartItem))
    })

  return (
    <SideBarContext.Provider value={{cartItem, setCartItem, isOpen, setIsOpen, val, setVal, inputVal, setInputVal}}>
        {children}
    </SideBarContext.Provider>
  )
}

export {SidebarProvider, SideBarContext}