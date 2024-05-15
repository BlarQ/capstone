import React from 'react'
import styles from "./homebanner.module.css";

export default function HomeBanner() {
  return (
    <div className={styles.nav}>
      <div className='flex items-center h-[95vh]'>
        <div className='pl-16 pr-[40rem]'>
          <p className='text-7xl text-white font-extrabold'>Unlock the essence of timeless style<span className='text-[#2e4053]'>.</span></p>

          <button className='bg-[#2e4053] mt-10 py-3 px-5 rounded-full text-white font-bold'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}
