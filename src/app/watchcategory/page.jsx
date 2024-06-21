import React from 'react'
import { data } from "../components/data";
import Link from 'next/link';
import Image from 'next/image';

const product = data.filter(datum => datum.type === 'Wristwatch')

export default function page() {
    const watchProduct = product.map(watch =>(
        <section key={watch.id}>
            <div className='flex justify-center text-[#2e4053] items-center border-2 group border-[#f7f7f7] hover:bg-[#2e4053] duration-300 hover:text-white hover:shadow-sm flex-col'>
                <Link href={`/product/${watch.name.split(' ').join('-')}`}>
                    <h2 className='ml-1 sm:ml-0 sm:text-3xl text-left my-4 font-bold'>{watch.name}</h2>
                    <p className='ml-1 sm:ml-0 sm:text-xl text-left font-semibold'><span>&#8358;</span><span>{watch.amount.toLocaleString()}</span></p>
                    <section>
                        <Image className='mb-8 group-hover:scale-105 duration-300 hover:-translate-y-5' src={`/${watch.name.split(' ').join('-')}.png`} alt={watch.name} title={watch.name}
                            width={300}
                            height={300} />
                    </section>
                </Link>

                <Link className='relative shadow-md -mt-16 py-4 flex items-center justify-center space-x-1 px-6 rounded-full bg-[#f7f7f7] font-bold text-[#2e4053] hover:text-white hover:bg-[#34c759] hover:scale-95 duration-300' href='/'>
                    <p>Add to cart</p>
                </Link>

                <Link className='flex items-center justify-center mt-4 mb-10 hover:text-[#34c759] duration-300' href={`/product/${watch.name.split(' ').join('-')}`}>
                    Learn more
                </Link>
            </div>
        </section>
    ))
  return (
    <div className='my-10'>
        <h1 className='text-4xl uppercase font-bold text-center my-5 font-serif text-[#2e4053]'>Wriswatch</h1>


        <div className = 'mx-4 sm:mx-8 grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-3 sm:grid-rows-3'>

        {watchProduct}
        </div>
    </div>
  )
}
