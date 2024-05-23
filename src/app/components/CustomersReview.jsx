import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { productReviews } from "./productReviews";
import Image from 'next/image';
import { Stack } from '@mui/material';
import {Rating} from '@mui/material';

const prdReviews = productReviews.filter(datum => datum.type =='review').slice(0, 3)

export default function CustomersReview() {
    const reviewLog = prdReviews.map(review => (
        <div key={review.id} className={`${review.color}`}>
            <div className='flex flex-col items-start'>
                {/* <div>{review.rating}</div> */}
                <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={review.rating} precision={0.5} readOnly style={{color: `${review.iconColor}`}}/>
                </Stack>
                <div className='flex justify-center gap-x-4'>
                    <Image className='rounded-full' src={`/${review.name.split(' ').join('-')}.png`} alt={review.name} width={50} height={50} />

                    <div className='font-bold'>
                        <h2>{review.name}</h2>
                        <p>{review.age} years old</p>
                    </div>
                
                </div>
            </div>
        </div>
    ))
  return (
    <div className='mx-8'>
        <div className='flex justify-between items-end'>
            <div>
                <h2 className='text-6xl font-bold'>Real people, real results</h2>
                <p className='max-w-[39rem] my-2 font-bold text-[gray]'>We value your feedback and would love to hear your thoughts on your shopping experience. Please leave a review and help us improve our service. Your insights are important to us and to future customers. Thank you for shopping with us!</p>
            </div>

            <div>
                <Link href='/' className='flex bg-[#2e4053] py-4 px-5 sm:max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>Shop Now <MdArrowOutward className='text-xl ml-1' /> </Link>
            </div>
        </div>

        <div className='grid grid-cols-3'>
            {reviewLog}
        </div>
    </div>
  )
}
