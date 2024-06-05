import React, { useContext } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { SideBarContext } from '../providers'

export default function Cart() {
  const {val} = useContext(SideBarContext)
  return (
    <div className='flex justify-center items-center'>
        <FiShoppingCart className='text-3xl absolute'/>
        <div className='relative text-xs bg-gray-500 text-white px-1 left-4 bottom-2 rounded-full'>{val}</div>
    </div>
  )
}
