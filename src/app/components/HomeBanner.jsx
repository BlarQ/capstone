import React from 'react'
import styles from "./homebanner.module.css"
import { MdArrowOutward } from "react-icons/md"
import Link from 'next/link'

export default function HomeBanner() {
  return (
    <div className={styles.nav}>
      <div className='flex items-center h-[95vh]'>
        <div className='px-4 -mt-40 sm:mt-0 md:pl-16 md:pr-[40rem]'>
          <p className='text-4xl md:text-7xl text-white font-extrabold'>
            Unlock the essence of timeless style<span className='text-[#2e4053]'>.</span>
          </p>
          <Link href='/'
            className='flex bg-[#2e4053] mt-10 py-4 px-5 max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>
              Shop Now <MdArrowOutward className='text-xl ml-1' />
          </Link>
        </div>
      </div>
    </div>
  )
}
