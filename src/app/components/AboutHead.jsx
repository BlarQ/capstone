import Image from 'next/image'
import React from 'react'

export default function AboutHead() {
  return (
    <div className='mx-8 sm:space-y-10'>
        <div className='lg:grid flex flex-col justify-center items-center lg:grid-flow-row grid-flow-col lg:grid-cols-3 sm:grid-rows-1 grid-rows-2 lg:items-end space-y-4 mt-10'>
          <h2 className='sm:col-span-2 text-7xl font-bold sm:items-end items-center'>Chic Style, <br /> Happy Life</h2>

          <p className='flex justify-center sm:mx-4 items-center font-bold text-[gray] text-justify'>Step into a world where fashion meets joy. At our store, we believe that when you look good, you feel good.</p>
        </div>
        <div className='flex space-x-10'>
            <div className='flex flex-col justify-between space-y-5'>
                <Image src='/cotton-bros.jpg' alt='Three guys on cotton shirts' width={800} height={700} />
                <p className='mr-28 font-bold text-[gray]'>Discover an exquisite collection of clothes, wristwatches, and shoes that will elevate your style and brighten your days. Embrace the confidence that comes with chic outfits and stylish accessories. Shop with us and experience the happiness that a great wardrobe can bring.</p>
            </div>

            <div>
                <Image src='/standing-man.jpg' alt='Standing man in suit' width={1200} height={1200} />
            </div>
        </div>
    </div>
  )
}
