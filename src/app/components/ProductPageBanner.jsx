'use client'
import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion'



export default function ProductPageBanner() {
  const flowInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className='bg-[url(/product-banner.jpg)] h-[80vh] bg-cover mx-4 mb:mx-8 mb-10 md:mb-24 bg-opacity-90'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={flowInVariants}
        className='h-full'
      >
        <div className='flex flex-col items-center justify-center h-full backdrop-blur-sm gap-y-4'>
          <h1 className='text-3xl md:text-7xl text-[#f7f7f7] font-bold'>All Products</h1>
          <p className='text-lg w-[90%] md:w-[50%] text-[#10181b] text-center font-semibold'>Discover our curated collection of stylish shoes, bags, clothes, and wristwatches. Each piece combines quality and design to elevate your look. Enjoy exceptional customer service and fast delivery. Upgrade your wardrobe today!</p>

          <Link href='#explore' className='px-4 py-3 bg-slate-600 rounded-full flex items-center justify-center gap-1 text-[#f7f7f7] font-semibold hover:scale-95 duration-300 group'>
            <p>
              Explore products
            </p>

            <MdArrowOutward className='group-hover:text-xl duration-300' />

          </Link>
        </div>
      </motion.div>
    </div>
  )
}
