import React, { useContext } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { SideBarContext } from '../providers'

export default function Cart() {
  const {isOpen, setIsOpen,val} = useContext(SideBarContext)


  return (
    <div>
  
        
        <div className='flex justify-center items-center cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
        <FiShoppingCart className='text-3xl absolute'/>
        <div className='relative text-xs bg-gray-500 text-white px-1 left-4 bottom-2 rounded-full'>{val}</div>
    </div>
    
    </div>
  )
}
