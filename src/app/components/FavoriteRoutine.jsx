import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function FavoriteRoutine() {
  return (
    <div className='my-10 mx-8'>
        <div className='flex justify-between items-end'>
            <h2 className='text-6xl font-bold text-[#2e4053]'>Your Favorite <br /> Fashion Routines</h2>

            <div>
                <Link href='/' className='flex bg-[#2e4053] py-4 px-5 sm:max-w-36 items-center justify-center rounded-full text-white font-bold hover:scale-95 duration-300'>Shop Now <MdArrowOutward className='text-xl ml-1' /> </Link>
            </div>
        </div>

        <div className='grid grid-cols-3'>
            <div>
                <div className=''>
                    <Image src='' alt='' width={300} height={700} />
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat, voluptatibus hic eos rerum, pariatur distinctio nobis aliquid suscipit voluptatem laboriosam ullam voluptate accusamus, unde quia accusantium vel! Quo, voluptates!
                </div>
            </div>
            <div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat, voluptatibus hic eos rerum, pariatur distinctio nobis aliquid suscipit voluptatem laboriosam ullam voluptate accusamus, unde quia accusantium vel! Quo, voluptates!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat, voluptatibus hic eos rerum, pariatur distinctio nobis aliquid suscipit voluptatem laboriosam ullam voluptate accusamus, unde quia accusantium vel! Quo, voluptates!
                </div>
            </div>
            <div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat, voluptatibus hic eos rerum, pariatur distinctio nobis aliquid suscipit voluptatem laboriosam ullam voluptate accusamus, unde quia accusantium vel! Quo, voluptates!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat, voluptatibus hic eos rerum, pariatur distinctio nobis aliquid suscipit voluptatem laboriosam ullam voluptate accusamus, unde quia accusantium vel! Quo, voluptates!
                </div>
            </div>
            
        </div>
    </div>
  )
}
