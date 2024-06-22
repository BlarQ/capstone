'use client'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { productReviews } from "./productReviews";
import Image from 'next/image';
import { Stack } from '@mui/material';
import {Rating} from '@mui/material';
import { motion } from 'framer-motion'


const prdReviews = productReviews.filter(datum => datum.type =='review').slice(0, 3)

export default function CustomersReview() {
    const flowInVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      };

    const reviewLog = prdReviews.map(review => (
        <div key={review.id} className={`${review.color} rounded-xl shadow-sm hover:shadow-lg duration-500`}>
            <div className='flex flex-col items-start gap-y-10 min-h-fit p-10'>
                {/* <div>{review.rating}</div> */}
                <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={review.rating} precision={0.5} className={`${review.iconColor} text-3xl font-extrabold`}/>
                </Stack>

                <div className='font-bold text-[gray]'>
                    <p>{review.review}</p>
                </div>
                <div className='flex justify-center gap-x-4'>
                    <Image className={`${review.ibgColor} rounded-full`} src={`/${review.name.split(' ').join('-')}.png`} alt={review.name} width={60} height={60} />

                    <div className='font-bold flex flex-col justify-between'>
                        <h2 className='text-xl'>{review.name}</h2>
                        <p className={`${review.iconColor} font-bold text-xl`}>{(new Date().getFullYear()) - (new Date(review.age).getFullYear())} years old</p>
                    </div>
                
                </div>
            </div>
        </div>
    ))
  return (
    <div className='mx-5 sm:mx-8 my-10'>
        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={flowInVariants}
    >
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end'>
            <div>
                <h2 className='sm:text-6xl text-3xl w-[60%] sm:w-full font-bold text-[#2e4053]'>Real people, real results</h2>
                <p className='max-w-[39rem] my-2 font-bold text-[gray]'>We value your feedback and would love to hear your thoughts on your shopping experience. Please leave a review and help us improve our service. Your insights are important to us and to future customers. Thank you for shopping with us!</p>
            </div>

            <div className='py-4 sm:py-0'>
                
                <Link href='/product' className='flex bg-[#2e4053] py-4 px-5 sm:max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>Shop Now <MdArrowOutward className='text-xl ml-1' /> </Link>
            </div>
        </div>
        </motion.div>

        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={flowInVariants}
    >

        <div className='grid lg:grid-cols-3 grid-cols-1 my-4 gap-4'>
            {reviewLog}
        </div>
    </motion.div>
    </div>
  )
}
