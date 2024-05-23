import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function CustomersReview() {
  return (
    <div className='mx-8'>
        <div>
            <div>
                <h2>Real people, real results</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veritatis</p>
            </div>

            <div>
                <Link href='/' className='flex bg-[#2e4053] py-4 px-5 sm:max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>Shop Now <MdArrowOutward className='text-xl ml-1' /> </Link>
            </div>
        </div>
    </div>
  )
}
