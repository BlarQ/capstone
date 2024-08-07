import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'


export default function BelowCartImg() {
  const flowInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const FlowThree = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={flowInVariants}
        > 
    <div className='w-[90%] md:w-[90%] mx-4 md:mx-8 flex flex-col-reverse lg:flex-row items-start justify-between md:gap-10'>
      <Image 
        src="/homeimg4.jpg" 
        alt='Man on black jacket' 
        width={650} 
        height={400} 
        className='w-full lg:w-[650px]' 
      />
      <div className='flex flex-col items-center lg:items-start gap-y-10'>
        <div className='flex flex-col items-center md:justify-start md:mb-2 md:items-start justify-center text-center lg:text-left lg:my-6'>
          <h2 className='text-3xl sm:text-5xl lg:text-7xl font-bold text-[#2e4053]'>
            Discover Our Mission for Fashion Trends
          </h2>
          <p className='my-5 font-bold text-[#2e4053] text-sm sm:text-base lg:text-lg'>
            Stay ahead of the curve with our curated selection of stylish shirts, trendy shoes, chic bags, and sleek wallets. We bring you the latest fashion trends, ensuring you always look your best. Shop now and be a trendsetter!
          </p>
          <Link href='/product' className='flex bg-[#2e4053] py-3 sm:py-4 px-4 sm:px-5 md:max-w-36 w-full items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>
              Shop Now <MdArrowOutward className='text-xl ml-1' />
          </Link>
        </div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FlowThree}
        > 
        <div className='flex flex-row mt-10 sm:mt-12 md:gap-4 lg:gap-0 lg:-mt-2 lg:-ml-44'>
          <Image 
            src="/bci1.jpg" 
            alt='Stylish lady with trendy wears' 
            width={250} 
            height={250} 
            className='w-[33.3%] sm:w-64' 
          />
          <Image 
            src="/bci2.jpg" 
            alt='Man on black suit' 
            width={250} 
            height={250} 
            className='w-[33.3%] sm:w-64' 
          />
          <Image 
            src="/bci3.jpg" 
            alt='Pair of black nike shoes' 
            width={250} 
            height={250} 
            className='w-[33.3%] sm:w-64' 
          />
        </div>
        </motion.div>
      </div>
    </div>
    </motion.div>
  );
}
