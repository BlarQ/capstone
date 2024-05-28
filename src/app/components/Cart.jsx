import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

export default function Cart() {
  return (
    <div className='flex justify-center items-center'>
        <FiShoppingCart className='text-3xl absolute'/>
        <div className='relative text-xs bg-gray-500 text-white px-1 left-4 bottom-2 rounded-full'>0</div>
    </div>
  )
}
