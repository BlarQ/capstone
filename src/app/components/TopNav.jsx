import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6"

export const TopNav = () => {
  return (
    <div className='bg-[#2e4053] py-2 font-semibold flex justify-center items-center cursor-pointer text-white'>
        <Link href='/'>Get a 10% OFF in your first purchase</Link>
        

        <FaArrowRight className='ml-2 hover:ml-3 duration-300 transition-all'/>
    </div>
  )
}
