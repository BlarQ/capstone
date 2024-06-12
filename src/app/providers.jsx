"use client";
import React, { createContext, useEffect, useState } from 'react';

const SideBarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Hydration flag

  const [val, setVal] = useState(0); // Initial server state
  const [inputVal, setInputVal] = useState(1); // Assuming default value for input
  const [cartItem, setCartItem] = useState([]); // Initial server state

  // Update the state after mounting
  useEffect(() => {
    setHasMounted(true);

    if (typeof window !== 'undefined') {
      const savedVal = localStorage.getItem("Item num");
      const parsedVal = parseInt(savedVal, 10);
      setVal(!isNaN(parsedVal) ? parsedVal : 0);

      const savedCart = localStorage.getItem("cartItem");
      try {
        setCartItem(savedCart ? JSON.parse(savedCart) : []);
      } catch (error) {
        console.error("Error parsing cart items from localStorage:", error);
        setCartItem([]);
      }
    }
  }, []);

  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem("Item num", val.toString());
    }
  }, [val, hasMounted]);

  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }
  }, [cartItem, hasMounted]);

  // if (!hasMounted) {
  //   // Render null or a loading indicator to prevent hydration mismatch
  //   return null;
  // }

  return (
    <SideBarContext.Provider value={{ cartItem, setCartItem, isOpen, setIsOpen, val, setVal, inputVal, setInputVal }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SidebarProvider, SideBarContext };
