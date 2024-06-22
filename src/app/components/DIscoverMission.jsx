'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'


export default function DiscoverMission() {
  const flowInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: .7 } },
  };
  const flowText = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: .5 } },
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-16 mx-4 md:mx-8 my-16 md:my-32 bg-gray-200 p-10 md:p-20'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={flowText}
      >


        <div>
          <h2 className='text-2xl md:text-6xl font-bold max-w-full md:max-w-96'>Discover our mission</h2>
          <p className='font-bold text-sm md:text-base text-gray-600 my-4 md:w-fit'>
            At TrendLuxe, our mission is to empower individuals through fashion, offering a curated selection of high-quality clothing, wristwatches, and shoes that inspire confidence and joy. We are committed to exceptional craftsmanship, sustainable practices, and innovative designs that reflect the unique style of our customers. Our goal is to create a shopping experience that not only enhances your wardrobe but also elevates your everyday life.
          </p>
          <Link href='/product' className='flex bg-[#2e4053] mt-6 md:mt-10 py-3 md:py-4 px-4 md:px-5 md:max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>
            Shop Now <MdArrowOutward className='text-xl ml-1' />
          </Link>
        </div>
      </motion.div>
      <div className='w-full md:min-w-[50%]'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={flowInVariants}
        >
          <Image src='/mission-img.jpg' alt='Models' width={500} height={500} layout='responsive' />
        </motion.div>
      </div>
    </div>
  );
}
