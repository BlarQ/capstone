import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6"

export const TopNav = () => {
  return (
    <div>
        <Link className='bg-[#2e4053] py-2 font-semibold flex justify-center items-center cursor-pointer text-white gap-2 hover:gap-3 duration-300' href='/product'>
          Get a 10% OFF in your first purchase
          <FaArrowRight />
        </Link>
        
    </div>
  )
}
