import React from 'react'
import styles from "./homebanner.module.css"
import { MdArrowOutward } from "react-icons/md"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomeBanner() {

  const flowInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={flowInVariants}
    >
      <div className={styles.nav}>
        <div className='flex items-center h-[95vh]'>
          <div className='px-4 -mt-40 sm:mt-0 md:pl-16 md:pr-[40rem]'>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={flowInVariants}
            >
              <p className='text-4xl md:text-7xl text-white font-extrabold'>
                Unlock the essence of timeless style<span className='text-[#2e4053]'>.</span>
              </p>
              <Link href='/product'
                className='flex bg-[#2e4053] mt-10 py-4 px-5 md:max-w-36 w-full items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>
                Shop Now <MdArrowOutward className='text-xl ml-1' />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
